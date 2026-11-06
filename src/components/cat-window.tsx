"use client";

/**
 * Interactive cat-by-the-window, adapted from the Stitch reference
 * (design/code.html hero) and re-implemented as an isolated, self-cleaning
 * React component.
 *
 * Interaction state machine:
 *   IDLE → APPROACH → STALKING → ATTACK → CATCH | MISS
 *
 * Engineering notes:
 * - All continuous work runs through one requestAnimationFrame loop plus CSS
 *   keyframes; no React re-renders happen per frame (DOM is mutated via refs).
 * - `prefers-reduced-motion` disables every animated layer and the frame loop;
 *   the illustration renders as a static window scene.
 * - An IntersectionObserver pauses the loop whenever the card is offscreen.
 * - Event listeners, rAF handles, and timers are all cleaned up on unmount.
 * - The card exposes no click handlers, so it never interferes with links or
 *   page scrolling.
 */
import { useEffect, useRef } from "react";

export function CatWindow() {
  const cardRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilLeftRef = useRef<SVGEllipseElement>(null);
  const pupilRightRef = useRef<SVGEllipseElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const tailRef = useRef<SVGGElement>(null);
  const whiskersRef = useRef<SVGGElement>(null);
  const eyelidLeftRef = useRef<SVGRectElement>(null);
  const eyelidRightRef = useRef<SVGRectElement>(null);
  const happyEyesRef = useRef<SVGGElement>(null);
  const idlePawRef = useRef<SVGGElement>(null);
  const swipePawRef = useRef<SVGGElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const substatusRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const statusDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const svg = svgRef.current;
    const leftPupil = pupilLeftRef.current;
    const rightPupil = pupilRightRef.current;
    const head = headRef.current;
    const body = bodyRef.current;
    const tail = tailRef.current;
    const whiskers = whiskersRef.current;
    const leftEyelid = eyelidLeftRef.current;
    const rightEyelid = eyelidRightRef.current;
    const happyEyes = happyEyesRef.current;
    const idlePaw = idlePawRef.current;
    const swipePaw = swipePawRef.current;

    if (!card || !svg || !leftPupil || !rightPupil) return;

    // Reduced motion: render the static scene, wire up nothing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const LEFT_DEFAULT_X = 152;
    const RIGHT_DEFAULT_X = 202;
    const DEFAULT_Y = 148;
    const MAX_PUPIL_OFFSET = 4.2;

    let state = "IDLE";
    let mouseX = window.innerWidth * 0.62;
    let mouseY = window.innerHeight * 0.3;
    let isMouseInsideCard = false;
    let lastMoveTime = Date.now();
    let inAttackAnimation = false;
    let lastSwipeTime = 0;

    let currentPupilX = 0;
    let currentPupilY = 0;
    let currentPupilRadius = 2.8;
    let targetPupilRadius = 2.8;
    let currentHeadRot = 0;
    let currentHeadX = 0;
    let currentHeadY = 0;

    let rafId = 0;
    const timers: Array<ReturnType<typeof setTimeout> | null> = [
      null, // blinkStart
      null, // blinkEyeClose
      null, // blinkNext
      null, // attackLunge
      null, // strikeReaction
      null, // resetAfterReaction
      null  // pawSettle
    ];
    let timerIndex = 0;

    const schedule = (fn: () => void, delay: number) => {
      const slot = timerIndex++ % timers.length;
      if (timers[slot]) clearTimeout(timers[slot]);
      timers[slot] = setTimeout(fn, delay);
    };

    const clearTimers = () => {
      timers.forEach((timer) => timer && clearTimeout(timer));
    };

    const setBadgeText = (value: string) => {
      if (badgeRef.current) badgeRef.current.textContent = value;
    };
    const setSubstatus = (value: string) => {
      if (substatusRef.current) substatusRef.current.textContent = value;
    };
    const setTip = (value: string) => {
      if (tipRef.current) tipRef.current.textContent = value;
    };
    const setStatusDot = (cls: string) => {
      if (statusDotRef.current) statusDotRef.current.className = cls;
    };

    const applyBodyPose = (scaleY: number, shiftY: number) => {
      if (body) {
        body.style.transformOrigin = "177px 350px";
        body.style.transform = `scaleY(${scaleY}) translateY(${shiftY}px)`;
      }
    };

    /* ------------------------------ blinking ------------------------------ */
    const triggerBlink = () => {
      if (!leftEyelid || !rightEyelid) return;
      if (inAttackAnimation && state === "CATCH") return;
      leftEyelid.style.transform = "translateY(11px)";
      rightEyelid.style.transform = "translateY(11px)";
      schedule(() => {
        if (leftEyelid && rightEyelid && state !== "CATCH") {
          leftEyelid.style.transform = "translateY(0)";
          rightEyelid.style.transform = "translateY(0)";
        }
        schedule(triggerBlink, 2600 + Math.random() * 3400);
      }, 110);
    };
    schedule(triggerBlink, 2200);

    /* ---------------------------- paw attacks ----------------------------- */
    const retractPaw = (tipMessage: string) => {
      card.classList.remove("cat-purr");
      if (happyEyes) happyEyes.style.opacity = "0";
      if (leftEyelid && rightEyelid) {
        leftEyelid.style.transform = "translateY(0)";
        rightEyelid.style.transform = "translateY(0)";
      }
      if (swipePaw) {
        swipePaw.style.transition =
          "transform 0.28s cubic-bezier(0.3, 0.1, 0.3, 1), opacity 0.2s";
        swipePaw.style.transform = "translate(0, 0) scale(0.9)";
        swipePaw.style.opacity = "0";
      }
      schedule(() => {
        if (idlePaw) idlePaw.style.opacity = "1";
        applyBodyPose(1, 0);
        if (head) head.style.transition = "";
        if (whiskers) whiskers.style.transform = "rotate(0deg)";
        inAttackAnimation = false;
        state = isMouseInsideCard ? "ALERT" : "IDLE";
        setTip(tipMessage);
      }, 280);
    };

    const handleCatch = () => {
      state = "CATCH";
      setBadgeText("STATE: PIN_SUCCESS");
      setSubstatus("BEHAVIOR: PURRING_CONTENT");
      setTip("Purring softly · captured!");
      setStatusDot("h-2.5 w-2.5 rounded-full bg-violet-bright");

      if (leftEyelid && rightEyelid) {
        leftEyelid.style.transform = "translateY(11px)";
        rightEyelid.style.transform = "translateY(11px)";
      }
      if (happyEyes) happyEyes.style.opacity = "1";
      if (whiskers) whiskers.style.transform = "rotate(6deg)";
      card.classList.add("cat-purr");

      schedule(() => retractPaw("Settled back in, content."), 850);
    };

    const handleMiss = () => {
      state = "MISS";
      setBadgeText("STATE: MISSED_SWIPE");
      setSubstatus("BEHAVIOR: PUZZLED_TILT");
      const remarks = [
        "Almost had it!",
        "Quick reflexes!",
        "Sneaky target!",
        "Recomputing…"
      ];
      setTip("Missed! Cat cocks head curiously");
      if (badgeRef.current) {
        badgeRef.current.textContent =
          remarks[Math.floor(Math.random() * remarks.length)];
      }

      if (head) {
        head.style.transition = "transform 0.22s ease-out";
        head.style.transform = "translate(4px, -2px) rotate(-11deg)";
      }

      schedule(() => retractPaw("Ready for the next play"), 700);
    };

    const triggerPawSwipe = (targetX: number, targetY: number) => {
      if (inAttackAnimation) return;
      const now = Date.now();
      if (now - lastSwipeTime < 800) return;
      lastSwipeTime = now;
      inAttackAnimation = true;
      state = "ATTACK";

      setBadgeText("STATE: SWIPE_POUNCE");
      setSubstatus("BEHAVIOR: LUNGE_ENGAGED");
      setTip("Paw strike!");
      setStatusDot("h-2.5 w-2.5 rounded-full bg-coral animate-pulse");

      // screen → SVG viewBox coordinates
      const svgRect = svg.getBoundingClientRect();
      const scaleX = 360 / svgRect.width;
      const scaleY = 410 / svgRect.height;
      const targetSvgX = Math.min(
        310,
        Math.max(50, (targetX - svgRect.left) * scaleX)
      );
      const targetSvgY = Math.min(
        340,
        Math.max(120, (targetY - svgRect.top) * scaleY)
      );

      // phase 1 — anticipation crouch
      applyBodyPose(0.93, 9);
      if (head) {
        head.style.transform = `translate(${currentHeadX}px, ${
          currentHeadY + 5
        }px) rotate(${currentHeadRot}deg)`;
      }
      if (whiskers) whiskers.style.transform = "rotate(-4deg)";

      // phase 2 — swift forward lunge
      schedule(() => {
        if (idlePaw) idlePaw.style.opacity = "0";
        if (swipePaw) {
          swipePaw.style.opacity = "1";
          swipePaw.style.transition =
            "transform 0.16s cubic-bezier(0.1, 0.9, 0.2, 1)";
          const dx = targetSvgX - 204;
          const dy = targetSvgY - 330;
          swipePaw.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(
            1
          )}px) rotate(${(dx * 0.18).toFixed(1)}deg)`;
        }

        // phase 3 — catch vs miss, 160ms after the swipe lands
        schedule(() => {
          const timeSinceMove = Date.now() - lastMoveTime;
          const distAtStrike = Math.hypot(mouseX - targetX, mouseY - targetY);
          if (distAtStrike < 45 || timeSinceMove > 140) {
            handleCatch();
          } else {
            handleMiss();
          }
        }, 160);
      }, 110);
    };

    /* ------------------------- pointer & touch I/O ------------------------ */
    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      lastMoveTime = Date.now();
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      mouseX = touch.clientX;
      mouseY = touch.clientY;
      lastMoveTime = Date.now();
      isMouseInsideCard = true;
      triggerPawSwipe(touch.clientX, touch.clientY);
    };

    const onMouseEnter = () => {
      isMouseInsideCard = true;
    };
    const onMouseLeave = () => {
      isMouseInsideCard = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    card.addEventListener("mouseenter", onMouseEnter, { passive: true });
    card.addEventListener("mouseleave", onMouseLeave, { passive: true });
    card.addEventListener("touchstart", onTouchStart, { passive: true });

    /* --------------------- visibility-aware frame loop -------------------- */
    let isVisible = true;

    const updateFrame = () => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const eyeBox = leftPupil.getBoundingClientRect();
      const eyeX = eyeBox.left + eyeBox.width / 2;
      const eyeY = eyeBox.top + eyeBox.height / 2;
      const dxEye = mouseX - eyeX;
      const dyEye = mouseY - eyeY;
      const distFromCat = Math.hypot(dxEye, dyEye);
      const distFromCardCenter = Math.hypot(
        mouseX - cardCenterX,
        mouseY - cardCenterY
      );

      if (!inAttackAnimation) {
        if (isMouseInsideCard) {
          if (distFromCat < 85) {
            triggerPawSwipe(mouseX, mouseY);
          } else {
            state = "STALKING";
            targetPupilRadius = 4.2;
            setBadgeText("STATE: STALKING");
            setSubstatus("BEHAVIOR: PREDATOR_STALK");
            if (tail) tail.setAttribute("class", "cat-tail-alert");
            applyBodyPose(0.97, 4);
            if (whiskers) whiskers.style.transform = "rotate(3deg)";
          }
        } else if (distFromCardCenter < 400) {
          state = "APPROACH";
          targetPupilRadius = 3.2;
          setBadgeText("STATE: CURSOR_DETECTED");
          setSubstatus("BEHAVIOR: GAZE_LOCKED");
          if (tail) tail.setAttribute("class", "cat-tail-idle");
          applyBodyPose(1, 0);
          if (whiskers) whiskers.style.transform = "rotate(0deg)";
        } else {
          state = "IDLE";
          targetPupilRadius = 2.7;
          setBadgeText("STATE: IDLE");
          setSubstatus("BEHAVIOR: RELAXED_IDLE");
          if (tail) tail.setAttribute("class", "cat-tail-idle");
          applyBodyPose(1, 0);
          if (whiskers) whiskers.style.transform = "rotate(0deg)";
        }
      }

      // pupil gaze
      let targetOffsetX = 0;
      let targetOffsetY = 0;
      if (state === "IDLE") {
        const t = Date.now() * 0.001;
        targetOffsetX = Math.sin(t * 0.5) * 1.5;
        targetOffsetY = Math.cos(t * 0.3) * 1.2;
      } else {
        const angle = Math.atan2(dyEye, dxEye);
        const clamped = Math.min(distFromCat / 120, 1);
        targetOffsetX = Math.cos(angle) * clamped * MAX_PUPIL_OFFSET;
        targetOffsetY = Math.sin(angle) * clamped * MAX_PUPIL_OFFSET;
      }
      currentPupilX += (targetOffsetX - currentPupilX) * 0.18;
      currentPupilY += (targetOffsetY - currentPupilY) * 0.18;
      currentPupilRadius += (targetPupilRadius - currentPupilRadius) * 0.12;

      leftPupil.setAttribute("cx", (LEFT_DEFAULT_X + currentPupilX).toFixed(2));
      leftPupil.setAttribute("cy", (DEFAULT_Y + currentPupilY).toFixed(2));
      leftPupil.setAttribute("rx", currentPupilRadius.toFixed(2));
      rightPupil.setAttribute("cx", (RIGHT_DEFAULT_X + currentPupilX).toFixed(2));
      rightPupil.setAttribute("cy", (DEFAULT_Y + currentPupilY).toFixed(2));
      rightPupil.setAttribute("rx", currentPupilRadius.toFixed(2));

      // head spring tilt only while not locked in an attack animation
      if (!inAttackAnimation && head) {
        const targetRot = Math.max(
          -8,
          Math.min(8, ((mouseX - cardCenterX) / cardRect.width) * 14)
        );
        const targetShiftX = Math.max(
          -5,
          Math.min(5, ((mouseX - cardCenterX) / cardRect.width) * 8)
        );
        const targetShiftY = Math.max(
          -4,
          Math.min(4, ((mouseY - cardCenterY) / cardRect.height) * 7)
        );
        currentHeadRot += (targetRot - currentHeadRot) * 0.1;
        currentHeadX += (targetShiftX - currentHeadX) * 0.1;
        currentHeadY += (targetShiftY - currentHeadY) * 0.1;
        head.style.transform = `translate(${currentHeadX.toFixed(
          2
        )}px, ${currentHeadY.toFixed(2)}px) rotate(${currentHeadRot.toFixed(2)}deg)`;
      }

      rafId = requestAnimationFrame(updateFrame);
    };

    const startLoop = () => {
      if (!isVisible || rafId) return;
      rafId = requestAnimationFrame(updateFrame);
    };
    const stopLoop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(card);
    startLoop();

    return () => {
      stopLoop();
      clearTimers();
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
      card.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      role="img"
      aria-label="Illustration of a cat sitting by an arched window at night. It watches your cursor, stalks it when it gets close, and playfully paws at it."
      className="relative mx-auto flex h-[440px] w-full max-w-[400px] select-none flex-col items-center justify-between overflow-hidden rounded-2xl border-2 border-ink bg-white p-4 shadow-card-xl sm:h-[512px] sm:max-w-[430px]"
      data-cat-window
    >
      {/* header telemetry strip */}
      <div className="pointer-events-none flex w-full items-center justify-between border-b border-hairline pb-2 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-violet" />
          <span className="font-semibold text-ink">
            STUDIO_OBSERVATORY // CAT_WINDOW
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span ref={statusDotRef} className="h-2.5 w-2.5 rounded-full bg-violet" />
          <span ref={badgeRef} className="font-semibold uppercase text-violet">
            STATE: IDLE
          </span>
        </div>
      </div>

      {/* SVG window stage */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <svg
          ref={svgRef}
          viewBox="0 0 360 410"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full max-h-[430px] w-full"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#181a2e" />
              <stop offset="50%" stopColor="#272b4c" />
              <stop offset="85%" stopColor="#4d446b" />
              <stop offset="100%" stopColor="#8c6883" />
            </linearGradient>
            <linearGradient id="sillLight" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#d8cfc0" />
              <stop offset="50%" stopColor="#f2ede4" />
              <stop offset="100%" stopColor="#cfc5b4" />
            </linearGradient>
            <clipPath id="windowArchClip">
              <path d="M 45 350 L 45 140 C 45 65, 315 65, 315 140 L 315 350 Z" />
            </clipPath>
            <clipPath id="leftEyeClip">
              <ellipse cx="152" cy="148" rx="7.5" ry="8.5" />
            </clipPath>
            <clipPath id="rightEyeClip">
              <ellipse cx="202" cy="148" rx="7.5" ry="8.5" />
            </clipPath>
          </defs>

          {/* night sky inside the arch */}
          <g clipPath="url(#windowArchClip)">
            <rect fill="url(#skyGrad)" height="410" width="360" x="0" y="0" />
            <circle className="cat-star" cx="105" cy="110" fill="#fff" opacity="0.7" r="1.1" />
            <circle className="cat-star" cx="250" cy="90" fill="#fff" opacity="0.55" r="1.3" />
            <circle className="cat-star" cx="185" cy="65" fill="#fff" opacity="0.8" r="1" />
            <circle className="cat-star" cx="290" cy="145" fill="#fff" opacity="0.6" r="1" />
            <circle className="cat-star" cx="75" cy="175" fill="#fff" opacity="0.5" r="1.2" />
            <circle className="cat-star" cx="140" cy="85" fill="#fff" opacity="0.65" r="0.8" />
            {/* crescent moon */}
            <circle cx="245" cy="115" fill="#fce8b8" opacity="0.95" r="20" />
            <circle cx="252" cy="112" fill="#272b4c" r="19" />
            {/* distant rooftops */}
            <path
              d="M 45 310 C 110 300, 160 308, 220 295 C 270 285, 315 292, 315 292 L 315 350 L 45 350 Z"
              fill="#1c192f"
              opacity="0.65"
            />
            <line stroke="#54516d" strokeDasharray="3,3" strokeWidth="1.5" x1="180" x2="180" y1="70" y2="350" />
            <line stroke="#54516d" strokeDasharray="3,3" strokeWidth="1.5" x1="45" x2="315" y1="205" y2="205" />
          </g>

          {/* window frame */}
          <path
            d="M 45 350 L 45 140 C 45 65, 315 65, 315 140 L 315 350 Z"
            fill="none"
            stroke="#171b28"
            strokeWidth="6"
          />
          <line stroke="#171b28" strokeWidth="4" x1="180" x2="180" y1="65" y2="350" />
          <line stroke="#171b28" strokeWidth="4" x1="45" x2="315" y1="205" y2="205" />

          {/* tail */}
          <g ref={tailRef} className="cat-tail-idle">
            <path
              d="M 108 340 C 70 338, 48 310, 56 270 C 60 252, 74 246, 78 258 C 81 270, 72 290, 94 304 C 112 316, 126 322, 130 338"
              fill="none"
              stroke="#171b28"
              strokeLinecap="round"
              strokeWidth="16"
            />
            <path
              d="M 108 340 C 70 338, 48 310, 56 270 C 60 252, 74 246, 78 258 C 81 270, 72 290, 94 304 C 112 316, 126 322, 130 338"
              fill="none"
              stroke="#262938"
              strokeLinecap="round"
              strokeWidth="12"
            />
          </g>

          {/* torso */}
          <g ref={bodyRef} className="cat-breathe">
            <path d="M 115 350 C 112 280, 132 210, 177 210 C 222 210, 242 280, 239 350 Z" fill="#171b28" />
            <path d="M 122 350 C 120 290, 138 220, 177 220 C 216 220, 234 290, 232 350 Z" fill="#212533" />
            <ellipse cx="177" cy="295" fill="#2b3042" rx="28" ry="40" />
          </g>

          {/* head */}
          <g ref={headRef} style={{ transformOrigin: "177px 150px" }}>
            <polygon className="cat-ear-left" fill="#171b28" points="136,142 144,96 168,126" />
            <polygon fill="#e08b98" opacity="0.75" points="142,138 147,105 163,126" />
            <polygon className="cat-ear-right" fill="#171b28" points="218,142 210,96 186,126" />
            <polygon fill="#e08b98" opacity="0.75" points="212,138 207,105 191,126" />
            <ellipse cx="177" cy="150" fill="#171b28" rx="40" ry="33" />
            <ellipse cx="177" cy="152" fill="#252937" rx="37" ry="30" />
            {/* amber eyes */}
            <g>
              <ellipse cx="152" cy="148" fill="#eab308" rx="8" ry="9" />
              <ellipse cx="152" cy="148" fill="#ca8a04" rx="7" ry="8" />
              <ellipse cx="150" cy="144" fill="#fef08a" opacity="0.6" rx="2.5" ry="2" />
            </g>
            <g>
              <ellipse cx="202" cy="148" fill="#eab308" rx="8" ry="9" />
              <ellipse cx="202" cy="148" fill="#ca8a04" rx="7" ry="8" />
              <ellipse cx="200" cy="144" fill="#fef08a" opacity="0.6" rx="2.5" ry="2" />
            </g>
            {/* tracking pupils */}
            <g clipPath="url(#leftEyeClip)">
              <ellipse ref={pupilLeftRef} cx="152" cy="148" fill="#111827" rx="2.8" ry="6.5" />
            </g>
            <g clipPath="url(#rightEyeClip)">
              <ellipse ref={pupilRightRef} cx="202" cy="148" fill="#111827" rx="2.8" ry="6.5" />
            </g>
            {/* eyelids (blink + happy squint) */}
            <g>
              <rect ref={eyelidLeftRef} className="cat-eyelid" fill="#252937" height="22" width="22" x="141" y="127" />
            </g>
            <g>
              <rect ref={eyelidRightRef} className="cat-eyelid" fill="#252937" height="22" width="22" x="191" y="127" />
            </g>
            {/* happy catch arcs (^ . ^) */}
            <g ref={happyEyesRef} opacity="0" style={{ transition: "opacity 0.15s ease" }}>
              <path d="M 145 149 Q 152 142 159 149" fill="none" stroke="#eab308" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M 195 149 Q 202 142 209 149" fill="none" stroke="#eab308" strokeLinecap="round" strokeWidth="2.5" />
            </g>
            {/* nose, mouth, whiskers */}
            <path d="M 174 159 L 180 159 L 177 163 Z" fill="#f4a8b5" />
            <path d="M 174 163 Q 177 167 180 163" fill="none" stroke="#111827" strokeLinecap="round" strokeWidth="1.4" />
            <g ref={whiskersRef} style={{ transformOrigin: "177px 162px", transition: "transform 0.25s ease" }}>
              <path d="M 140 160 L 114 156 M 139 164 L 111 165 M 140 168 L 115 174" fill="none" opacity="0.85" stroke="#d8cfc0" strokeLinecap="round" strokeWidth="1.2" />
              <path d="M 214 160 L 240 156 M 215 164 L 243 165 M 214 168 L 239 174" fill="none" opacity="0.85" stroke="#d8cfc0" strokeLinecap="round" strokeWidth="1.2" />
            </g>
          </g>

          {/* window sill */}
          <rect fill="url(#sillLight)" height="26" rx="4" stroke="#171b28" strokeWidth="4" width="320" x="20" y="346" />
          <rect fill="#171b28" height="6" opacity="0.18" width="316" x="22" y="372" />

          {/* resting paws */}
          <ellipse cx="148" cy="346" fill="#212533" rx="14" ry="7" />
          <ellipse cx="148" cy="346" fill="none" rx="14" ry="7" stroke="#171b28" strokeWidth="2.5" />
          <g id="cat-idle-paw" ref={idlePawRef}>
            <ellipse cx="204" cy="346" fill="#212533" rx="14" ry="7" />
            <ellipse cx="204" cy="346" fill="none" rx="14" ry="7" stroke="#171b28" strokeWidth="2.5" />
          </g>

          {/* active swiping paw */}
          <g id="cat-swipe-paw" ref={swipePawRef} opacity="0" style={{ pointerEvents: "none" }}>
            <path d="M 216 338 Q 212 315 204 290" fill="none" stroke="#171b28" strokeLinecap="round" strokeWidth="18" />
            <path d="M 216 338 Q 212 315 204 290" fill="none" stroke="#252937" strokeLinecap="round" strokeWidth="13" />
            <ellipse cx="204" cy="285" fill="#212533" rx="16" ry="12" />
            <ellipse cx="204" cy="285" fill="none" rx="16" ry="12" stroke="#171b28" strokeWidth="3" />
            <circle cx="196" cy="283" fill="#f4a8b5" r="3.2" />
            <circle cx="204" cy="280" fill="#f4a8b5" r="3.4" />
            <circle cx="212" cy="283" fill="#f4a8b5" r="3.2" />
            <ellipse cx="204" cy="288" fill="#f4a8b5" rx="5.5" ry="4" />
            <path d="M 194 278 L 192 273 M 204 275 L 204 269 M 214 278 L 216 273" fill="none" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="1.8" />
          </g>
        </svg>
      </div>

      {/* bottom telemetry strip */}
      <div className="pointer-events-none flex w-full items-center justify-between border-t border-hairline pt-2 font-mono text-[11px] text-muted">
        <span ref={substatusRef}>BEHAVIOR: RELAXED_IDLE</span>
        <span ref={tipRef} className="font-semibold text-violet">
          Hover or tap inside the window
        </span>
      </div>
    </div>
  );
}
