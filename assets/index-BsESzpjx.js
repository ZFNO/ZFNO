(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
<div class="grainx">
  <!-- Top progress bar -->
  <div class="fixed top-0 left-0 right-0 h-1 z-50 no-print">
    <div id="progress" class="h-full w-0" style="background: linear-gradient(90deg, rgba(110, 231, 255, 0.95), rgba(167, 139, 250, 0.95)); "></div>
  </div>

  <!-- Background accent orb (parallax) -->

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 py-12">
    <!-- HERO -->
    <section class="borderGlow rounded-3xl">
      <div class="glass rounded-3xl p-5 sm:p-8 lg:p-10 sm:p-7">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div class="min-w-0">
            <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full pill">
                <span class="inline-block w-2 h-2 rounded-full" style="background:rgba(52,211,153,.9)"></span>
                Open to: Architecture · AI · Systems
              </span>
              <span class="hidden sm:inline text-slate-500">•</span>
              <span class="hidden sm:inline">Philippines</span>
            </div>

            <h1 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Mark Laurence Ong
            </h1>
            <p class="mt-2 text-base sm:text-lg text-slate-200/90">
              <span class="text-cyan-200 font-semibold">Enterprise Architect</span>
              <span class="text-slate-500">·</span>
              <span class="text-violet-200 font-semibold">Technical Founder</span>
              <span class="text-slate-500">·</span>
              <span class="text-emerald-200 font-semibold">AI Researcher</span>
              <span class="text-slate-500">·</span>
              <span class="text-slate-200 font-semibold">Senior Software Engineer</span>
            </p>

            <div class="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              <a class="hover:text-white transition inline-flex items-center gap-2" href="#" aria-label="Email">
                <i class="fa-solid fa-envelope text-cyan-200"></i><span>[email]</span>
              </a>
              <a class="hover:text-white transition inline-flex items-center gap-2" href="#" aria-label="Phone">
                <i class="fa-solid fa-phone text-violet-200"></i><span>[phone]</span>
              </a>
              <a class="hover:text-white transition inline-flex items-center gap-2" href="#" aria-label="GitHub">
                <i class="fa-brands fa-github text-slate-200"></i><span>[github]</span>
              </a>
              <a class="hover:text-white transition inline-flex items-center gap-2" href="#" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin text-cyan-200"></i><span>[linkedin]</span>
              </a>
            </div>

            <div class="mt-6 hairline"></div>

            <p class="mt-5 text-sm sm:text-base leading-relaxed text-slate-200/85 max-w-3xl">
              Enterprise Architect and Technical Founder with 10+ years building enterprise platforms, AI-powered applications,
              automation frameworks, and proprietary developer tooling. Built a standalone Python operating environment with
              <span class="font-semibold text-white">300+ documented features</span> and delivered
              <span class="font-semibold text-white">100,000+ lines of production software</span> in the past year.
              Founded and led a logistics technology company; architected a proprietary ERP platform and generated
              <span class="font-semibold text-white">~₱15M revenue</span> during the COVID period.
              Research focus: AGI, multi-agent systems, and distributed computing.
            </p>
          </div>

          <!-- Impact stats -->
          <aside class="w-full lg:w-[360px] shrink-0">
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-4 shimmer">
                <div class="text-xs text-slate-300">Platform scale</div>
                <div class="mt-1 text-2xl font-bold text-white">300+</div>
                <div class="text-xs text-slate-400">Documented features</div>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-4 shimmer">
                <div class="text-xs text-slate-300">Production output</div>
                <div class="mt-1 text-2xl font-bold text-white">100k+</div>
                <div class="text-xs text-slate-400">Lines (last year)</div>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-4">
                <div class="text-xs text-slate-300">Founder revenue</div>
                <div class="mt-1 text-2xl font-bold text-white">₱15M</div>
                <div class="text-xs text-slate-400">COVID period</div>
              </div>
              <div class="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-4">
                <div class="text-xs text-slate-300">Strength</div>
                <div class="mt-1 text-2xl font-bold text-white">Python</div>
                <div class="text-xs text-slate-400">Systems + product</div>
              </div>
            </div>

            <div class="mt-4 rounded-2xl border border-slate-700/60 bg-slate-900/30 p-4">
              <div class="flex items-center justify-between">
                <div class="text-xs text-slate-300">Primary focus</div>
                <button id="toggleMode" class="no-print text-xs px-3 py-1 rounded-full pill2 hover:brightness-110 transition" aria-pressed="false" aria-label="Toggle compact mode">Toggle compact</button>
              </div>
              <div class="mt-2 flex flex-wrap gap-2">
                <span class="text-xs px-3 py-1 rounded-full pill">Enterprise Architecture</span>
                <span class="text-xs px-3 py-1 rounded-full pill">AI Systems</span>
                <span class="text-xs px-3 py-1 rounded-full pill2">Operating Environments</span>
                <span class="text-xs px-3 py-1 rounded-full pill2">Automation</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- CONTENT GRID -->
    <section class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left column -->
      <div class="lg:col-span-8 space-y-6">
        <!-- Career timeline (accordion) -->
        <section class="glass rounded-3xl p-5 reveal is-in sm:p-7" aria-labelledby="timelineTitle">
          <div class="flex items-center justify-between gap-3">
            <h2 id="timelineTitle" class="text-lg sm:text-xl font-bold tracking-tight">
              <i class="fa-solid fa-timeline mr-2 text-cyan-200"></i>Career Timeline
            </h2>
            <button id="expandAll" class="no-print text-xs px-3 py-1 rounded-full pill hover:brightness-110 transition" aria-label="Expand or collapse all timeline entries">
              Expand all
            </button>
          </div>
          <div class="mt-4 space-y-3" id="timeline">
            <!-- item -->
            <details class="group rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4" open="">
              <summary class="cursor-pointer list-none flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm text-slate-300"><span class="text-cyan-200 font-semibold">2025–Present</span> · Founder | Enterprise Architect | AI Researcher</div>
                  <div class="mt-1 text-sm text-slate-200 font-medium">Building proprietary technologies (AI OS, SDK, Android runtime, voice &amp; automation).</div>
                </div>
                <i class="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
              </summary>
              <ul class="mt-3 text-sm text-slate-200/85 space-y-1 pl-4 list-disc">
                <li>AI Operating System / operating environment architecture</li>
                <li>Enterprise SDK and reusable module standards</li>
                <li>Android embedded Python runtime design</li>
              </ul>
            </details>

            <details class="group rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4" open="">
              <summary class="cursor-pointer list-none flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm text-slate-300"><span class="text-violet-200 font-semibold">2022–2024</span> · Strategic Sabbatical</div>
                  <div class="mt-1 text-sm text-slate-200 font-medium">Full-time research + deep engineering work across AI, OS, distributed systems.</div>
                </div>
                <i class="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
              </summary>
              <ul class="mt-3 text-sm text-slate-200/85 space-y-1 pl-4 list-disc">
                <li>Enterprise architecture, systems design, platform R&amp;D</li>
                <li>Distributed computing patterns and modularization strategy</li>
              </ul>
            </details>

            <details class="group rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4">
              <summary class="cursor-pointer list-none flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm text-slate-300"><span class="text-emerald-200 font-semibold">2019–2021</span> · Founder &amp; CEO, Logistics Technology Startup</div>
                  <div class="mt-1 text-sm text-slate-200 font-medium">Built the ERP platform and led product, marketing, and operations.</div>
                </div>
                <i class="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
              </summary>
              <ul class="mt-3 text-sm text-slate-200/85 space-y-1 pl-4 list-disc">
                <li>Architected &amp; implemented proprietary ERP (dispatch, CRM, inventory, reporting, dashboards)</li>
                <li>Generated <span class="font-semibold text-white">~₱15M</span> revenue during COVID period</li>
                <li>Handled technology strategy, product direction, and marketing execution</li>
              </ul>
            </details>

            <details class="group rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4">
              <summary class="cursor-pointer list-none flex items-start justify-between gap-4">
                <div>
                  <div class="text-sm text-slate-300"><span class="text-slate-200 font-semibold">2013–2016</span> · R&amp;D Consultant</div>
                  <div class="mt-1 text-sm text-slate-200 font-medium">Feasibility studies, technical analysis, and strategy across industries.</div>
                </div>
                <i class="fa-solid fa-chevron-down text-slate-400 group-open:rotate-180 transition"></i>
              </summary>
              <ul class="mt-3 text-sm text-slate-200/85 space-y-1 pl-4 list-disc">
                <li>Collaborated with executives, researchers, and stakeholders</li>
                <li>Produced technical reports, recommendations, and business strategies</li>
              </ul>
            </details>
          </div>
        </section>

        <!-- Selected projects -->
        <section class="glass rounded-3xl p-5 reveal is-in sm:p-7" aria-labelledby="projectsTitle">
          <h2 id="projectsTitle" class="text-lg sm:text-xl font-bold tracking-tight">
            <i class="fa-solid fa-cubes mr-2 text-violet-200"></i>Selected Projects
          </h2>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Python Operating Environment</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill">Core</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Standalone platform with IPC, async services, encryption, automation, docs, extensibility.</p>
            </article>

            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Enterprise SDK</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill2">Architecture</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Reusable module standards to accelerate enterprise &amp; AI application delivery.</p>
            </article>

            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Android Python Runtime</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill">Systems</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Embedded Python execution within Android apps with native component communication.</p>
            </article>

            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Logistics ERP Platform</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill2">Founder</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Dispatch, CRM, inventory, analytics, executive dashboards (Google Sheets / Apps Script).</p>
            </article>

            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Internet Intelligence Platform</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill">Automation</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Automated scraping and aggregation supporting information collection and analysis.</p>
            </article>

            <article class="rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4 hover:bg-slate-900/30 transition">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold">Visio Flowchart Generator</h3>
                <span class="text-xs px-2.5 py-1 rounded-full pill2">Tooling</span>
              </div>
              <p class="mt-2 text-sm text-slate-200/85">Extracts architecture from LLM chats and generates Microsoft Visio diagrams.</p>
            </article>
          </div>

          <div class="mt-4 text-xs text-slate-400">
            Tip: replace project cards with links to repos/portfolio pages once you provide URLs.
          </div>
        </section>
      </div>

      <!-- Right column -->
      <aside class="lg:col-span-4 space-y-6">
        <!-- Skills -->
        <section class="glass rounded-3xl p-5 reveal is-in sm:p-7" aria-labelledby="skillsTitle">
          <h2 id="skillsTitle" class="text-lg sm:text-xl font-bold tracking-tight">
            <i class="fa-solid fa-code mr-2 text-emerald-200"></i>Technical Strengths
          </h2>

          <div class="mt-4 space-y-4">
            <!-- skill rows -->
            <div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">Python</span><span class="text-slate-400">Expert</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-slate-800/80 border border-slate-700/50 overflow-hidden">
                <div class="h-full w-[92%]" style="background:linear-gradient(90deg, rgba(110,231,255,.9), rgba(167,139,250,.8));"></div>
              </div>
              <div class="mt-1 text-xs text-slate-400">OS-like platform, IPC, async, desktop apps (Qt/PySide)</div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">Architecture</span><span class="text-slate-400">Advanced</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-slate-800/80 border border-slate-700/50 overflow-hidden">
                <div class="h-full w-[86%]" style="background:linear-gradient(90deg, rgba(167,139,250,.9), rgba(52,211,153,.75));"></div>
              </div>
              <div class="mt-1 text-xs text-slate-400">Modular platforms, SDK design, enterprise systems</div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">Backend</span><span class="text-slate-400">Strong</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-slate-800/80 border border-slate-700/50 overflow-hidden">
                <div class="h-full w-[80%]" style="background:linear-gradient(90deg, rgba(52,211,153,.9), rgba(110,231,255,.7));"></div>
              </div>
              <div class="mt-1 text-xs text-slate-400">FastAPI/Flask/Django, REST, WebSockets, services</div>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">Frontend</span><span class="text-slate-400">Pragmatic</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-slate-800/80 border border-slate-700/50 overflow-hidden">
                <div class="h-full w-[66%]" style="background:linear-gradient(90deg, rgba(110,231,255,.85), rgba(251,191,36,.65));"></div>
              </div>
              <div class="mt-1 text-xs text-slate-400">React/TS, Vite, API-first + thin clients</div>
            </div>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span class="text-xs px-3 py-1 rounded-full pill">FastAPI</span>
            <span class="text-xs px-3 py-1 rounded-full pill">Docker</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">PostgreSQL</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">React</span>
            <span class="text-xs px-3 py-1 rounded-full pill">LLMs</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">Android</span>
          </div>
        </section>

        <!-- Leadership -->
        <section class="glass rounded-3xl p-5 reveal is-in sm:p-7" aria-labelledby="leadTitle">
          <h2 id="leadTitle" class="text-lg sm:text-xl font-bold tracking-tight">
            <i class="fa-solid fa-chess-knight mr-2 text-cyan-200"></i>Leadership
          </h2>
          <ul class="mt-4 text-sm text-slate-200/85 space-y-2">
            <li class="flex gap-2">
              <i class="fa-solid fa-check text-emerald-200 mt-0.5"></i>
              Technical Founder &amp; CEO (logistics tech; product + marketing + ops)
            </li>
            <li class="flex gap-2">
              <i class="fa-solid fa-check text-emerald-200 mt-0.5"></i>
              Enterprise architecture &amp; systems design (platform-first thinking)
            </li>
            <li class="flex gap-2">
              <i class="fa-solid fa-check text-emerald-200 mt-0.5"></i>
              End-to-end delivery: concept → build → deployment → iteration
            </li>
          </ul>

          <div class="mt-5 rounded-2xl border border-slate-700/60 bg-slate-900/20 p-4">
            <div class="text-xs text-slate-400 uppercase tracking-wider">Working style</div>
            <p class="mt-2 text-sm text-slate-200/85">
              First-principles engineering, modular design, rapid iteration — bridging business strategy and deep implementation.
            </p>
          </div>
        </section>

        <!-- Research -->
        <section class="glass rounded-3xl p-5 reveal is-in sm:p-7" aria-labelledby="researchTitle">
          <h2 id="researchTitle" class="text-lg sm:text-xl font-bold tracking-tight">
            <i class="fa-solid fa-flask mr-2 text-violet-200"></i>Research Interests
          </h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-xs px-3 py-1 rounded-full pill">AGI</span>
            <span class="text-xs px-3 py-1 rounded-full pill">Multi-Agent Systems</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">Distributed Computing</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">Knowledge Representation</span>
            <span class="text-xs px-3 py-1 rounded-full pill">Operating Systems</span>
            <span class="text-xs px-3 py-1 rounded-full pill2">Intelligent Automation</span>
          </div>
        </section>

        <!-- Quick actions -->
        <section class="glass rounded-3xl p-5 reveal no-print is-in sm:p-7" aria-labelledby="actionsTitle">
          <h2 id="actionsTitle" class="text-lg sm:text-xl font-bold tracking-tight">
            <i class="fa-solid fa-wand-magic-sparkles mr-2 text-emerald-200"></i>Quick Actions
          </h2>
          <div class="mt-4 grid grid-cols-2 gap-3">
            <button id="btnPrint" class="px-4 py-3 rounded-2xl border border-slate-700/60 bg-slate-900/30 hover:bg-slate-900/45 transition text-sm font-semibold">
              <i class="fa-solid fa-print mr-2"></i>Print / PDF
            </button>
            <button id="btnTop" class="px-4 py-3 rounded-2xl border border-slate-700/60 bg-slate-900/30 hover:bg-slate-900/45 transition text-sm font-semibold">
              <i class="fa-solid fa-arrow-up mr-2"></i>Top
            </button>
          </div>
          <p class="mt-3 text-xs text-slate-400">
            Replace placeholders: <span class="text-slate-200">[email]</span>, <span class="text-slate-200">[phone]</span>, GitHub/LinkedIn links.
          </p>
        </section>
      </aside>
    </section>

    <!-- Footer -->
    <footer class="mt-8 text-center text-xs text-slate-400">
      <div class="hairline mx-auto max-w-2xl"></div>
      <p class="mt-4">
        Executive portfolio CV · built for responsiveness, accessibility, and high-impact scanning.
      </p>
    </footer>
  </main>


</div>


`,t=document.getElementById(`progress`),n=document.getElementById(`timeline`),r=document.getElementById(`expandAll`),i=document.getElementById(`toggleMode`);if(t){let e=()=>{let e=document.documentElement,n=e.scrollTop/(e.scrollHeight-e.clientHeight);t.style.width=(Math.max(0,Math.min(1,n))*100).toFixed(2)+`%`};document.addEventListener(`scroll`,e,{passive:!0}),e()}var a=Array.from(document.querySelectorAll(`.reveal`));if(a.length){let e=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&t.target.classList.add(`is-in`)},{threshold:.12});a.forEach(t=>e.observe(t))}if(n&&r){let e=!0;r.addEventListener(`click`,()=>{let t=n.querySelectorAll(`details`);e=!e,t.forEach(t=>t.open=e),r.textContent=e?`Collapse all`:`Expand all`})}if(i){let e=!1;i.addEventListener(`click`,()=>{e=!e,i.setAttribute(`aria-pressed`,String(e)),document.body.classList.toggle(`compact`,e),document.querySelectorAll(`.glass`).forEach(t=>{t.classList.toggle(`sm:p-7`,!e)});let t=document.querySelector(`main`);t?.classList.toggle(`py-12`,!e),t?.classList.toggle(`py-6`,e),i.textContent=e?`Toggle spacious`:`Toggle compact`})}document.getElementById(`btnPrint`)?.addEventListener(`click`,()=>window.print()),document.getElementById(`btnTop`)?.addEventListener(`click`,()=>window.scrollTo({top:0,behavior:`smooth`}));var o=document.querySelector(`#app`);if(!o)throw Error(`#app not found`);o.innerHTML=e;