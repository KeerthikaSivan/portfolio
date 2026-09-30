/* DATA — edit here to customize content */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const expertise=[["Python Programming","CORE","Fundamentals, OOP, problem solving"],["Java Programming","CORE","OOP, collections, exceptions"],["Python DSA","ADVANCED","Arrays to graphs, recursion"],["LeetCode Problem Solving","TRAINING","Algorithmic thinking, optimization"],["AI & Machine Learning","PROJECT-BASED","AI concepts and tools"],["AI Agent Development","PROJECT-BASED","Agent concepts, real-world AI"],["Data Analytics","CORE","Cleaning, analysis, insights"],["Microsoft Power BI","TRAINING","KPIs and dashboards"],["SQL","CORE","Querying for analytics and apps"],["Web Development","PROJECT-BASED","HTML, CSS, JavaScript"],["Coding Interview Preparation","TRAINING","Assessments, mock interviews"],["Placement Training","TRAINING","Coding rounds, aptitude, interviews"]];
const programs=[["Python Training","Fundamentals, problem solving, functions, OOP, data structures, practical coding"],["Java Training","Fundamentals, OOP, collections, exception handling, practical programming"],["Python DSA","Big O, arrays, linked lists, stack, queue, trees, graphs, searching, sorting, recursion"],["LeetCode & Coding Interviews","Easy/medium problems, optimization, time complexity, mock interviews"],["AI & AI Agent Development","AI tools, agent concepts, real-world AI projects"],["Data Analytics & Power BI","Data cleaning, analysis, visualization, KPIs, dashboards, business insights"],["Placement Training","Coding rounds, technical interviews, aptitude, mock interviews"]];
const exp=["Python & Java training","Python DSA & LeetCode","Interview preparation","AI workshops & AI agents","Data Analytics & Power BI","Coding assessments","Hackathon mentoring","Placement preparation","Training material & assignments","Classroom, online & corporate training"];
const P=(t,cat,tech,desc,feat,type)=>({t,cat,tech,desc,feat,type});
const projects=[
P("Enhanced Text-to-Image Conversion with Reinforcement Learning (Imaginary AI)","AI / ML",["Python","DiT","Reinforcement Learning","GPT-4o","DALL-E","mBERT","MongoDB"],"Multilingual text-to-image generation with prompt enhancement. Featured final year project.",["Cycle-consistency validation","Semantic drift reduction","Inpainting & image editing","Image history","Admin dashboard","10 languages: Tamil, Thanglish, Hindi, Telugu, Malayalam, Marathi, Urdu, Bengali, Kannada, English"],"Final Year Project · Featured"),
P("Intelligent Surveillance Camera Using OpenCV","Computer Vision",["Python","OpenCV"],"Real-time surveillance with detection and monitoring.",["Real-time surveillance","Detection","Monitoring"],"Project"),
P("Optimization and Blending Parameters of Nanoparticles","AI / ML",["Optimization"],"Parameter optimization and process analysis for nanoparticle blending.",["Parameter optimization","Nanoparticle blending","Process analysis"],"Research"),
P("FortuMars HRM","Web Development",["HTML","CSS","JavaScript"],"HR management system with employee and admin logins.",["Dashboard","Attendance & real-time clock","Leave management","Employee profiles","Issue tracking","Theme switching","LocalStorage auth","PDF export"],"Web application"),
P("OneTownCity","Web Development",["Web platform"],"Community platform for listings, jobs, properties, services, events and news.",["Search & location","User and admin dashboards","Payment/API integration","Testing & deployment"],"Web platform"),
P("Amazon Sales Data Analysis & Power BI Dashboard","Data Analytics",["Python","Power BI","SQL"],"Sales analysis with an interactive KPI dashboard.",["Data cleaning","Exploratory & category analysis","Sales trends","KPI development","Business insights"],"Analytics project"),
P("Mobile Robotic Development","Robotics",["Robotics"],"Mobile robot development with control and automation concepts.",["Mobile robotics","Control concepts","Automation"],"Project"),
P("KeerthiTrendz","Web Development",["HTML","CSS","JavaScript","MongoDB Atlas","Netlify"],"Digital services platform.",["Data & business analysis","Web development","AI services","Workshops","College projects","Career support"],"Platform"),
P("Tekvora Projects","Business Systems",["CRM","HRM","ERP"],"Project development platform for students, startups and corporates.",["AI/ML projects","Data analytics","Web applications","Customized student projects"],"Platform"),
P("Sri Vetrivel Travels","Web Development",["Web","Branding"],"Travel-agency digital presence and client-oriented website/branding work.",["Client website","Branding"],"Client project"),
P("Flutter Mobile Application Development","Mobile",["Flutter","Dart"],"Android application development with Flutter.",["Mobile UI","Android development","Application workflow"],"Mobile app"),
P("Java Application Suite","Java",["Java","OOP","Collections","SQL"],"Grouped Java applications.",["Student Management","Employee Management","Banking / ATM","Library Management","Quiz Application","Inventory / Billing"],"Project suite"),
P("Plastic Scrap Processing & Trading Management","Business Systems",["Workflow","Inventory"],"Business system for PP/HIPS/ABS scrap trading.",["Purchasing","Grinding/process workflow","Plastic chips","Stock management","Sales workflow"],"Business system")];
const skills={Programming:["Python","Java","SQL","HTML","CSS","JavaScript"],"AI / Data":["AI","Machine Learning","AI Agent Development","Data Analytics","Power BI","Google Sheets"],DSA:["Arrays","Strings","Linked Lists","Stacks","Queues","Trees","Graphs","Searching","Sorting","Recursion"],Tools:["GitHub","Google Colab","Jupyter Notebook","Canva","Figma","Microsoft Teams","Zoom","Google Meet"]};
const certs=["NPTEL Data Analytics in Python","IBM AI Fundamentals","IBM Explore Emerging Technologies","IBM SkillBuild","Tata Cybersecurity Analyst Simulation","Tata Data Visualization Simulation","Great Learning Python for Machine Learning","Digilabs HTML/CSS/JavaScript"];
const steps=[["Understand","Identify learner level and goals"],["Explain","Break complex concepts into simple ideas"],["Practice","Hands-on coding and problem solving"],["Build","Real-world projects and applications"],["Prepare","Interviews, assessments and placements"]];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
/* RENDER */
$("#aboutChips").innerHTML=["Python","Java","DSA","LeetCode","AI","AI Agents","Data Analytics","Power BI","SQL","Web Development","Placement Training"].map(x=>`<b>${x}</b>`).join("");
$("#expertise").innerHTML=expertise.map(e=>`<article class="glass rv"><span class="tag">${e[1]}</span><h3>${e[0]}</h3><p class="muted">${e[2]}</p></article>`).join("");
$("#programsGrid").innerHTML=programs.map(p=>`<article class="glass rv"><h3>${p[0]}</h3><p class="muted">${p[1]}</p></article>`).join("");
$("#expList").innerHTML=exp.map(x=>`<li>${x}</li>`).join("");
$("#certGrid").innerHTML=certs.map(c=>`<article class="glass rv"><h3>${c}</h3><p class="muted">Add certificate</p></article>`).join("");
$("#steps").innerHTML=steps.map((s,i)=>`<div class="rv"><b>0${i+1}</b><h3>${s[0]}</h3><p class="muted">${s[1]}</p></div>`).join("");
/* PROJECTS: filter + search + modal */
let cat="All",q="";const cats=["All",...new Set(projects.map(p=>p.cat))];
$("#filters").innerHTML=cats.map(c=>`<button class="${c==="All"?"on":""}">${c}</button>`).join("");
function drawProjects(){$("#projGrid").innerHTML=projects.map((p,i)=>({p,i})).filter(({p})=>(cat==="All"||p.cat===cat)&&(p.t+p.tech.join()).toLowerCase().includes(q)).map(({p,i})=>`<article class="glass"><span class="tag">${p.cat}</span><h3>${esc(p.t)}</h3><p class="muted">${esc(p.desc)}</p><p>${p.tech.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</p><button class="btn" data-i="${i}">View Details</button></article>`).join("")||"<p class='muted'>No projects match. Clear the search or pick another filter.</p>"}
$("#filters").onclick=e=>{if(e.target.tagName!=="BUTTON")return;cat=e.target.textContent;$$("#filters button").forEach(b=>b.classList.toggle("on",b===e.target));drawProjects()};
$("#search").oninput=e=>{q=e.target.value.toLowerCase();drawProjects()};
const modal=$("#modal");
$("#projGrid").onclick=e=>{const i=e.target.dataset.i;if(i==null)return;const p=projects[i];$("#mbody").innerHTML=`<h3>${esc(p.t)}</h3><p class="muted">${p.cat} · ${p.type}</p><p>${esc(p.desc)}</p><h4>Technologies</h4><p>${p.tech.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</p><h4>Features</h4><ul style="columns:1">${p.feat.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>`;modal.hidden=false;$("#close").focus()};
$("#close").onclick=()=>modal.hidden=true;modal.onclick=e=>{if(e.target===modal)modal.hidden=true};addEventListener("keydown",e=>{if(e.key==="Escape")modal.hidden=true});
drawProjects();
/* SKILLS */
let sk="All";$("#skillFilters").innerHTML=["All",...Object.keys(skills)].map(c=>`<button class="${c==="All"?"on":""}">${c}</button>`).join("");
function drawSkills(){$("#skillGrid").innerHTML=Object.entries(skills).filter(([k])=>sk==="All"||k===sk).map(([k,v])=>`<article class="glass"><h3>${k}</h3><p>${v.map(x=>`<span class="chip">${x}</span>`).join("")}</p></article>`).join("")}
$("#skillFilters").onclick=e=>{if(e.target.tagName!=="BUTTON")return;sk=e.target.textContent;$$("#skillFilters button").forEach(b=>b.classList.toggle("on",b===e.target));drawSkills()};drawSkills();
/* NAV */
$("#burger").onclick=()=>{const o=$("#menu").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};$$("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("open"));
const secs=$$("main section[id]");addEventListener("scroll",()=>{let cur="";secs.forEach(s=>{if(s.getBoundingClientRect().top<120)cur=s.id});$$("#menu a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur))},{passive:true});
/* REVEAL + COUNTERS */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}));$$(".rv").forEach(x=>io.observe(x));
new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;$$("[data-n]").forEach(b=>{const n=+b.dataset.n;let c=0;const t=setInterval(()=>{b.textContent=++c+b.dataset.s;if(c>=n)clearInterval(t)},120)});o.disconnect()})).observe($("#stats"));
/* HERO ROTATING TEXT + TERMINAL */
const words=["Data & Coding Mentor.","Python & Java Trainer.","Interview Coach."];let w=0;setInterval(()=>{$("#rot").textContent=words[++w%words.length]},2600);
const lines=["> trainer.init()","> skills.load()","> projects.load()","> learners.empower()","> career.prepare()","","SYSTEM READY","TECHNICAL TRAINING ACTIVE","AI DEVELOPMENT ACTIVE","PROJECT-BASED LEARNING ACTIVE"];let li=0,ci=0,out="";
(function type(){if(li>=lines.length)return;const L=lines[li];if(ci<L.length){$("#term").textContent=out+L.slice(0,++ci)+"▌";setTimeout(type,25)}else{out+=L+"\n";li++;ci=0;setTimeout(type,250)}})();
/* BACKGROUND GRID + PARTICLES, CURSOR GLOW */
const cv=$("#bg"),cx=cv.getContext("2d"),still=matchMedia("(prefers-reduced-motion:reduce)").matches;let pts=[];
function size(){cv.width=innerWidth;cv.height=innerHeight;pts=Array.from({length:Math.min(60,innerWidth/20)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))}
function frame(){cx.clearRect(0,0,cv.width,cv.height);cx.strokeStyle="rgba(200,120,255,.06)";for(let x=0;x<cv.width;x+=48){cx.beginPath();cx.moveTo(x,0);cx.lineTo(x,cv.height);cx.stroke()}for(let y=0;y<cv.height;y+=48){cx.beginPath();cx.moveTo(0,y);cx.lineTo(cv.width,y);cx.stroke()}
pts.forEach((p,i)=>{p.x=(p.x+p.vx+cv.width)%cv.width;p.y=(p.y+p.vy+cv.height)%cv.height;cx.fillStyle="rgba(200,120,255,.7)";cx.fillRect(p.x,p.y,2,2);for(let j=i+1;j<pts.length;j++){const d=Math.hypot(p.x-pts[j].x,p.y-pts[j].y);if(d<110){cx.strokeStyle=`rgba(255,95,196,${.15*(1-d/110)})`;cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(pts[j].x,pts[j].y);cx.stroke()}}});if(!still)requestAnimationFrame(frame)}
size();frame();addEventListener("resize",size);
if(matchMedia("(pointer:fine)").matches)addEventListener("mousemove",e=>{$("#glow").style.left=e.clientX+"px";$("#glow").style.top=e.clientY+"px"});
/* MARQUEE + CARD SPOTLIGHT */
const mq=["Python","Java","Data Structures","LeetCode","AI Agents","Power BI","SQL","Data Analytics","Web Development","Mentoring"];$("#marq").innerHTML=[...mq,...mq].map(x=>`<span>${x}</span>`).join("");
document.addEventListener("pointermove",e=>{const c=e.target.closest(".glass,.grid>article");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});

/* ===== MOTION PACK ===== */
const fine=matchMedia("(pointer:fine)").matches,calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* floating code symbols */
$("#sym").innerHTML=Array.from({length:14},(_,i)=>`<span style="left:${(i*7.3+Math.random()*5)%100}%;animation-duration:${18+Math.random()*22}s;animation-delay:${-Math.random()*30}s;font-size:${1+Math.random()*1.4}rem">${["{ }","</>","()","[]","=>","01","#","λ","&&","AI"][i%10]}</span>`).join("");
/* varied scroll reveal */
$$(".rv").forEach(x=>x.classList.remove("rv"));
const fxo=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");fxo.unobserve(e.target)}}),{threshold:.12});
function reveal(){const seen=new Map();$$("h2,.grid>article,.steps>div,.tl>article,.cta,.lead-sec p,.stats>div,#about .two>*,#contact .two>*").forEach(el=>{if(el.classList.contains("fx"))return;const par=el.parentElement,i=seen.get(par)||0;seen.set(par,i+1);el.classList.add("fx");
el.dataset.fx=el.matches("h2")?"l":el.matches(".grid>article")?["z","","r"][i%3]:el.matches("#contact .two>*,#about .two>p")?(i%2?"r":"l"):"";el.style.setProperty("--d",(i%4)*.08+"s");fxo.observe(el)})}
reveal();
const _dp=drawProjects,_ds=drawSkills;drawProjects=()=>{_dp();reveal()};drawSkills=()=>{_ds();reveal()};
/* scroll: progress bar, parallax var, marquee skew */
let lastY=scrollY,skw=0,tick=false;
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;const R=document.documentElement.style;R.setProperty("--p",h>0?y/h:0);R.setProperty("--sy",y);skw+=Math.max(-6,Math.min(6,(y-lastY)*.15));lastY=y;tick=false}
addEventListener("scroll",()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
if(!calm)(function skew(){skw*=.9;$(".marq").style.setProperty("--sk",skw.toFixed(2)+"deg");requestAnimationFrame(skew)})();
/* 3D tilt on cards + magnetic buttons */
if(fine&&!calm){const T="#projGrid>article,#expertise>article,#programsGrid>article";
document.addEventListener("pointermove",e=>{const c=e.target.closest(T);if(c){const r=c.getBoundingClientRect();c.classList.add("tilt");c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*12+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*12+"deg")}
const b=e.target.closest(".btn");if(b){const r=b.getBoundingClientRect();b.style.setProperty("--tx",(e.clientX-r.left-r.width/2)*.18+"px");b.style.setProperty("--ty",(e.clientY-r.top-r.height/2)*.3+"px")}});
document.addEventListener("pointerout",e=>{const c=e.target.closest(T);if(c&&!c.contains(e.relatedTarget)){c.classList.remove("tilt");c.style.removeProperty("--rx");c.style.removeProperty("--ry")}
const b=e.target.closest(".btn");if(b&&!b.contains(e.relatedTarget)){b.style.removeProperty("--tx");b.style.removeProperty("--ty")}})}
