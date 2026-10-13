const resources=[
{id:'followup',title:'Understanding follow-up care',topic:'Care & recovery',tags:['recovery','beyond'],provider:'Canadian Cancer Society',page:8,url:'https://cancer.ca/en/cancer-information/cancer-types/uterine/treatment/follow-up',desc:'Learn what follow-up care can involve after uterine cancer treatment.',detail:'Bring your questions to your care team and ask them to explain your own follow-up plan.',diagnosis:'uterine'},
{id:'ovarian-followup',title:'Follow-up after ovarian cancer',topic:'Care & recovery',tags:['recovery','beyond'],provider:'Canadian Cancer Society',page:8,url:'https://cancer.ca/en/cancer-information/cancer-types/ovarian/treatment/follow-up',desc:'An overview of follow-up care after treatment for ovarian cancer.',detail:'Use this as background for a conversation with your care team about your personal plan.',diagnosis:'ovarian'},
{id:'surgery',title:'Preparing for gynecologic surgery',topic:'Care & recovery',tags:['new','surgery'],provider:'Vancouver Coastal Health',page:19,url:'https://vch.eduhealth.ca/en/viewer?file=%2fmedia%2fVCH%2fGE%2fGE.230.G891.pdf#phrase=false',desc:'The surgery preparation booklet linked in the library, in one place.',detail:'Ask your surgical team which instructions apply to your procedure.'},
{id:'fatigue',title:'Making sense of cancer-related fatigue',topic:'Energy & sleep',tags:['fatigue','treatment','recovery'],provider:'Wellspring',page:29,url:'https://portal.wellspring.ca/service/a1dON000000vHdeYAE/cancer-related-fatigue',desc:'Explore a learning program focused on cancer-related fatigue.',detail:'Check the provider’s current program dates and registration requirements.'},
{id:'sleep',title:'Support for a better night’s sleep',topic:'Energy & sleep',tags:['sleep'],provider:'Sleep, Health & Wellness Lab',page:61,url:'https://drsheilagarland.com/resources',desc:'Sleep resources linked from the library’s living well section.',detail:'A starting point for learning about sleep and preparing questions for your healthcare team.'},
{id:'anxiety',title:'Understanding anxiety and distress',topic:'Emotional wellbeing',tags:['anxiety','new'],provider:'National Cancer Institute',page:56,url:'https://www.cancer.gov/about-cancer/coping/feelings/anxiety-distress-pdq',desc:'Information about the emotional challenges that can come with cancer.',detail:'Use the resource to explore support options and language for talking about how you feel.'},
{id:'mindful',title:'A moment to pause: guided meditations',topic:'Emotional wellbeing',tags:['anxiety','sleep'],provider:'UCLA Mindful',page:56,url:'https://www.uclahealth.org/uclamindful/guided-meditations',desc:'Guided audio practices, including options in different languages.',detail:'Choose a short practice that suits you. You do not need to complete everything.'},
{id:'counselling',title:'Someone to talk to',topic:'Emotional wellbeing',tags:['anxiety','connection'],provider:'BC Cancer',page:84,url:'http://www.bccancer.bc.ca/our-services/services/supportive-care/patient-family-counselling',desc:'Find information about patient and family counselling and support programs.',detail:'Contact the program to ask about availability and whether it meets your needs.'},
{id:'nutrition',title:'Nutrition support during cancer care',topic:'Eating & movement',tags:['nutrition','treatment'],provider:'BC Cancer',page:64,url:'http://www.bccancer.bc.ca/our-services/services/supportive-care/nutrition',desc:'Explore nutrition services and support for eating-related challenges.',detail:'Ask about connecting with a registered dietitian for advice suited to your situation.'},
{id:'inspire',title:'Support for life beyond treatment',topic:'Eating & movement',tags:['movement','connection','beyond','recovery'],provider:'InspireHealth',page:84,url:'https://inspirehealth.ca/',desc:'Explore supportive programs covering exercise, nutrition, counselling, and wellbeing.',detail:'Visit the provider for current services, access details, and program information.'},
{id:'sexual',title:'Sexual health and intimacy',topic:'Pelvic & sexual health',tags:['sexual','menopause'],provider:'BC Cancer',page:71,url:'http://www.bccancer.bc.ca/health-info/coping-with-cancer/managing-symptoms-side-effects/sexual-health',desc:'Find information and support for sexual health concerns during and after treatment.',detail:'This can help you prepare questions about comfort, intimacy, or specialist support.'},
{id:'work',title:'Finding your way back to work',topic:'Practical support',tags:['work','beyond'],provider:'BC Cancer',page:75,url:'http://www.bccancer.bc.ca/our-services/services/supportive-care/vocational-rehabilitation',desc:'Explore vocational rehabilitation and support for returning to work.',detail:'Ask the service about current eligibility and support for your circumstances.'},
{id:'money',title:'Help with the financial side of cancer',topic:'Practical support',tags:['money'],provider:'BC Cancer',page:88,url:'http://www.bccancer.bc.ca/health-info/coping-with-cancer/practical-support/financial-assistance',desc:'A starting point for finding financial assistance and practical support.',detail:'Programs have different eligibility requirements. Check the provider’s current details.'},
{id:'travel',title:'Help getting to care',topic:'Practical support',tags:['travel'],provider:'Hope Air',page:89,url:'https://hopeair.ca/travel-support-services/',desc:'Explore medical travel support services listed in the library.',detail:'Check current location, income, and travel eligibility directly with Hope Air.'},
{id:'caregiver',title:'Support for the person supporting you',topic:'Connection & community',tags:['caregiver','connection'],provider:'Family Caregivers of BC',page:85,url:'https://www.familycaregiversbc.ca/',desc:'Information and support for family members and friends in a caregiving role.',detail:'Explore support options for your own needs as well as the person you care for.'},
{id:'indigenous',title:'Indigenous cancer resources',topic:'Connection & community',tags:['indigenous'],provider:'First Nations Health Authority',page:77,url:'https://www.fnha.ca/what-we-do/healthy-living/cancer',desc:'Cancer information and resources from the First Nations Health Authority.',detail:'The library also describes Indigenous Patient Navigators; ask your care team about connecting with one.'}
];
const questions=[
{key:'stage',title:'Which best describes your current situation?',intro:'Answer four questions about your situation and the support you need. We’ll use your answers to create a personalized resource guide you can save. Choose the situation that feels closest; there are no right or wrong answers.',multi:false,options:[['new','I’m newly diagnosed','I’m finding my bearings'],['treatment','I’m having treatment','I want support along the way'],['recovery','I’ve recently finished treatment','I’m adjusting to recovery'],['beyond','I’m living beyond cancer','I’m finding my new normal'],['caregiver','I’m supporting someone','I’m a family member or friend'],['unsure','I’m just exploring','I’d like a starting point']]},
{key:'diagnosis',title:'Which diagnosis should we keep in mind?',intro:'This helps us choose relevant follow-up reading. You can skip this.',multi:false,options:[['uterine','Uterine / endometrial cancer'],['ovarian','Ovarian / fallopian tube cancer'],['cervical','Cervical cancer'],['other','Vulvar, vaginal, or another diagnosis'],['unsure','I’m not sure / prefer not to say']]},
{key:'needs',title:'What would you like help with first?',intro:'Choose up to 3 priorities so we can focus your guide on the information you need most.',multi:true,max:3,options:[['fatigue','Low energy or fatigue'],['sleep','Sleep'],['anxiety','Worry or emotional wellbeing'],['nutrition','Eating and nutrition'],['movement','Getting active again'],['sexual','Pelvic health or intimacy'],['menopause','Menopause concerns'],['work','Returning to work'],['surgery','Preparing for surgery'],['connection','Connecting with support']]},
{key:'support',title:'Anything else we should include?',intro:'Choose any practical support you want, or continue without selecting.',multi:true,options:[['money','Costs and financial support'],['travel','Travel to appointments'],['caregiver','Resources for caregivers'],['indigenous','Indigenous patient resources']]}
];
const app=document.querySelector('#app');let answers={stage:'',diagnosis:'',needs:[],support:[]},step=0,current=[],isLibrary=false,filter='All',search='';
function getSaved(){try{const s=JSON.parse(localStorage.getItem('gci-resources-guide-v1'));return s&&Array.isArray(s.ids)?s:null}catch{return null}}
function remember(){try{localStorage.setItem('gci-resources-guide-v1',JSON.stringify({ids:current.map(r=>r.id),answers}));return true}catch{return false}}
function toast(t){const e=document.querySelector('#toast');e.textContent=t;e.style.display='block';setTimeout(()=>e.style.display='none',4500)}
function focusTitle(){const e=app.querySelector('h1');if(e){e.tabIndex=-1;e.focus({preventScroll:true})}window.scrollTo(0,0)}
function home(){instituteHome();}
function quiz(){document.body.classList.remove('institute-home');isLibrary=false;const q=questions[step];app.innerHTML=`<section class="quiz"><div class="section-head"><span class="eyebrow">Create your personalized guide</span><span class="fine">Question ${step+1} of 4</span></div><div class="progress" aria-label="Step ${step+1} of 4">${questions.map((_,i)=>`<span class="${i<=step?'active':''}"></span>`).join('')}</div><h1>${q.title}</h1><p class="intro">${q.intro}</p><div class="options" role="group" aria-label="${q.title}">${q.options.map(([v,l,d])=>{const selected=q.multi?answers[q.key].includes(v):answers[q.key]===v;return `<button class="option ${selected?'selected':''}" data-value="${v}" aria-pressed="${selected}"><span class="check" aria-hidden="true">${selected?'✓':''}</span><span>${l}${d?`<small>${d}</small>`:''}</span></button>`}).join('')}</div><div class="quiz-bottom"><button class="quiet" id="back">← ${step?'Back':'Home'}</button><button class="primary" id="next" ${step===0&&!answers.stage||step===2&&!answers.needs.length?'disabled':''}>${step===3?'Create my guide':'Continue'} →</button></div>${step===1?'<button class="quiet" id="skip">Skip this question</button>':''}</section>`;app.querySelectorAll('.option').forEach(b=>b.onclick=()=>{const v=b.dataset.value;if(q.multi){let a=answers[q.key];if(a.includes(v))answers[q.key]=a.filter(x=>x!==v);else if(!q.max||a.length<q.max)a.push(v);else{toast('Choose up to 3 priorities. Unselect one to choose another.');return}}else answers[q.key]=v;const scroll=window.scrollY;quiz();app.querySelector(`[data-value="${v}"]`).focus({preventScroll:true});window.scrollTo(0,scroll)});document.querySelector('#back').onclick=()=>{if(step){step--;quiz()}else home();focusTitle()};document.querySelector('#next').onclick=()=>{if(step<3){step++;quiz()}else{current=match();const saved=remember();results();if(!saved)toast('Device saving is unavailable. Save your link to keep this guide.')}focusTitle()};if(document.querySelector('#skip'))document.querySelector('#skip').onclick=()=>{answers.diagnosis='';step++;quiz();focusTitle()};}
function match(){const tags=[answers.stage,...answers.needs,...answers.support];let ranked=resources.filter(r=>!r.diagnosis||r.diagnosis===answers.diagnosis).map(r=>({r,score:r.tags.reduce((s,t)=>s+(tags.includes(t)?(answers.needs.includes(t)||answers.support.includes(t)?10:3):0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);return ranked.slice(0,8).map(x=>x.r)}
function why(r){const t=r.tags.find(t=>answers.needs.includes(t)||answers.support.includes(t));const labels=questions.flatMap(q=>q.options);if(t)return `Selected because you asked about: ${labels.find(x=>x[0]===t)?.[1]||t}`;return answers.stage?'Selected for your current situation.':'Included in your saved collection.'}
function card(r,personal){return `<article class="resource"><span class="eyebrow">${r.topic}</span><h3>${r.title}</h3><p>${r.desc}</p>${personal?`<div class="why">${why(r)}</div>`:''}<details><summary>Using this resource</summary><p>${r.detail}</p></details><div class="source">${r.provider} · Library p. ${r.page}</div><a href="${r.url}" target="_blank" rel="noopener noreferrer">Visit resource <span aria-label="opens in a new tab">↗</span></a></article>`}
function results(){document.body.classList.remove('institute-home');isLibrary=false;filter='All';search='';app.innerHTML=`<section class="results-top results-compact"><div class="results-heading"><h1>Your tailored resources</h1><p>${current.length} resources selected for your situation and priorities.</p></div><div class="results-tools" aria-label="Guide actions"><button class="secondary" id="copy">Save link ↗</button><button class="secondary" id="print">Print / PDF</button><button class="secondary" id="emailGuide">Email my guide</button><button class="quiet" id="edit">Change answers</button></div><form id="emailGuideForm" class="email-guide-form" hidden><label for="guideEmail">Your email address</label><input id="guideEmail" type="email" autocomplete="email" placeholder="you@example.com" required><p class="fine">We’ll prepare an email with your selected resource links. This prototype opens your email app, where you can review and send it.</p><details class="email-preview"><summary>Preview the email</summary><pre id="emailPreview"></pre></details><button class="primary" type="submit">Open email draft ↗</button><button class="quiet" type="button" id="cancelEmail">Cancel</button><p id="emailGuideStatus" class="fine" role="status" aria-live="polite"></p></form><input id="linkField" aria-label="Your guide link" readonly hidden class="search"></section><section class="results-resources" aria-label="Your selected resources"><div id="filters" class="chips"></div><div id="cards" class="cards"></div></section><details class="guide-details"><summary>About your guide</summary><p>Your guide is saved on this browser when browser storage is available. Save a link, print a copy, or prepare an email to keep it handy.</p><p>Anyone with your saved link can see this collection. It contains resource choices, not your quiz answers.</p><p>This is a sample resource match, not a clinical recommendation. Your care team can help you decide what applies to you. Provider availability and eligibility may change.</p><button class="quiet" id="restart">Start a new guide</button></details>`;renderFilters();renderCards();document.querySelector('#edit').onclick=()=>{step=0;quiz();focusTitle()};document.querySelector('#restart').onclick=()=>{history.replaceState(null,'',location.pathname+location.search);home();focusTitle()};document.querySelector('#copy').onclick=copyLink;document.querySelector('#print').onclick=()=>window.print();setupEmailGuide()}
function renderFilters(){const pool=isLibrary?resources:current;document.querySelector('#filters').innerHTML=['All',...new Set(pool.map(r=>r.topic))].map(t=>`<button class="chip ${t===filter?'active':''}" aria-pressed="${t===filter}">${t}</button>`).join('');document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{filter=b.textContent;renderFilters();renderCards()})}
function renderCards(){const pool=isLibrary?resources:current;const shown=pool.filter(r=>(filter==='All'||r.topic===filter)&&(!search||`${r.title} ${r.topic} ${r.desc} ${r.provider}`.toLowerCase().includes(search)));document.querySelector('#cards').innerHTML=shown.length?shown.map(r=>card(r,!isLibrary)).join(''):'<p class="empty">No resources match this search. Try a broader word or choose another topic.</p>'}
function library(){document.body.classList.remove('institute-home');isLibrary=true;filter='All';search='';app.innerHTML=`<div class="eyebrow">Information and support for your needs</div><h1>Find information for your situation.</h1><p class="intro">Explore 16 sample resources by topic, or answer a few questions to get a guide matched to your personal situation and priorities.</p><div class="actions"><button class="primary" id="take">Create my personalized guide →</button></div><label for="search">Search by topic, resource, or provider</label><input class="search" id="search" type="search" placeholder="Try sleep, nutrition, or travel"><div class="chips" id="filters"></div><div class="cards" id="cards"></div><p class="fine" style="margin-top:28px">Source links are taken from the supplied library. Check each provider for current information.</p>`;renderFilters();renderCards();document.querySelector('#search').oninput=e=>{search=e.target.value.toLowerCase().trim();renderCards()};document.querySelector('#take').onclick=startPersonalGuide;focusTitle()}
function resume(){const s=getSaved();if(s){current=s.ids.map(id=>resources.find(r=>r.id===id)).filter(Boolean);if(s.answers)answers={...answers,...s.answers};if(current.length){results();focusTitle();return}}toast('Your saved guide will appear here after you complete the questions.');home()}
async function copyLink(){const link=location.href.split('#')[0]+'#guide='+current.map(r=>r.id).join(',');const field=document.querySelector('#linkField');field.hidden=false;field.value=link;try{await navigator.clipboard.writeText(link);toast('Link copied. Paste it into your notes or bookmark it.')}catch{field.select();toast('Copy the link shown below and save it in your notes.')}}
document.querySelector('#libraryNav').onclick=library;document.querySelector('#savedNav').onclick=resume;document.querySelector('.resource-home').onclick=()=>{home();focusTitle()};document.querySelector('#siteSearch').onclick=()=>{library();document.querySelector('#search').focus()};document.querySelectorAll('.gci-nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.gci-nav details').forEach(other=>{if(other!==d)other.open=false})}));document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.gci-nav details').forEach(d=>d.open=false)});document.querySelector('#libraryNav').addEventListener('click',()=>document.querySelectorAll('.gci-nav details').forEach(d=>d.open=false));
function loadLink(){if(location.hash.startsWith('#guide=')){const ids=location.hash.slice(7).split(',');current=[...new Set(ids)].map(id=>resources.find(r=>r.id===id)).filter(Boolean);if(current.length){answers={stage:'',diagnosis:'',needs:[],support:[]};remember();results();return}}home()}



function guideEmailBody(){
 const lines=['Your personalized GCI Resources guide','', 'Here are the information and support resources selected for your guide.',''];
 current.forEach((r,i)=>lines.push(`${i+1}. ${r.title}`,r.provider,r.desc,r.url,''));
 if(location.protocol==='https:'||location.protocol==='http:'){
   lines.push('Return to your guide:',location.href.split('#')[0]+'#guide='+current.map(r=>r.id).join(','),'');
 }
 lines.push('These are educational resources. Your care team can help you decide what applies to you.');
 return lines.join('\n');
}
function setupEmailGuide(){
 const form=document.querySelector('#emailGuideForm');
 document.querySelector('#emailGuide').onclick=()=>{
   form.hidden=false;document.querySelector('#emailPreview').textContent=guideEmailBody();
   document.querySelector('#guideEmail').focus();
 };
 document.querySelector('#cancelEmail').onclick=()=>{form.hidden=true;form.reset();document.querySelector('#emailGuideStatus').textContent='';document.querySelector('#emailGuide').focus()};
 form.onsubmit=e=>{
   e.preventDefault();if(!form.reportValidity())return;
   const address=document.querySelector('#guideEmail').value.trim();
   const uri='mailto:'+encodeURIComponent(address)+'?subject='+encodeURIComponent('Your personalized GCI Resources guide')+'&body='+encodeURIComponent(guideEmailBody());
   document.querySelector('#emailGuideStatus').textContent='Email draft requested. Review it and press Send in your email app. If no app opens, copy the email preview into your email.';
   location.href=uri;
 };
}

// GCI HOMEPAGE ROUTING
function instituteHome(){
 document.body.classList.add('institute-home');isLibrary=false;
 app.innerHTML=`<section class="institute-carousel" aria-label="GCI highlights" aria-roledescription="carousel" tabindex="0"><div class="carousel-slide institute-hero" data-slide="0" role="group" aria-roledescription="slide" aria-label="1 of 2: Advancing research"><div class="institute-hero-copy"><h1>Advancing research<br>to build a future <em>free</em><br>from gynecologic<br>cancers</h1><a class="home-yellow-button" href="https://gynecancerinitiative.ca/vision-and-mission/">ABOUT THE GCI</a></div></div><div class="carousel-slide institute-hero resources-hero" data-slide="1" role="group" aria-roledescription="slide" aria-label="2 of 2: GCI Resources" hidden><div class="institute-hero-copy"><div class="eyebrow">GCI RESOURCES</div><h2>Cancer information and support,<br>tailored to <em>you.</em></h2><p>Tell us about your current situation and what you’d like help with. We’ll bring together relevant information and support resources in a personalized guide you can save and return to anytime.</p><a class="home-yellow-button" href="#quiz">CREATE MY PERSONALIZED GUIDE →</a><a class="carousel-library-link" href="#library">Browse all resources →</a></div></div><div class="carousel-controls"><button type="button" class="carousel-arrow" id="carouselPrev" aria-label="Previous slide">←</button><div class="carousel-dots" role="group" aria-label="Choose a slide"><button type="button" data-slide-to="0" aria-label="Show research slide" aria-current="true"></button><button type="button" data-slide-to="1" aria-label="Show resources slide" aria-current="false"></button></div><span id="carouselStatus" class="carousel-status" aria-live="polite" aria-atomic="true">1 / 2</span><button type="button" class="carousel-arrow" id="carouselNext" aria-label="Next slide">→</button></div></section>
 <div class="institute-content"><section class="home-highlights" aria-label="GCI statistics, sample figures for this prototype"><div class="stat-card"><strong>$125M</strong><span>In grants funded since<br>2019</span></div><div class="stat-card"><strong>85</strong><span>Members</span></div><div class="stat-card"><strong>24</strong><span>International<br>Partnerships</span></div><div class="stat-card"><strong>125,000+</strong><span>Citations since 2019</span></div></section><p class="stats-demo-note">Sample figures for design demonstration.</p>

 <section class="home-resource-cta" id="patient-resources"><div class="cta-photo"><img src="assets/gci-resources-section.webp" alt="A woman reviewing information on a tablet at her table" loading="lazy" width="1536" height="1024"></div><div class="cta-copy"><div class="eyebrow">FOR PATIENTS & FAMILIES</div><h2>Cancer information and support,<br>tailored to you.</h2><p>Whether you’re newly diagnosed, receiving treatment, living beyond cancer, or supporting someone, your questions and needs are personal.</p><p>Tell us about your current situation and what you’d like help with. We’ll bring together relevant information and support resources in a personalized guide you can save and return to anytime.</p><a class="home-yellow-button" href="#quiz">Create my personalized guide <span>→</span></a><a class="home-text-link" href="#library">Or browse all resources <span>→</span></a></div></section>
 <section class="home-editorial"><div><h2>Research that puts people at the centre.</h2><p>Explore GCI’s work in gynecologic cancer research, and discover ways to learn, connect, and get involved.</p><a class="home-text-link" href="https://gynecancerinitiative.ca/vision-and-mission/">About us <span>↗</span></a></div><img src="https://gynecancerinitiative.ca/wp-content/uploads/2020/09/pexels-tristan-le-1653898-1-1.jpg" alt="A peaceful outdoor landscape" loading="lazy"></section>
 <section class="home-editorial"><div><h2>We accelerate research on prevention, detection, treatment and survivorship.</h2><p>Learn about research projects and the people working to improve life with and beyond gynecologic cancer.</p><a class="home-text-link" href="https://gynecancerinitiative.ca/our-projects-test-block/">Explore our research <span>↗</span></a></div><div class="home-research-art" aria-hidden="true"><div class="science-ring ring-one"></div><div class="science-ring ring-two"></div><div class="science-ring ring-three"></div><span>Discovery.<br>Care.<br>Progress.</span></div></section>
 <section class="home-editorial reverse"><div><h2>Explore the GCI Learning Hub</h2><p>Find learning opportunities and information for researchers, care teams, and our wider community.</p><a class="home-text-link" href="https://gynecancerinitiative.ca/knowledge-hub/">Explore the learning hub <span>↗</span></a></div><img src="https://gynecancerinitiative.ca/wp-content/uploads/2020/09/pexels-gustavo-fring-4173083.jpg" alt="Healthcare professionals working together" loading="lazy"></section>
 <section class="home-last-cta"><h2>Cancer information and support, tailored to you.</h2><p>Tell us about your situation and what you’d like help with to create a guide you can save and return to anytime.</p><a class="home-yellow-button" href="#quiz">Create my personalized guide →</a></section></div>`;
 initHomeCarousel();
 focusTitle();
}

function initHomeCarousel(){
 const carousel=document.querySelector('.institute-carousel');
 const slides=Array.from(carousel.querySelectorAll('[data-slide]'));
 const dots=Array.from(carousel.querySelectorAll('[data-slide-to]'));
 const status=carousel.querySelector('#carouselStatus');
 const track=document.createElement('div');
 track.className='carousel-track';
 track.style.transition='transform 1200ms cubic-bezier(.4,0,.2,1)';
 carousel.insertBefore(track,slides[0]);
 slides.forEach(slide=>{slide.hidden=false;track.appendChild(slide)});
 let active=0,hovered=false,focused=false,lastChange=Date.now();
 function updateStatus(){status.setAttribute('aria-live',hovered||focused?'polite':'off')}
 function showSlide(index){
   active=(index+slides.length)%slides.length;
   track.style.transform=`translateX(-${active*100}%)`;
   slides.forEach((slide,i)=>{slide.inert=i!==active;slide.setAttribute('aria-hidden',String(i!==active))});
   dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===active)));
   status.textContent=`${active+1} / ${slides.length}`;
   lastChange=Date.now();
 }
 carousel.querySelector('#carouselPrev').onclick=()=>showSlide(active-1);
 carousel.querySelector('#carouselNext').onclick=()=>showSlide(active+1);
 dots.forEach((dot,i)=>dot.onclick=()=>showSlide(i));
 carousel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showSlide(active+(e.key==='ArrowRight'?1:-1))}});
 
 
 carousel.addEventListener('focusin',e=>{focused=!!e.target.closest('a,button,input');updateStatus()});
 carousel.addEventListener('focusout',e=>{focused=!!(e.relatedTarget&&carousel.contains(e.relatedTarget)&&e.relatedTarget.closest('a,button,input'));lastChange=Date.now();updateStatus()});
 showSlide(0);updateStatus();
 const timer=setInterval(()=>{
   if(!carousel.isConnected){clearInterval(timer);return}
   if(!focused)showSlide(active+1);
 },3000);
}

function startPersonalGuide(){
 answers={stage:'',diagnosis:'',needs:[],support:[]};step=0;
 if(location.hash!=='#quiz')location.hash='#quiz';
 quiz();focusTitle();
}
function routePrototype(){
 if(location.hash==='#home'||location.hash===''||location.hash==='#top'){instituteHome();return}
 document.body.classList.remove('institute-home');
 if(location.hash==='#resources'){startPersonalGuide();return}
 if(location.hash==='#library'){library();return}
 if(location.hash==='#quiz'){startPersonalGuide();return}
 loadLink();
}
document.querySelectorAll('.gci-brand').forEach(a=>{a.href='#home';a.onclick=e=>{e.preventDefault();if(location.hash==='#home')instituteHome();else location.hash='home'}});
document.querySelector('.resource-home').onclick=startPersonalGuide;
window.addEventListener('hashchange',routePrototype);
routePrototype();

// Mobile navigation

const menuToggle=document.querySelector('#mobileMenuToggle');
const mainNav=document.querySelector('#mainNavigation');
function closeMobileMenu(){mainNav.classList.remove('mobile-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='Menu ☰';}
menuToggle.onclick=()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';mainNav.classList.toggle('mobile-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'Close ×':'Menu ☰';};
mainNav.addEventListener('click',e=>{if(e.target.closest('a,button'))closeMobileMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMobileMenu();menuToggle.focus();}});
window.addEventListener('hashchange',closeMobileMenu);