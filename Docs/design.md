<!-- Aryan Yadav Portfolio - Refined -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Aryan Yadav | Full-Stack Software Engineer</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Manrope:wght@300;400;600;700&amp;family=Space+Grotesk:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-background": "#d4e4fa",
                      "background": "#051424",
                      "on-error": "#690005",
                      "primary-fixed": "#dae2fd",
                      "surface-container-low": "#0d1c2d",
                      "on-primary": "#283044",
                      "inverse-on-surface": "#233143",
                      "surface-tint": "#bec6e0",
                      "surface-dim": "#051424",
                      "surface-container": "#122131",
                      "secondary-container": "#00a6e0",
                      "error": "#ffb4ab",
                      "primary": "#bec6e0",
                      "on-surface-variant": "#94a3b8",
                      "error-container": "#93000a",
                      "tertiary": "#3cddc7",
                      "primary-fixed-dim": "#bec6e0",
                      "on-surface": "#d4e4fa",
                      "surface-container-high": "#1c2b3c",
                      "inverse-primary": "#565e74",
                      "on-primary-fixed-variant": "#3f465c",
                      "surface-variant": "#1e293b",
                      "on-secondary-fixed": "#001e2c",
                      "surface-bright": "#2c3a4c",
                      "inverse-surface": "#f8fafc",
                      "on-secondary-container": "#00374d",
                      "surface-container-lowest": "#010f1f",
                      "on-tertiary-container": "#009182",
                      "secondary-fixed-dim": "#7bd0ff",
                      "on-primary-container": "#798098",
                      "primary-container": "#0f172a",
                      "outline-variant": "#334155",
                      "on-primary-fixed": "#131b2e",
                      "outline": "#64748b",
                      "surface-container-highest": "#1e293b",
                      "on-secondary": "#00354a",
                      "tertiary-fixed-dim": "#3cddc7",
                      "on-tertiary-fixed-variant": "#005047",
                      "on-secondary-fixed-variant": "#004c69",
                      "secondary-fixed": "#c4e7ff",
                      "secondary": "#7bd0ff",
                      "tertiary-container": "#042f2e",
                      "on-error-container": "#ffdad6",
                      "on-tertiary": "#003731",
                      "tertiary-fixed": "#62fae3",
                      "on-tertiary-fixed": "#00201c",
                      "surface": "#051424"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "9999px"
              },
              "spacing": {
                      "base": "8px",
                      "container-max": "1200px",
                      "stack-sm": "24px",
                      "gutter": "32px",
                      "stack-md": "48px",
                      "stack-lg": "96px",
                      "margin": "32px"
              },
              "fontFamily": {
                      "body-sm": [
                              "Inter"
                      ],
                      "label-md": [
                              "Space Grotesk"
                      ],
                      "headline-lg": [
                              "Manrope"
                      ],
                      "body-lg": [
                              "Inter"
                      ],
                      "body-md": [
                              "Inter"
                      ],
                      "headline-md": [
                              "Manrope"
                      ],
                      "headline-xl": [
                              "Manrope"
                      ],
                      "code": [
                              "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"
                      ]
              },
              "fontSize": {
                      "body-sm": [
                              "14px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-md": [
                              "13px",
                              {
                                      "lineHeight": "1.2",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "500"
                              }
                      ],
                      "headline-lg": [
                              "28px",
                              {
                                      "lineHeight": "1.3",
                                      "fontWeight": "400",
                                      "letterSpacing": "-0.02em"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.7",
                                      "fontWeight": "300"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "300"
                              }
                      ],
                      "headline-md": [
                              "20px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "500",
                                      "letterSpacing": "-0.01em"
                              }
                      ],
                      "headline-xl": [
                              "42px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "600",
                                      "letterSpacing": "-0.03em"
                              }
                      ],
                      "code": [
                              "13px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ]
              }
      },
          },
        }
    </script>
<script>
  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }

// Check for saved theme on load
if (localStorage.theme === 'light') {
document.documentElement.classList.remove('dark');
}
</script></head>

<body class="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-tertiary selection:text-on-tertiary min-h-screen flex flex-col">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-b border-outline-variant bg-background/90 backdrop-blur-md">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
<a class="font-headline-md text-headline-md text-inverse-surface font-semibold tracking-widest uppercase text-sm" href="#">
            Aryan Yadav
        </a>
<div class="hidden md:flex items-center space-x-8">
<a class="font-label-md text-label-md text-tertiary uppercase tracking-widest" href="#about">About</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-inverse-surface transition-colors uppercase tracking-widest" href="#skills">Skills</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-inverse-surface transition-colors uppercase tracking-widest" href="#projects">Projects</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-inverse-surface transition-colors uppercase tracking-widest" href="#contact">Contact</a>
</div>
<button class="p-2 flex items-center justify-center text-on-surface-variant hover:text-inverse-surface hover:bg-surface-variant transition-colors border border-outline-variant mr-2" onclick="toggleTheme()" title="Toggle Dark/Light Mode">
<span class="material-symbols-outlined dark:hidden">light_mode</span>
<span class="material-symbols-outlined hidden dark:block">dark_mode</span>
</button><button class="hidden md:flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant text-inverse-surface font-label-md text-label-md uppercase tracking-widest hover:bg-surface-variant transition-colors">
            Resume
            <span class="material-symbols-outlined text-[16px]">download</span>
</button>
<button class="md:hidden p-2 flex items-center justify-center text-on-surface-variant hover:text-inverse-surface mr-2" onclick="toggleTheme()" title="Toggle Dark/Light Mode">
<span class="material-symbols-outlined dark:hidden">light_mode</span>
<span class="material-symbols-outlined hidden dark:block">dark_mode</span>
</button><button class="md:hidden text-on-surface-variant hover:text-inverse-surface">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow pt-32 pb-24 px-6 max-w-container-max mx-auto w-full flex flex-col gap-stack-lg">
<!-- Hero Section -->
<section class="flex flex-col lg:flex-row items-center gap-gutter min-h-[70vh]" id="about">
<div class="flex-1 flex flex-col gap-stack-sm">
<p class="font-code text-code text-tertiary">Hello, World.</p>
<h1 class="font-headline-xl text-headline-xl text-inverse-surface max-w-3xl">
                I'm Aryan Yadav.<br/>
<span class="text-on-surface-variant font-light">Full-Stack Software Engineer.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
                Software Engineer with strong full-stack experience building secure and scalable web applications using Node.js, React, Django, SQL, and MongoDB. Experienced in designing RESTful APIs, implementing authentication, and deploying cloud-based systems.
            </p>
<div class="flex gap-4 mt-8">
<a class="px-6 py-3 bg-inverse-surface text-background font-label-md text-label-md uppercase tracking-widest hover:bg-surface-tint transition-colors inline-flex items-center gap-2" href="#projects">
                    View Projects
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a class="px-6 py-3 border border-outline-variant text-inverse-surface font-label-md text-label-md uppercase tracking-widest hover:bg-surface-variant transition-colors inline-flex items-center gap-2" href="#contact">
                    Get in Touch
                </a>
</div>
</div>
<div class="hidden lg:flex flex-1 justify-end w-full">
<div class="w-full max-w-md bg-surface-container border border-outline-variant rounded-sm p-6 relative overflow-hidden group">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary to-secondary opacity-50"></div>
<div class="flex gap-2 mb-6">
<div class="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
<div class="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
<div class="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
</div>
<div class="font-code text-code text-on-surface-variant leading-relaxed">
<span class="text-secondary">const</span> <span class="text-inverse-surface">developer</span> = {<br/>
                      name: <span class="text-tertiary">'Aryan Yadav'</span>,<br/>
                      focus: <span class="text-tertiary">['Full-Stack', 'System Design', 'Scalability']</span>,<br/>
                      location: <span class="text-tertiary">'India'</span>,<br/>
                      readyForChallenges: <span class="text-secondary">true</span><br/>
                    };<br/>
<br/>
<span class="text-outline">/* Initialize system */</span><br/>
                    developer.<span class="text-secondary">build</span>();
                </div>
<div class="mt-6 text-tertiary font-code text-xs opacity-70 animate-pulse">
                    &gt; system.status: online
                </div>
</div>
</div>
</section>
<!-- Education Section -->
<section class="flex flex-col gap-8 py-12 border-y border-outline-variant">
<h2 class="font-headline-lg text-headline-lg text-inverse-surface flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary font-light">account_balance</span>
            Education
        </h2>
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4">
<div>
<h3 class="font-headline-md text-headline-md text-inverse-surface">Indian Institute of Technology (IIT) Roorkee</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">Bachelor of Technology</p>
</div>
<div class="flex flex-col items-start md:items-end gap-2">
<div class="font-label-md text-label-md text-tertiary uppercase tracking-widest">
                    Roorkee, India
                </div>
<div class="font-code text-code text-on-surface-variant text-sm">
                    Nov 2020 – May 2024
                </div>
</div>
</div>
</section>
<!-- Skills Section -->
<section class="flex flex-col gap-12" id="skills">
<div class="flex flex-col gap-2">
<h2 class="font-headline-lg text-headline-lg text-inverse-surface flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary font-light">terminal</span>
                Technical Arsenal
            </h2>
<p class="font-body-md text-body-md text-on-surface-variant">Core technologies, frameworks, and tools used in production environments.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<!-- Languages & Frameworks -->
<div class="flex flex-col gap-4">
<h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">Languages</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">JavaScript (ES6+)</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">TypeScript</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">C++</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Python</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">SQL</span>
</div>
</div>
<!-- Frontend -->
<div class="flex flex-col gap-4">
<h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">Frontend</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">React.js</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Redux</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">TailwindCSS</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">HTML5/CSS3</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">React Query</span>
</div>
</div>
<!-- Backend -->
<div class="flex flex-col gap-4">
<h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">Backend &amp; Databases</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Node.js</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Express.js</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Django</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">MongoDB</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">PostgreSQL</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Redis</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">JWT / OAuth</span>
</div>
</div>
<!-- DevOps & Tools -->
<div class="flex flex-col gap-4">
<h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">DevOps &amp; Tools</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Docker</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">AWS (S3, EC2)</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Git / GitHub</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">Vercel / Railway</span>
<span class="px-3 py-1 bg-surface-container border border-outline-variant text-inverse-surface font-code text-code rounded-sm">TDD / Testing Lib</span>
</div>
</div>
</div>
</section>
<!-- Projects Section -->
<section class="flex flex-col gap-12" id="projects">
<div class="flex flex-col gap-2">
<h2 class="font-headline-lg text-headline-lg text-inverse-surface flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary font-light">folder_open</span>
                Featured Projects
            </h2>
<p class="font-body-md text-body-md text-on-surface-variant">Architectural overviews of complex applications developed.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Project 1: NarrativeNode -->
<div class="flex flex-col border border-outline-variant bg-surface-container p-8 rounded-sm hover:border-tertiary/50 transition-colors duration-300">
<div class="w-12 h-12 mb-6 bg-surface-variant border border-outline-variant flex items-center justify-center rounded text-tertiary">
<span class="material-symbols-outlined text-2xl">article</span>
</div>
<h3 class="font-headline-md text-headline-md text-inverse-surface mb-3">NarrativeNode</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                    A responsive blogging platform built with JWT-based authentication and role-based access control. Features complete post lifecycle management, search, pagination, and a dark mode UI tailored with Tailwind CSS.
                </p>
<div class="flex flex-wrap gap-2 mt-auto">
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Tailwind CSS</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">JWT Auth</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">RBAC</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">REST APIs</span>
</div>
</div>
<!-- Project 2: PersonalDrive -->
<div class="flex flex-col border border-outline-variant bg-surface-container p-8 rounded-sm hover:border-tertiary/50 transition-colors duration-300">
<div class="w-12 h-12 mb-6 bg-surface-variant border border-outline-variant flex items-center justify-center rounded text-tertiary">
<span class="material-symbols-outlined text-2xl">cloud_sync</span>
</div>
<h3 class="font-headline-md text-headline-md text-inverse-surface mb-3">PersonalDrive</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                    A secure AI-assisted cloud storage platform. Features intelligent document retrieval with context-aware search for text-based files, fine-grained group-based access control, and scalable storage workflows.
                </p>
<div class="flex flex-wrap gap-2 mt-auto">
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Cloud Storage</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Context Search</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Access Control</span>
</div>
</div>
<!-- Project 3: VidTube -->
<div class="flex flex-col border border-outline-variant bg-surface-container p-8 rounded-sm hover:border-tertiary/50 transition-colors duration-300">
<div class="w-12 h-12 mb-6 bg-surface-variant border border-outline-variant flex items-center justify-center rounded text-tertiary">
<span class="material-symbols-outlined text-2xl">play_circle</span>
</div>
<h3 class="font-headline-md text-headline-md text-inverse-surface mb-3">VidTube</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">
                    A scalable video hosting backend architected using Node.js, Express, and MongoDB. Features secure JWT authentication, video streaming workflows with Multer and Cloudinary, and complex aggregation pipelines.
                </p>
<div class="flex flex-wrap gap-2 mt-auto">
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Node.js</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">MongoDB</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Express.js</span>
<span class="font-code text-xs text-on-surface-variant px-2 py-1 bg-surface-variant border border-outline-variant/50 rounded-sm">Cloudinary</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t border-outline-variant bg-background mt-auto py-12" id="contact">
<div class="flex flex-col md:flex-row justify-between items-center px-6 max-w-container-max mx-auto gap-8">
<div class="text-inverse-surface font-headline-md text-headline-md uppercase tracking-widest text-sm font-semibold">
            Aryan Yadav
        </div>
<div class="flex gap-8">
<a class="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="#">
                LinkedIn
            </a>
<a class="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="#">
                GitHub
            </a>
<a class="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors" href="mailto:aryansecondmail@gmail.com">
                Email
            </a>
</div>
<div class="font-code text-code text-outline text-xs text-center md:text-right">
            © 2024 Aryan Yadav.<br/>Built with architectural precision.
        </div>
</div>
</footer>
</body></html>

<!-- Project Detail: NarrativeNode -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>NarrativeNode - Project Details</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary-fixed-dim": "#bec6e0",
                        "tertiary": "#3cddc7",
                        "background": "#051424",
                        "primary-fixed": "#dae2fd",
                        "on-secondary-container": "#00374d",
                        "on-tertiary-fixed": "#00201c",
                        "surface-dim": "#051424",
                        "secondary": "#7bd0ff",
                        "on-tertiary-container": "#009182",
                        "outline-variant": "#45464d",
                        "on-secondary": "#00354a",
                        "error-container": "#93000a",
                        "on-primary-container": "#798098",
                        "on-error-container": "#ffdad6",
                        "tertiary-fixed-dim": "#3cddc7",
                        "on-error": "#690005",
                        "inverse-on-surface": "#233143",
                        "on-primary-fixed": "#131b2e",
                        "surface": "#051424",
                        "error": "#ffb4ab",
                        "tertiary-container": "#001c18",
                        "secondary-fixed-dim": "#7bd0ff",
                        "outline": "#909097",
                        "inverse-surface": "#d4e4fa",
                        "tertiary-fixed": "#62fae3",
                        "on-background": "#d4e4fa",
                        "on-secondary-fixed": "#001e2c",
                        "surface-container": "#122131",
                        "on-primary": "#283044",
                        "surface-tint": "#bec6e0",
                        "primary": "#bec6e0",
                        "inverse-primary": "#565e74",
                        "surface-bright": "#2c3a4c",
                        "secondary-fixed": "#c4e7ff",
                        "on-tertiary-fixed-variant": "#005047",
                        "on-surface": "#d4e4fa",
                        "on-tertiary": "#003731",
                        "on-secondary-fixed-variant": "#004c69",
                        "surface-container-lowest": "#010f1f",
                        "surface-container-low": "#0d1c2d",
                        "on-surface-variant": "#c6c6cd",
                        "secondary-container": "#00a6e0",
                        "on-primary-fixed-variant": "#3f465c",
                        "surface-container-high": "#1c2b3c",
                        "primary-container": "#0f172a",
                        "surface-container-highest": "#273647",
                        "surface-variant": "#273647"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "container-max": "1200px",
                        "stack-lg": "64px",
                        "gutter": "24px",
                        "stack-sm": "16px",
                        "stack-md": "32px",
                        "margin": "32px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Manrope"],
                        "headline-lg": ["Manrope"],
                        "body-sm": ["Inter"],
                        "code": ["monospace"],
                        "body-md": ["Inter"],
                        "label-md": ["Space Grotesk"],
                        "body-lg": ["Inter"],
                        "headline-md": ["Manrope"]
                    },
                    "fontSize": {
                        "headline-xl": ["48px", { "lineHeight": "1.1", "fontWeight": "700" }],
                        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
                        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "code": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "label-md": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-tertiary/30 selection:text-tertiary-fixed">
<nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-xl shadow-black/20 border-b border-slate-800 font-manrope tracking-tight">
<div class="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
<a class="text-xl font-bold tracking-tighter text-slate-100" href="#">Aryan Yadav</a>
<div class="hidden md:flex gap-8 items-center">
<a class="text-blue-400 font-semibold border-b-2 border-blue-400 pb-1" href="#">Work</a>
<a class="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#">About</a>
<a class="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#">Stack</a>
<a class="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="text-blue-400 hover:bg-slate-800/50 rounded-md transition-all p-2 active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<button class="text-blue-400 hover:bg-slate-800/50 rounded-md transition-all p-2 active:scale-95 duration-150">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
</button>
</div>
</div>
</nav>
<main class="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-container-max mx-auto w-full">
<div class="mb-stack-lg">
<a class="inline-flex items-center text-primary-fixed-dim hover:text-primary transition-colors mb-8 group" href="#">
<span class="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1" data-icon="arrow_back">arrow_back</span>
<span class="font-label-md text-label-md">Back to Projects</span>
</a>
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-6">NarrativeNode</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">A robust platform for managing post lifecycles and engaging with communities through nested replies. Engineered with a focus on security, scalable architecture, and efficient data relations.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div class="lg:col-span-2 space-y-stack-md">
<section class="bg-surface-container-low border border-surface-container-highest rounded-xl p-8 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h2 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center">
<span class="material-symbols-outlined mr-3 text-tertiary" data-icon="architecture">architecture</span>
                        Architecture &amp; Features
                    </h2>
<div class="space-y-6 text-on-surface-variant font-body-md text-body-md">
<p>NarrativeNode is built on a solid foundation designed to handle complex data interactions efficiently. At its core, it leverages <strong>JWT-based authentication</strong> combined with robust <strong>role-based access control (RBAC)</strong> to ensure that content creation, moderation, and user data remain secure and accessible only to authorized entities.</p>
<p>The system manages the entire <strong>post lifecycle</strong>, from drafting to publishing, editing, and deletion. A key feature is the <strong>nested reply system</strong>, which allows for deep, threaded conversations similar to modern forum platforms. This required careful database schema design to prevent performance bottlenecks when retrieving deeply nested comment trees.</p>
<div class="bg-surface-container p-6 rounded-lg border border-surface-container-highest mt-6">
<h3 class="font-label-md text-label-md text-primary mb-4 uppercase tracking-wider">Key Technical Achievements</h3>
<ul class="space-y-3">
<li class="flex items-start">
<span class="material-symbols-outlined text-tertiary mr-3 text-[20px]" data-icon="check_circle">check_circle</span>
<span>Implemented secure session management using stateless JWT tokens.</span>
</li>
<li class="flex items-start">
<span class="material-symbols-outlined text-tertiary mr-3 text-[20px]" data-icon="check_circle">check_circle</span>
<span>Designed a scalable database schema for threaded conversations (nested replies).</span>
</li>
<li class="flex items-start">
<span class="material-symbols-outlined text-tertiary mr-3 text-[20px]" data-icon="check_circle">check_circle</span>
<span>Developed granular RBAC middleware for API endpoint protection.</span>
</li>
</ul>
</div>
</div>
</section>
<div class="h-64 rounded-xl border border-surface-container-highest overflow-hidden relative" data-alt="Abstract representation of interconnected nodes and data streams in cool slate and teal tones, resembling a sophisticated backend architecture diagram or database schema visualization.">
<img alt="Architecture Visualization" class="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUwSWAOSDIieRxUQDCMzLO3lJudrDyL2FfWyFpnJYOiyQGlaOI9HHYg-MbZUk5QLwflg2oGloktLp5Jgo84p3yqhay_4Q_4RiTIdLldIdvU1cV8_lsYw2olMIT2AAhRTHkq1rRyrY6e3PMZSg1wpJgz92KZnZPzptIBIM1mkX3tdpA6YAOAHhbPtQLCATTIbmxgOPnCuFrt97q2Xcqt9O2q8lDBsoxvJWjwBMI3GD4p4vevrSACHxZ9pt-OTQ3SincMJBNJFJ_WlW"/>
<div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
</div>
</div>
<div class="space-y-stack-md">
<section class="bg-surface-container-low border border-surface-container-highest rounded-xl p-8">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center">
<span class="material-symbols-outlined mr-3 text-secondary" data-icon="terminal">terminal</span>
                        Tech Stack
                    </h2>
<div class="flex flex-wrap gap-3">
<span class="inline-flex items-center px-4 py-2 rounded border border-tertiary/30 bg-tertiary/10 font-label-md text-label-md text-tertiary">
<span class="material-symbols-outlined mr-2 text-[18px]" data-icon="javascript">javascript</span> Node.js
                        </span>
<span class="inline-flex items-center px-4 py-2 rounded border border-tertiary/30 bg-tertiary/10 font-label-md text-label-md text-tertiary">
<span class="material-symbols-outlined mr-2 text-[18px]" data-icon="data_object">data_object</span> Express
                        </span>
<span class="inline-flex items-center px-4 py-2 rounded border border-tertiary/30 bg-tertiary/10 font-label-md text-label-md text-tertiary">
<span class="material-symbols-outlined mr-2 text-[18px]" data-icon="database">database</span> MongoDB
                        </span>
<span class="inline-flex items-center px-4 py-2 rounded border border-tertiary/30 bg-tertiary/10 font-label-md text-label-md text-tertiary">
<span class="material-symbols-outlined mr-2 text-[18px]" data-icon="security">security</span> JWT
                        </span>
</div>
</section>
<section class="bg-surface-container-low border border-surface-container-highest rounded-xl p-8">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6 flex items-center">
<span class="material-symbols-outlined mr-3 text-primary" data-icon="link">link</span>
                        Links
                    </h2>
<a class="group flex items-center justify-between p-4 rounded-lg bg-surface-container hover:bg-surface-container-highest border border-surface-container-highest transition-colors" href="#">
<div class="flex items-center text-on-surface">
<span class="material-symbols-outlined mr-3 text-primary" data-icon="code">code</span>
<span class="font-body-md text-body-md font-medium">View on GitHub</span>
</div>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all" data-icon="arrow_forward">arrow_forward</span>
</a>
</section>
</div>
</div>
</main>
<footer class="w-full py-12 mt-20 bg-slate-950 border-t border-slate-800 font-manrope text-sm tracking-wide">
<div class="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-4">
<p class="text-teal-400">© 2024 Aryan Yadav. Engineered for performance.</p>
<div class="flex gap-6">
<a class="text-slate-500 hover:text-teal-400 hover:opacity-80 transition-opacity focus:ring-2 focus:ring-teal-500/20" href="#">Source</a>
<a class="text-slate-500 hover:text-teal-400 hover:opacity-80 transition-opacity focus:ring-2 focus:ring-teal-500/20" href="#">LinkedIn</a>
<a class="text-slate-500 hover:text-teal-400 hover:opacity-80 transition-opacity focus:ring-2 focus:ring-teal-500/20" href="#">Email</a>
</div>
</div>
</footer>
</body></html>
