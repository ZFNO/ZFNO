(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
  <div class="page">
  <!-- Progress bar -->
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>

  <main class="container">
    <!-- Hero -->
    <section class="hero-card">
      <div class="hero-inner">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="status-row">
              <span class="status-badge">
                <span class="status-dot"></span>
                Open to: Architecture · AI · Systems
              </span>
              <span class="status-sep">•</span>
              <span class="status-location">Philippines</span>
            </div>

            <h1 class="name-title">Mark Laurence Ong</h1>

            <p class="role-tags">
              <span class="tag-cyan">Enterprise Architect</span>
              <span class="tag-sep">·</span>
              <span class="tag-violet">Technical Founder</span>
              <span class="tag-sep">·</span>
              <span class="tag-emerald">AI Researcher</span>
              <span class="tag-sep">·</span>
              <span class="tag-default">Senior Software Engineer</span>
            </p>

            <div class="contact-row">
              <a class="contact-link" href="#">
                <i class="fa-solid fa-envelope icon-cyan"></i>
                <span>[z@marklaurence.xyz]</span>
              </a>
              <a class="contact-link" href="#">
                <i class="fa-solid fa-phone icon-violet"></i>
                <span>[+639273109544]</span>
              </a>
              <a class="contact-link" href="https://github.com/ZFNO" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github icon-default"></i>
                <span>[github]</span>
              </a>
              <a class="contact-link" href="https://www.linkedin.com/in/mark-laurence-ong-98937924" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin icon-cyan"></i>
                <span>[linkedin]</span>
              </a>
            </div>




            <div class="divider"></div>

            <p class="bio-text">
              Enterprise Architect and Technical Founder with 10+ years building enterprise platforms, AI-powered applications,
              automation frameworks, and proprietary developer tooling. Built a standalone Python operating environment with
              <span class="highlight">300+ documented features</span> and delivered
              <span class="highlight">100,000+ lines of production software</span> in the past year.
              Founded and led a logistics technology company; architected a proprietary ERP platform and generated
              <span class="highlight">~₱15M revenue</span> during the COVID period.
              Research focus: AGI, multi-agent systems, and distributed computing.
            </p>
          </div>

          <!-- Stats sidebar -->
          <aside class="stats-sidebar">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-label">Platform scale</div>
                <div class="stat-value">300+</div>
                <div class="stat-desc">Documented features</div>
              </div>
              <div class="stat-card">
                <div class="stat-label">Technical Scope</div>
                <div class="stat-value">AI Full Stack</div>
                <div class="stat-desc">AI first Platform to Product </div>
              </div>

              <div class="stat-card">
                <div class="stat-label">Specialization</div>
                <div class="stat-value" style = "font-size: 20px;">Developer Tooling</div>
                <div class="stat-desc">SDKs & Runtimes</div>
              </div>
              <div class="stat-card">
                <div class="stat-label">Strength</div>
                <div class="stat-value" style = "font-size: 20px;">Platform Architecture</div>
                <div class="stat-desc">AI & Enterpriset</div>
              </div>
            </div>

            <div class="focus-card">
              <div class="focus-header">
                <span class="focus-label">Primary focus</span>
              </div>
              <div class="focus-tags">
                <span class="tag-pill">Enterprise Architecture</span>
                <span class="tag-pill">AI Systems</span>
                <span class="tag-pill">Android Development</span>
                <span class="tag-pill">Native Graphics (GLSL)</span>
                <span class="tag-pill-alt">Platform Development</span>
                <span class="tag-pill-alt">Operating Environments</span>
                <span class="tag-pill-alt">Reverse Engineering</span>
                <span class="tag-pill-alt">IPC & Concurrency</span>
                <span class="tag-pill-alt">Policy Development</span>
                <span class="tag-pill-alt">First Principle Solutions</span>
                <span class="tag-pill-alt">PC and Desktop Applications</span>
                <span class="tag-pill-alt">Market Profiling and Colonization</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Content grid -->
    <section class="content-grid">
      <!-- Left column -->
      <div class="col-main">
        <!-- Timeline -->
        <section class="card-section">
          <div class="card-header">
            <h2 class="card-title">
              <i class="fa-solid fa-timeline title-icon-red"></i>Career Timeline
            </h2>
            <!--<button class="expand-btn">Expand all</button>-->
          </div>

          <div class="timeline-list">
            <details class="timeline-item" open>
              <summary class="timeline-summary">
                <div>
                  <div class="timeline-date"><span class="date-cyan">2025–Present</span> · Founder | Enterprise Architect | AI Researcher</div>
                  <div class="timeline-role">Building proprietary technologies (AI OS, SDK, Android runtime, voice &amp; automation).</div>
                </div>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </summary>
              <ul class="timeline-details">
                <li>AI Operating System / operating environment architecture</li>
                <li>Enterprise SDK and reusable module standards</li>
                <li>Android embedded Python runtime design</li>
              </ul>
            </details>

            <details class="timeline-item" open>
              <summary class="timeline-summary">
                <div>
                  <div class="timeline-date"><span class="date-violet">2022–2024</span> · Strategic Sabbatical</div>
                  <div class="timeline-role">Full-time research + deep engineering work across AI, OS, distributed systems.</div>
                </div>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </summary>
              <ul class="timeline-details">
                <li>Enterprise architecture, systems design, platform R&amp;D</li>
                <li>Distributed computing patterns and modularization strategy</li>
              </ul>
            </details>

            <details class="timeline-item">
              <summary class="timeline-summary">
                <div>
                  <div class="timeline-date"><span class="date-emerald">2020–2023</span> · Founder &amp; CEO, Nameless Logistics Technology Startup</div>
                  <div class="timeline-role">Built the ERP platform and led product, marketing, and operations.</div>
                </div>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </summary>
              <ul class="timeline-details">
                <li>Architected &amp; implemented proprietary ERP (dispatch, CRM, inventory, reporting, dashboards)</li>
                <li>Generated <span class="highlight">~₱15M</span> revenue during COVID period</li>
                <li>Handled technology strategy, product direction, and marketing execution</li>
              </ul>
            </details>

            <details class="timeline-item">
              <summary class="timeline-summary">
                <div>
                  <div class="timeline-date"><span class="date-default">2013–2016</span> · R&amp;D Consultant</div>
                  <div class="timeline-role">Feasibility studies, technical analysis, and strategy across industries.</div>
                </div>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </summary>
              <ul class="timeline-details">
                <li>Collaborated with executives, researchers, and stakeholders</li>
                <li>Produced technical reports, recommendations, and business strategies</li>
              </ul>
            </details>
          </div>
        </section>

        <!-- Projects -->
        <section class="card-section">
          <h2 class="card-title">
            <i class="fa-solid fa-cubes title-icon-violet"></i>Selected Projects
          </h2>

          <a class= "card-link project-card-link" href="https://zfno.github.io/Commando_OS" target="self" rel="noopener" >
          <div class="C_OS_link"></div>
          <div class="projects-grid">
            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Commando OS (ongoing venture)</h3>
                <span class="project-tag">Core</span>
              </div>
              <p class="project-desc">Standalone platform with IPC, async services, encryption, automation, docs, extensibility and 250+ other features. My own version of claude code and codex (current venture).</p>
            </article>
          </a>

          <a class= "card-link project-card-link" href="https://github.com/ZFNO/GATE_sdk" target="self" rel="noopener" >
          <div class="C_OS_link"></div>

            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Enterprise SDK</h3>
                <span class="project-tag-alt">Framework</span>
              </div>
              <p class="project-desc">Reusable module standards to accelerate enterprise and development workflows.
              Proprietary native cli with comprehensive tooling that gives an O(n-1) traversal to an entire machine.</p>
            </article>
            </a>
            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Android Python Runtime</h3>
                <span class="project-tag">Systems</span>
              </div>
              <p class="project-desc">Embedded Python execution within Android apps with native component communication.</p>
            </article>

            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Logistics ERP Platform</h3>
                <span class="project-tag-alt">Founder</span>
              </div>
              <p class="project-desc">Dispatch, CRM, inventory, analytics, executive dashboards (Google Sheets / Apps Script).</p>
            </article>

            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Internet Intelligence Platform</h3>
                <span class="project-tag">Automation</span>
              </div>
              <p class="project-desc">Automated scraping and aggregation supporting information collection and analysis.</p>
            </article>


          <a class= "card-link project-card-link" href="https://github.com/ZFNO/VisioAuto" target="self" rel="noopener" >
          <div class="C_OS_link"></div>

            <article class="project-card">
              <div class="project-header">
                <h3 class="project-name">Visio Flowchart Generator</h3>
                <span class="project-tag-alt">Tooling</span>
              </div>
              <p class="project-desc">Extracts architecture from LLM chats and generates Microsoft Visio diagrams. Proprietary extension made for my Enterprise planning flows. </p>
            </article>
          </div>
          </a>

        </section>


      </div>

      <!-- Right column -->
      <aside class="col-side">
        <!-- Skills -->
        <section class="card-section">
          <h2 class="card-title">
            <i class="fa-solid fa-code title-icon-emerald"></i>Technical Strengths
          </h2>

          <div class="skills-list">
            <div class="skill-row">
              <div class="skill-header">
                <span class="skill-name">Python</span><span class="skill-level">Expert</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width:92%"></div>
              </div>
              <p class="skill-desc">OS-like platform, IPC, async, native desktop apps (Qt/PySide)</p>
            </div>

            <div class="skill-row">
              <div class="skill-header">
                <span class="skill-name">Architecture</span><span class="skill-level">Advanced</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width:95%"></div>
              </div>
              <p class="skill-desc">Modular platforms, SDK design, enterprise systems, level zero to MVP to shipping pipelines</p>
            </div>

            <div class="skill-row">
              <div class="skill-header">
                <span class="skill-name">Backend</span><span class="skill-level">Strong</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width:90%"></div>
              </div>
              <p class="skill-desc">FastAPI, REST, WebSockets, services, local ipc, kernel to frontend to backend protocols </p>
            </div>

            <div class="skill-row">
              <div class="skill-header">
                <span class="skill-name">Frontend</span><span class="skill-level">Pragmatic</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width:66%"></div>
              </div>
              <p class="skill-desc">React, Typescript, Vite, API-first + thin clients, personalized responsive frontends that are more scalable</p>
            </div>



          <div class="skill-row">
              <div class="skill-header">
                <span class="skill-name">security</span><span class="skill-level">strong</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width:75%"></div>
              </div>
              <p class="skill-desc">Proprietary military grade Encryption, authentication,authorization, secure APIs,process isolation, package obfuscation</p>
            </div>
          </div>


          <div class="skill-tags" >
            <span class="tag-pill">FastAPI</span>
            <span class="tag-pill">Docker</span>
            <span class="tag-pill-alt">PostgreSQL</span>
            <span class="tag-pill-alt">React</span>
            <span class="tag-pill">LLMs</span>
            <span class="tag-pill">Android</span>
            <span class="tag-pill-alt">numpy</span>
            <span class="tag-pill-alt">tensorflow</span>
            <span class="tag-pill-alt">Pytorch</span>
            <span class="tag-pill">RVC voice cloning</span>
            <span class="tag-pill-alt">Native UIs for pc and linux</span>
            <span class="tag-pill-alt">application porting</span>

          </div>
        </section>

        <!-- Leadership -->
        <section class="card-section">
          <h2 class="card-title">
            <i class="fa-solid fa-chess-knight title-icon-cyan"></i>Leadership
          </h2>

          <ul class="leadership-list">
            <li class="leadership-item">
              <i class="fa-solid fa-check check-icon"></i>
              Technical Founder &amp; CEO (logistics tech; product + marketing + ops)
            </li>
            <li class="leadership-item">
              <i class="fa-solid fa-check check-icon"></i>
              Enterprise architecture &amp; systems design (platform-first thinking)
            </li>
            <li class="leadership-item">
              <i class="fa-solid fa-check check-icon"></i>
              End-to-end delivery: concept → build → deployment → iteration
            </li>
          </ul>

          <div class="style-card">
            <div class="style-label">Working style</div>
            <p class="style-text">First-principles engineering, modular design, rapid iteration — bridging business strategy and deep implementation.</p>
          </div>
        </section>

        <!-- Research -->
        <section class="card-section">
          <h2 class="card-title">
            <i class="fa-solid fa-flask title-icon-violet"></i>Research Interests
          </h2>

          <div class="research-tags">
            <span class="tag-pill">AGI</span>
            <span class="tag-pill">Multi-Agent Systems</span>
            <span class="tag-pill-alt">Distributed Computing</span>
            <span class="tag-pill-alt">Knowledge Representation</span>
            <span class="tag-pill">Operating Systems</span>
            <span class="tag-pill-alt">Intelligent Automation</span>
          </div>
        </section>
      </aside>
    </section>
            
            <div class="contact-row contact-row-bottom">
              <a class="contact-link" href="#">
                <i class="fa-solid fa-envelope icon-cyan"></i>
                <span>[z@marklaurence.xyz]</span>
              </a>
              <a class="contact-link" href="#">
                <i class="fa-solid fa-phone icon-violet"></i>
                <span>[+639273109544]</span>
              </a>
              <a class="contact-link" href="https://github.com/ZFNO" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github icon-default"></i>
                <span>[github]</span>
              </a>
              <a class="contact-link" href="https://www.linkedin.com/in/mark-laurence-ong-98937924" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin icon-cyan"></i>
                <span>[linkedin]</span>
              </a>
            </div>


    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-divider"></div>
      <p class="footer-text">Made With  <a class= "footer-link" href="https://zfno.github.io/Commando_OS" > C_OS</a></p>
    </footer>
  </main>
</div>





<script>
  document.querySelector('C_OS_link').addEventListener('click', e => {
    e.preventDefault();
    document.body.innerHTML = '<iframe src="" style="width:100vw; height:100vh; border:none;"></iframe>';
  });
<\/script>


  `;document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`C_OS_link`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),document.body.innerHTML=`<iframe src="https://zfno.github.io/codepenpreview" style="width:100vw; height:100vh; border:none;"></iframe>`})});var t=document.getElementById(`progress`),n=document.getElementById(`timeline`),r=document.getElementById(`expandAll`),i=document.getElementById(`toggleMode`);if(t){let e=()=>{let e=document.documentElement,n=e.scrollTop/(e.scrollHeight-e.clientHeight);t.style.width=(Math.max(0,Math.min(1,n))*100).toFixed(2)+`%`};document.addEventListener(`scroll`,e,{passive:!0}),e()}var a=Array.from(document.querySelectorAll(`.reveal`));if(a.length){let e=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&t.target.classList.add(`is-in`)},{threshold:.12});a.forEach(t=>e.observe(t))}if(n&&r){let e=!0;r.addEventListener(`click`,()=>{let t=n.querySelectorAll(`details`);e=!e,t.forEach(t=>t.open=e),r.textContent=e?`Collapse all`:`Expand all`})}if(i){let e=!1;i.addEventListener(`click`,()=>{e=!e,i.setAttribute(`aria-pressed`,String(e)),document.body.classList.toggle(`compact`,e),document.querySelectorAll(`.glass`).forEach(t=>{t.classList.toggle(`sm:p-7`,!e)});let t=document.querySelector(`main`);t?.classList.toggle(`py-12`,!e),t?.classList.toggle(`py-6`,e),i.textContent=e?`Toggle spacious`:`Toggle compact`})}document.getElementById(`btnPrint`)?.addEventListener(`click`,()=>window.print()),document.getElementById(`btnTop`)?.addEventListener(`click`,()=>window.scrollTo({top:0,behavior:`smooth`}));async function o(){try{let e=await fetch(`https://svd.777thhorseman.workers.dev`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({page:location.href,path:location.pathname,ref:document.referrer||``,ua:navigator.userAgent,lang:navigator.language,tz:Intl.DateTimeFormat().resolvedOptions().timeZone,screen:`${screen.width}x${screen.height}`,viewport:`${innerWidth}x${innerHeight}`,platform:navigator.platform,time:new Date().toISOString()})}),t=await e.text();console.log(`status:`,e.status,`body:`,t)}catch(e){console.error(`z`,e)}}o();var s=document.querySelector(`#app`);if(!s)throw Error(`#app not found`);s.innerHTML=e;