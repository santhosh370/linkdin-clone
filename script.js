const ME={
  name:'Santhosh Kumar',initials:'SK',
  title:'B.E Student | Aspiring Software Engineer',
  location:'Tamil Nadu, India',
  college:'Adhi College of Engineering and Technology',
  degree:'B.E. Computer Science & Engineering',
  period:'2022 – 2026',connections:87,color:'#7152b3',
  about:'Passionate B.E. Computer Science student at Adhi College of Engineering and Technology, Tamil Nadu. Strongly interested in software development, web technologies, and problem solving. Actively looking for internship opportunities.',
  skills:['Python','Java','HTML & CSS','JavaScript','React','Data Structures'],
  openTo:['Software Engineer Internship','Full Stack Developer Intern','Web Developer'],
  projects:[
    {name:'Task Manager Web App',desc:'Full-stack task management app with React, Node.js + Express, and MongoDB. Features user authentication, CRUD, and responsive UI.',tags:['React','Node.js','MongoDB'],time:'Jan 2025 – Mar 2025'},
    {name:'Student Result Portal',desc:'College result portal built with Python Flask and MySQL. Students view results; faculty upload marks digitally.',tags:['Python','Flask','MySQL'],time:'Aug 2024 – Nov 2024'},
  ],
};

const AVATAR_COLORS=['#7152b3','#0a66c2','#057642','#b24020','#c37d16','#1d6fa4','#86511f','#e63946'];
const BANNER_GRADIENTS={
  '#0a66c2':'linear-gradient(135deg,#0a66c2,#1e3a5f,#7152b3)',
  '#057642':'linear-gradient(135deg,#057642,#034d2c,#0a66c2)',
  '#b24020':'linear-gradient(135deg,#b24020,#7d1f0a,#0a66c2)',
  '#7152b3':'linear-gradient(135deg,#7152b3,#4a2d8f,#0a66c2)',
  '#c37d16':'linear-gradient(135deg,#c37d16,#8a5000,#0a66c2)',
};

const STATE={
  tab:'feed',netFilter:'all',jobFilter:'all',selectedJob:0,modal:null,
  posts:[
    {id:1,initials:'PV',name:'Priya Venkataraman',title:'Product Manager at Infosys',time:'2h',
     content:'Just finished reading "Designing Data-Intensive Applications" — an absolute masterpiece for anyone serious about distributed systems. Highly recommend it! 📚',
     likes:284,comments:42,reposts:17,liked:false,tag:'Software Engineering',color:'#0a66c2'},
    {id:2,initials:'RS',name:'Rahul Sundaram',title:'ML Engineer at Ola Electric',time:'5h',
     content:'Excited to announce that I\'ve just joined Ola Electric as an ML Engineer! 🎉 Looking forward to building intelligent systems that help shape the future of sustainable mobility in India.',
     likes:1023,comments:198,reposts:67,liked:false,tag:'Career Update',color:'#057642'},
    {id:3,initials:'SK',name:'Santhosh Kumar',title:'B.E Student | Aspiring Software Engineer',time:'1d',
     content:'Hot take: Code reviews are 80% about communication and 20% about the code itself. The best engineers I\'ve worked with know how to give feedback that inspires, not deflates. What\'s your approach to code reviews? 💬',
     likes:547,comments:93,reposts:44,liked:true,tag:'Engineering Culture',isMe:true,color:'#7152b3'},
    {id:4,initials:'DA',name:'Divya Anand',title:'Data Scientist at Flipkart',time:'3d',
     content:'📊 After analyzing 10M+ data points across Flipkart\'s recommendation engine, here\'s what I found about user behavior in Tier-2 cities that completely changed our model architecture. A thread 🧵',
     likes:892,comments:156,reposts:102,liked:false,tag:'Data Science',color:'#1d6fa4'},
  ],
  people:[
    {id:2,initials:'PV',name:'Priya Venkataraman',title:'Product Manager at Infosys',location:'Chennai',mutual:3,connected:false,color:'#0a66c2'},
    {id:3,initials:'RS',name:'Rahul Sundaram',title:'ML Engineer at Ola Electric',location:'Bengaluru',mutual:2,connected:true,color:'#057642'},
    {id:4,initials:'MN',name:'Meera Nair',title:'UX Designer at Swiggy',location:'Mumbai',mutual:5,connected:false,color:'#b24020'},
    {id:5,initials:'KB',name:'Karthik Balaji',title:'DevOps Lead at TCS',location:'Hyderabad',mutual:1,connected:true,color:'#c37d16'},
    {id:6,initials:'DA',name:'Divya Anand',title:'Data Scientist at Flipkart',location:'Bengaluru',mutual:4,connected:false,color:'#1d6fa4'},
    {id:7,initials:'SP',name:'Suresh Pillai',title:'Backend Engineer at CRED',location:'Pune',mutual:2,connected:false,color:'#7152b3'},
  ],
  jobs:[
    {id:1,title:'Software Engineer Intern',company:'Zoho Corporation',location:'Chennai, TN • On-site',salary:'₹15K–₹25K/mo',posted:'1 day ago',applicants:342,logo:'ZO',color:'#e63946',tags:['Python','Java','Problem Solving'],easy:true,saved:false,applied:false},
    {id:2,title:'Frontend Developer Intern',company:'Freshworks',location:'Chennai, TN • Hybrid',salary:'₹20K–₹30K/mo',posted:'2 days ago',applicants:189,logo:'FW',color:'#2EB8CE',tags:['React','JavaScript','CSS'],easy:true,saved:true,applied:false},
    {id:3,title:'Full Stack Intern',company:'Razorpay',location:'Bengaluru • Remote',salary:'₹25K–₹35K/mo',posted:'3 days ago',applicants:271,logo:'RP',color:'#5F259F',tags:['Node.js','React','MongoDB'],easy:false,saved:false,applied:false},
    {id:4,title:'Web Developer Intern',company:'PayU India',location:'Gurugram • Remote',salary:'₹15K–₹20K/mo',posted:'5 days ago',applicants:128,logo:'PU',color:'#e07b39',tags:['HTML','CSS','JavaScript'],easy:true,saved:false,applied:false},
    {id:5,title:'Data Analyst Intern',company:'TCS',location:'Chennai, TN • On-site',salary:'₹12K–₹18K/mo',posted:'1 week ago',applicants:415,logo:'TC',color:'#003087',tags:['Python','SQL','Excel'],easy:false,saved:false,applied:false},
  ],
  notifs:[
    {id:1,icon:'👍',text:'Rahul Sundaram liked your post about code reviews',time:'3h',read:false},
    {id:2,icon:'🤝',text:'Meera Nair sent you a connection request',time:'5h',read:false},
    {id:3,icon:'🔍',text:'Your profile appeared in 12 searches this week',time:'1d',read:true},
    {id:4,icon:'💼',text:'Software Engineer Intern at Zoho matches your profile',time:'2d',read:true},
    {id:5,icon:'⭐',text:'Karthik Balaji endorsed your skill in Python',time:'3d',read:true},
  ],
};

const avt=(initials,size=44,color=ME.color,extra='')=>
  `<div class="avatar" style="width:${size}px;height:${size}px;background:${color};font-size:${Math.round(size*.33)}px;${extra}">${initials}</div>`;

function notifCount(){return STATE.notifs.filter(n=>!n.read).length;}
function updateBadge(){const b=document.getElementById('notif-badge');if(!b)return;const c=notifCount();b.textContent=c;b.style.display=c>0?'':'none';}
function switchTab(tab,el){STATE.tab=tab;document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));if(el)el.classList.add('active');render();}
function closeModal(){STATE.modal=null;document.getElementById('modal-root').innerHTML='';}
function getInitials(name){return name.trim().split(' ').map(w=>w[0]?.toUpperCase()||'').slice(0,2).join('')||'SK';}
function handleOverlayClick(e){if(e.target===e.currentTarget)closeModal();}

function openEditModal(){
  STATE._edit={
    name:ME.name,title:ME.title,location:ME.location,college:ME.college,
    degree:ME.degree,period:ME.period,about:ME.about,color:ME.color,
    skills:[...ME.skills],openTo:[...ME.openTo],
    projects:ME.projects.map(p=>({...p,tags:[...p.tags]})),
  };
  renderModal();
}

function renderModal(){
  const e=STATE._edit;
  document.getElementById('modal-root').innerHTML=`
    <div class="modal-overlay" onclick="handleOverlayClick(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div style="font-weight:700;font-size:18px;color:var(--tx)">✏️ Edit Profile</div>
          <button onclick="closeModal()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--txm);line-height:1">×</button>
        </div>
        <div class="modal-body">
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Basic Info</div>
          <div class="field-group">
            <label class="field-label">Full Name *</label>
            <input class="field-input" id="e-name" value="${e.name}" placeholder="Your full name" oninput="STATE._edit.name=this.value;previewAvatar()"/>
          </div>
          <div class="field-group">
            <label class="field-label">Headline / Title *</label>
            <input class="field-input" id="e-title" value="${e.title}" placeholder="e.g. B.E Student | Aspiring Software Engineer" oninput="STATE._edit.title=this.value"/>
          </div>
          <div class="field-group">
            <label class="field-label">Location</label>
            <input class="field-input" id="e-location" value="${e.location}" placeholder="City, State, Country" oninput="STATE._edit.location=this.value"/>
          </div>
          <div class="field-group">
            <label class="field-label">Avatar Color</label>
            <div style="display:flex;align-items:center;gap:12px">
              <div id="avatar-preview" class="avatar" style="width:48px;height:48px;background:${e.color};font-size:16px;border:3px solid #eee">${getInitials(e.name)}</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                ${AVATAR_COLORS.map(c=>`<div class="color-swatch${e.color===c?' active':''}" style="background:${c}" onclick="setAvatarColor('${c}')"></div>`).join('')}
              </div>
            </div>
          </div>
          <hr class="section-divider"/>
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Education</div>
          <div class="field-group">
            <label class="field-label">College / University</label>
            <input class="field-input" id="e-college" value="${e.college}" oninput="STATE._edit.college=this.value"/>
          </div>
          <div class="field-group">
            <label class="field-label">Degree</label>
            <input class="field-input" id="e-degree" value="${e.degree}" oninput="STATE._edit.degree=this.value"/>
          </div>
          <div class="field-group">
            <label class="field-label">Period</label>
            <input class="field-input" id="e-period" value="${e.period}" placeholder="2022 – 2026" oninput="STATE._edit.period=this.value"/>
          </div>
          <hr class="section-divider"/>
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">About</div>
          <div class="field-group">
            <label class="field-label">Bio / Summary</label>
            <textarea class="field-input field-textarea" oninput="STATE._edit.about=this.value">${e.about}</textarea>
          </div>
          <hr class="section-divider"/>
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Skills</div>
          <div class="field-group">
            <label class="field-label">Add a skill</label>
            <div class="skill-input-row">
              <input class="field-input" id="e-skill-input" placeholder="e.g. Node.js" style="flex:1" onkeydown="if(event.key==='Enter'){event.preventDefault();addSkill();}"/>
              <button class="btn btn-primary btn-sm" onclick="addSkill()">+ Add</button>
            </div>
            <div class="skill-tags" id="skills-preview">
              ${e.skills.map((s,i)=>`<span class="tag-li">${s}<button class="skill-tag-remove" onclick="removeSkill(${i})">×</button></span>`).join('')}
            </div>
          </div>
          <hr class="section-divider"/>
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Open To Work</div>
          <div class="field-group">
            <label class="field-label">Job roles you're seeking</label>
            <div class="skill-input-row">
              <input class="field-input" id="e-opento-input" placeholder="e.g. Full Stack Intern" style="flex:1" onkeydown="if(event.key==='Enter'){event.preventDefault();addOpenTo();}"/>
              <button class="btn btn-primary btn-sm" onclick="addOpenTo()">+ Add</button>
            </div>
            <div class="skill-tags" id="opento-preview">
              ${e.openTo.map((r,i)=>`<span class="tag-li">${r}<button class="skill-tag-remove" onclick="removeOpenTo(${i})">×</button></span>`).join('')}
            </div>
          </div>
          <hr class="section-divider"/>
          <div style="font-weight:700;font-size:13px;color:var(--li);margin-bottom:14px;text-transform:uppercase;letter-spacing:.5px">Projects</div>
          <div id="projects-list">${e.projects.map((p,i)=>projectEditCard(p,i)).join('')}</div>
          <button class="btn btn-outline btn-sm" onclick="addProject()" style="margin-top:4px">+ Add Project</button>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary btn-md" onclick="saveProfile()">💾 Save Changes</button>
        </div>
      </div>
    </div>`;
}

function projectEditCard(p,i){
  return `<div class="project-card" id="proj-card-${i}">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div style="font-weight:600;font-size:13px;color:var(--tx)">Project ${i+1}</div>
      <button class="btn btn-danger btn-sm" onclick="removeProject(${i})">🗑 Remove</button>
    </div>
    <div class="field-group"><label class="field-label">Project Name</label>
      <input class="field-input" value="${p.name}" oninput="STATE._edit.projects[${i}].name=this.value"/></div>
    <div class="field-group"><label class="field-label">Period</label>
      <input class="field-input" value="${p.time}" oninput="STATE._edit.projects[${i}].time=this.value"/></div>
    <div class="field-group"><label class="field-label">Description</label>
      <textarea class="field-input field-textarea" style="min-height:70px" oninput="STATE._edit.projects[${i}].desc=this.value">${p.desc}</textarea></div>
    <div class="field-group" style="margin-bottom:0"><label class="field-label">Tech Tags (comma separated)</label>
      <input class="field-input" value="${p.tags.join(', ')}" oninput="STATE._edit.projects[${i}].tags=this.value.split(',').map(t=>t.trim()).filter(Boolean)"/></div>
  </div>`;
}

function previewAvatar(){
  const name=document.getElementById('e-name')?.value||'';
  STATE._edit.name=name;
  const p=document.getElementById('avatar-preview');
  if(p)p.textContent=getInitials(name);
}
function setAvatarColor(color){
  STATE._edit.color=color;
  document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.color-swatch').forEach(s=>{if(s.style.background===color||s.style.backgroundColor===color)s.classList.add('active');});
  const p=document.getElementById('avatar-preview');if(p)p.style.background=color;
}
function addSkill(){const inp=document.getElementById('e-skill-input');const val=inp?.value?.trim();if(!val||STATE._edit.skills.includes(val))return;STATE._edit.skills.push(val);inp.value='';refreshSkillsPreview();}
function removeSkill(i){STATE._edit.skills.splice(i,1);refreshSkillsPreview();}
function refreshSkillsPreview(){const el=document.getElementById('skills-preview');if(!el)return;el.innerHTML=STATE._edit.skills.map((s,i)=>`<span class="tag-li">${s}<button class="skill-tag-remove" onclick="removeSkill(${i})">×</button></span>`).join('');}
function addOpenTo(){const inp=document.getElementById('e-opento-input');const val=inp?.value?.trim();if(!val||STATE._edit.openTo.includes(val))return;STATE._edit.openTo.push(val);inp.value='';refreshOpenToPreview();}
function removeOpenTo(i){STATE._edit.openTo.splice(i,1);refreshOpenToPreview();}
function refreshOpenToPreview(){const el=document.getElementById('opento-preview');if(!el)return;el.innerHTML=STATE._edit.openTo.map((r,i)=>`<span class="tag-li">${r}<button class="skill-tag-remove" onclick="removeOpenTo(${i})">×</button></span>`).join('');}
function addProject(){STATE._edit.projects.push({name:'',desc:'',tags:[],time:''});const list=document.getElementById('projects-list');if(list){const i=STATE._edit.projects.length-1;const div=document.createElement('div');div.innerHTML=projectEditCard(STATE._edit.projects[i],i);list.appendChild(div.firstElementChild);}}
function removeProject(i){STATE._edit.projects.splice(i,1);const list=document.getElementById('projects-list');if(list)list.innerHTML=STATE._edit.projects.map((p,j)=>projectEditCard(p,j)).join('');}

function saveProfile(){
  const e=STATE._edit;
  if(!e.name.trim()){alert('Name cannot be empty!');return;}
  if(!e.title.trim()){alert('Headline cannot be empty!');return;}
  ME.name=e.name.trim();ME.initials=getInitials(e.name);ME.title=e.title.trim();
  ME.location=e.location.trim();ME.college=e.college.trim();ME.degree=e.degree.trim();
  ME.period=e.period.trim();ME.about=e.about.trim();ME.color=e.color;
  ME.skills=[...e.skills];ME.openTo=[...e.openTo];
  ME.projects=e.projects.filter(p=>p.name.trim()).map(p=>({...p,tags:[...p.tags]}));
  STATE.posts.forEach(p=>{if(p.isMe){p.name=ME.name;p.title=ME.title;p.color=ME.color;p.initials=ME.initials;}});
  closeModal();render();
  const toast=document.createElement('div');
  toast.textContent='✅ Profile updated successfully!';
  Object.assign(toast.style,{position:'fixed',bottom:'24px',left:'50%',transform:'translateX(-50%)',background:'#057642',color:'#fff',padding:'12px 24px',borderRadius:'24px',fontWeight:'600',fontSize:'14px',zIndex:'9999',boxShadow:'0 4px 16px rgba(0,0,0,.2)',fontFamily:"'Segoe UI',system-ui,sans-serif"});
  document.body.appendChild(toast);setTimeout(()=>toast.remove(),2800);
}

function renderFeed(){
  const left=`
    <div class="feed-left">
      <div class="card" style="margin-bottom:8px">
        <div style="height:56px;background:${BANNER_GRADIENTS[ME.color]||BANNER_GRADIENTS['#7152b3']};border-radius:8px 8px 0 0"></div>
        <div style="padding:0 16px 14px;margin-top:-28px">
          ${avt(ME.initials,56,ME.color,'border:3px solid #fff;cursor:pointer')}
          <div style="margin-top:6px;cursor:pointer" onclick="switchTab('profile',document.querySelectorAll('.nav-btn')[4])">
            <div style="font-weight:700;font-size:15px;color:var(--tx)">${ME.name}</div>
            <div style="font-size:11px;color:var(--txm);line-height:1.5">${ME.title}</div>
            <div style="font-size:11px;color:var(--txm);margin-top:2px">🎓 ACET</div>
          </div>
          <div style="border-top:1px solid var(--bd);margin-top:10px;padding-top:10px">
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--txm);margin-bottom:4px"><span>Profile viewers</span><span style="font-weight:700;color:var(--li)">24</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--txm)"><span>Post impressions</span><span style="font-weight:700;color:var(--li)">312</span></div>
          </div>
          <div style="border-top:1px solid var(--bd);margin-top:10px;padding-top:10px">
            <div style="font-size:12px;color:var(--gr);font-weight:600">🟢 Open to Internships</div>
          </div>
        </div>
      </div>
      <div class="card"><div style="padding:12px">
        <div style="font-size:12px;font-weight:600;color:var(--txm);margin-bottom:8px">Trending</div>
        ${['#OpenToWork','#WebDevelopment','#React','#Internship2025','#TamilNadu'].map(t=>`<div style="font-size:13px;padding:4px 0;cursor:pointer;color:var(--tx)">${t}</div>`).join('')}
      </div></div>
    </div>`;

  const composer=`
    <div class="card" style="margin-bottom:8px;padding:12px">
      <div style="display:flex;gap:8px;margin-bottom:8px;align-items:flex-start">
        ${avt(ME.initials,40,ME.color)}
        <textarea id="new-post" placeholder="Share something, ${ME.name.split(' ')[0]}…" rows="2"
          style="flex:1;border:1px solid var(--bdm);border-radius:24px;padding:8px 16px;font-size:14px;color:var(--tx);resize:none;outline:none;line-height:1.5;font-family:inherit"
          oninput="STATE.newPost=this.value;document.getElementById('post-btn').style.display=this.value.trim()?'flex':'none'"></textarea>
      </div>
      <div id="post-btn" style="display:none;justify-content:flex-end;margin-bottom:8px">
        <button class="btn btn-primary btn-sm" onclick="submitPost()">Post</button>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">
        ${[['📷','Media'],['📅','Event'],['✍️','Article'],['📊','Poll']].map(([ic,lb])=>`<button style="display:flex;align-items:center;gap:4px;padding:6px 12px;border:none;background:transparent;cursor:pointer;border-radius:4px;font-size:13px;font-weight:600;color:var(--txm);font-family:inherit">${ic} ${lb}</button>`).join('')}
      </div>
    </div>`;

  const postsHtml=STATE.posts.map(p=>`
    <div class="card" style="margin-bottom:8px">
      <div style="padding:12px 16px">
        <div style="display:flex;gap:10px;margin-bottom:10px;align-items:flex-start">
          ${avt(p.initials,44,p.color)}
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:14px;color:var(--tx)">${p.name}${p.isMe?' <span style="font-size:11px;color:var(--gr);font-weight:600">• You</span>':''}</div>
            <div style="font-size:12px;color:var(--txm)">${p.title}</div>
            <div style="font-size:12px;color:var(--txm)">${p.time} • 🌐</div>
          </div>
          <span style="font-size:11px;font-weight:600;padding:2px 8px;background:var(--li-lt);color:var(--li);border-radius:12px;flex-shrink:0">${p.tag}</span>
        </div>
        <p style="font-size:14px;line-height:1.6;color:var(--tx);margin:0 0 12px">${p.content}</p>
        <div style="display:flex;justify-content:space-between;border-top:1px solid var(--bd);padding-top:8px;font-size:13px;color:var(--txm)">
          <span>👍 ${p.likes.toLocaleString()} likes</span><span>${p.comments} comments · ${p.reposts} reposts</span>
        </div>
      </div>
      <div class="post-actions">
        <button class="post-action-btn${p.liked?' liked':''}" onclick="toggleLike(${p.id})">👍 Like</button>
        <button class="post-action-btn">💬 Comment</button>
        <button class="post-action-btn">🔄 Repost</button>
        <button class="post-action-btn">↗️ Send</button>
      </div>
    </div>`).join('');

  const right=`
    <div class="feed-right">
      <div class="card" style="margin-bottom:8px"><div style="padding:12px 16px">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px;color:var(--tx)">People you may know</div>
        ${STATE.people.filter(p=>!p.connected).slice(0,3).map(p=>`
          <div style="display:flex;gap:10px;margin-bottom:12px;align-items:flex-start">
            ${avt(p.initials,40,p.color)}
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:13px;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
              <div style="font-size:11px;color:var(--txm);margin-bottom:4px">${p.title}</div>
              <div style="font-size:11px;color:var(--txm);margin-bottom:6px">👥 ${p.mutual} mutual</div>
              <button class="btn btn-connected btn-sm" onclick="toggleConnect(${p.id})">+ Connect</button>
            </div>
          </div>`).join('')}
        <div style="font-size:13px;color:var(--txm);cursor:pointer;text-align:center" onclick="switchTab('network',document.querySelectorAll('.nav-btn')[1])">View all →</div>
      </div></div>
      <div class="card"><div style="padding:12px 16px">
        <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:var(--tx)">Internships for you</div>
        <div style="font-size:12px;color:var(--gr);font-weight:600;margin-bottom:10px">🎯 Based on your profile</div>
        ${STATE.jobs.filter(j=>j.easy).slice(0,2).map(job=>`
          <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--bd)">
            <div style="font-weight:600;font-size:13px;color:var(--li)">${job.title}</div>
            <div style="font-size:12px;color:var(--tx)">${job.company}</div>
            <div style="font-size:11px;color:var(--txm)">${job.location}</div>
            <span style="font-size:11px;color:var(--gr);font-weight:600">✓ Easy Apply</span>
          </div>`).join('')}
        <div style="font-size:13px;color:var(--txm);cursor:pointer;text-align:center" onclick="switchTab('jobs',document.querySelectorAll('.nav-btn')[2])">View all →</div>
      </div></div>
    </div>`;

  return `<div class="feed-layout">${left}<div class="feed-center">${composer}${postsHtml}</div>${right}</div>`;
}

function toggleLike(id){const p=STATE.posts.find(x=>x.id===id);if(!p)return;p.liked=!p.liked;p.likes+=p.liked?1:-1;render();}
function submitPost(){const val=document.getElementById('new-post')?.value?.trim();if(!val)return;STATE.posts.unshift({id:Date.now(),initials:ME.initials,name:ME.name,title:ME.title,time:'Just now',content:val,likes:0,comments:0,reposts:0,liked:false,tag:'My Post',isMe:true,color:ME.color});render();}

function renderNetwork(){
  const filtered=STATE.netFilter==='connected'?STATE.people.filter(p=>p.connected):STATE.netFilter==='pending'?STATE.people.filter(p=>!p.connected):STATE.people;
  return `<div style="display:flex;gap:24px">
    <div style="width:220px;flex-shrink:0"><div class="card"><div style="padding:16px">
      <div style="font-weight:700;font-size:15px;color:var(--tx);margin-bottom:12px">My Network</div>
      ${[['👥','Connections',87],['📡','Following',31],['🏢','Groups',2],['📅','Events',1],['📰','Newsletters',5]].map(([ic,lb,ct])=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-size:14px;color:var(--tx);border-bottom:1px solid var(--bd)"><span>${ic} ${lb}</span><span style="font-weight:700;color:var(--li)">${ct}</span></div>`).join('')}
    </div></div></div>
    <div style="flex:1">
      <div style="display:flex;gap:8px;margin-bottom:16px">
        ${['all','connected','pending'].map(f=>`<button class="btn btn-${STATE.netFilter===f?'primary':'outline'} btn-sm" onclick="setNetFilter('${f}')">${f==='all'?'All':f==='connected'?'Connected':'Pending'}</button>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px">
        ${filtered.map(p=>`
          <div class="card" style="padding:16px;text-align:center">
            <div style="display:flex;justify-content:center;margin-bottom:8px">${avt(p.initials,64,p.color)}</div>
            <div style="font-weight:700;font-size:14px;color:var(--tx);margin-bottom:2px">${p.name}</div>
            <div style="font-size:12px;color:var(--txm);margin-bottom:4px;line-height:1.4">${p.title}</div>
            <div style="font-size:11px;color:var(--txm);margin-bottom:12px">👥 ${p.mutual} mutual</div>
            <button class="btn btn-${p.connected?'connected':'outline'} btn-sm" style="width:100%" onclick="toggleConnect(${p.id})">${p.connected?'✓ Connected':'+ Connect'}</button>
          </div>`).join('')}
      </div>
    </div>
  </div>`;}
function setNetFilter(f){STATE.netFilter=f;render();}
function toggleConnect(id){const p=STATE.people.find(x=>x.id===id);if(p)p.connected=!p.connected;render();}

function renderJobs(){
  const filtered=STATE.jobFilter==='saved'?STATE.jobs.filter(j=>j.saved):STATE.jobFilter==='easy'?STATE.jobs.filter(j=>j.easy):STATE.jobs;
  const sel=STATE.jobs[STATE.selectedJob]||STATE.jobs[0];
  return `<div>
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;align-items:center">
      <span style="font-weight:700;font-size:16px;color:var(--tx);margin-right:8px">Internships & Jobs</span>
      ${['all','easy','saved'].map(f=>`<button class="btn btn-${STATE.jobFilter===f?'primary':'outline'} btn-sm" onclick="setJobFilter('${f}')">${f==='all'?'All':f==='easy'?'Easy Apply':'Saved'}</button>`).join('')}
      <span style="margin-left:auto;font-size:12px;color:var(--txm)">${filtered.length} results</span>
    </div>
    <div style="display:flex;gap:16px">
      <div style="width:360px;flex-shrink:0">
        ${filtered.map(job=>`
          <div class="job-list-item${job===sel?' selected':''}" onclick="selectJob(${STATE.jobs.indexOf(job)})">
            <div style="display:flex;gap:10px">
              <div style="width:44px;height:44px;border-radius:8px;flex-shrink:0;background:${job.color};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px">${job.logo}</div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px;color:var(--li);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${job.title}</div>
                <div style="font-size:13px;color:var(--tx)">${job.company}</div>
                <div style="font-size:11px;color:var(--txm)">${job.location}</div>
                <div style="display:flex;gap:8px;align-items:center;margin-top:4px">
                  <span style="font-size:11px;color:var(--txm)">${job.posted}</span>
                  ${job.easy?'<span style="font-size:11px;color:var(--gr);font-weight:600">✓ Easy Apply</span>':''}
                  ${job.saved?'<span style="font-size:11px;color:var(--or)">🔖 Saved</span>':''}
                </div>
              </div>
            </div>
          </div>`).join('')}
      </div>
      <div class="card" style="flex:1;padding:24px;overflow-y:auto">
        <div style="display:flex;gap:16px;margin-bottom:20px">
          <div style="width:64px;height:64px;border-radius:8px;flex-shrink:0;background:${sel.color};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px">${sel.logo}</div>
          <div><div style="font-weight:700;font-size:20px;color:var(--tx)">${sel.title}</div>
          <div style="font-size:15px;color:var(--tx)">${sel.company} · ${sel.location}</div>
          <div style="font-size:13px;color:var(--txm);margin-top:2px">${sel.applicants} applicants · ${sel.posted}</div></div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">
          ${sel.applied?`<button class="btn btn-connected btn-md">✓ Applied</button>`:`<button class="btn btn-primary btn-md" onclick="applyJob(${STATE.jobs.indexOf(sel)})">${sel.easy?'⚡ Easy Apply':'Apply Now'}</button>`}
          <button class="btn btn-${sel.saved?'connected':'outline'} btn-md" onclick="saveJob(${STATE.jobs.indexOf(sel)})">${sel.saved?'🔖 Saved':'🔖 Save'}</button>
        </div>
        <div style="margin-bottom:16px"><div style="font-weight:700;font-size:15px;margin-bottom:8px;color:var(--tx)">Stipend</div><span class="tag-gr">💰 ${sel.salary}</span></div>
        <div style="margin-bottom:16px"><div style="font-weight:700;font-size:15px;margin-bottom:8px;color:var(--tx)">Skills</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">${sel.tags.map(t=>`<span class="tag-li">${t}</span>`).join('')}</div></div>
        <div><div style="font-weight:700;font-size:15px;margin-bottom:8px;color:var(--tx)">About the role</div>
          <ul style="font-size:14px;color:var(--tx);line-height:2;padding-left:20px">
            <li>Assist in development and testing</li><li>Collaborate with cross-functional teams</li>
            <li>Currently pursuing B.E./B.Tech (CS/IT preferred)</li>
            ${sel.tags.map(s=>`<li>Knowledge of ${s}</li>`).join('')}
          </ul></div>
      </div>
    </div>
  </div>`;}
function setJobFilter(f){STATE.jobFilter=f;render();}
function selectJob(i){STATE.selectedJob=i;render();}
function applyJob(i){STATE.jobs[i].applied=true;render();}
function saveJob(i){STATE.jobs[i].saved=!STATE.jobs[i].saved;render();}

function renderNotifs(){
  return `<div style="max-width:700px;margin:0 auto">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <h2 style="margin:0;font-size:20px;font-weight:700;color:var(--tx)">Notifications</h2>
      <button class="btn btn-ghost btn-sm" onclick="markAllRead()">Mark all as read</button>
    </div>
    <div class="card">
      ${STATE.notifs.map(n=>`
        <div class="notif-item${n.read?'':' unread'}" onclick="markRead(${n.id})">
          <span style="font-size:24px">${n.icon}</span>
          <div style="flex:1">
            <div style="font-size:14px;color:var(--tx);font-weight:${n.read?400:600}">${n.text}</div>
            <div style="font-size:12px;color:var(--txm);margin-top:2px">${n.time} ago</div>
          </div>
          ${!n.read?`<div style="width:10px;height:10px;border-radius:50%;background:var(--li);flex-shrink:0"></div>`:''}
        </div>`).join('')}
    </div>
  </div>`;}
function markAllRead(){STATE.notifs.forEach(n=>n.read=true);updateBadge();render();}
function markRead(id){const n=STATE.notifs.find(x=>x.id===id);if(n&&!n.read){n.read=true;updateBadge();render();}}

function renderProfile(){
  const bg=BANNER_GRADIENTS[ME.color]||BANNER_GRADIENTS['#7152b3'];
  return `<div style="max-width:860px;margin:0 auto">
    <div class="card" style="margin-bottom:8px">
      <div class="profile-banner" style="background:${bg}"></div>
      <div style="padding:0 24px 20px">
        <div style="margin-top:-44px;margin-bottom:12px">${avt(ME.initials,100,ME.color,'border:4px solid #fff')}</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
          <div>
            <h1 style="margin:0 0 2px;font-size:24px;font-weight:700;color:var(--tx)">${ME.name}</h1>
            <div style="font-size:15px;color:var(--tx);margin-bottom:2px">${ME.title}</div>
            <div style="font-size:13px;color:var(--txm);margin-bottom:4px">${ME.college}</div>
            <div style="font-size:13px;color:var(--txm);margin-bottom:6px">📍 ${ME.location}</div>
            <div style="font-size:13px;color:var(--li);font-weight:600;margin-bottom:8px">👥 ${ME.connections} connections</div>
            <span style="background:#e8f5e9;color:var(--gr);border-radius:16px;font-size:12px;font-weight:600;padding:3px 10px">🟢 Open to Internships</span>
          </div>
          <button class="btn btn-primary btn-md" onclick="openEditModal()">✏️ Edit Profile</button>
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
          <div style="background:#f3f0ff;border-radius:8px;padding:6px 14px;font-size:12px;color:#7152b3;font-weight:600">🎓 ${ME.college}</div>
          <div style="background:var(--li-lt);border-radius:8px;padding:6px 14px;font-size:12px;color:var(--li);font-weight:600">💻 ${ME.degree} · ${ME.period}</div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-bottom:8px;border-left:4px solid var(--gr)">
      <div style="padding:14px 20px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:700;font-size:14px;color:var(--gr)">🎯 Open to Work</div>
          <button class="btn btn-outline btn-sm" onclick="openEditModal()">✏️ Edit</button>
        </div>
        <div style="font-size:13px;color:var(--tx);margin:8px 0">Actively looking for:</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${ME.openTo.length?ME.openTo.map(r=>`<span class="tag-li" style="font-size:12px">${r}</span>`).join(''):'<span style="font-size:13px;color:var(--txm)">No roles added yet</span>'}
        </div>
      </div>
    </div>
    <div class="card" style="margin-bottom:8px"><div style="padding:16px 24px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-weight:700;font-size:16px;color:var(--tx)">About</div>
        <button class="btn btn-outline btn-sm" onclick="openEditModal()">✏️ Edit</button>
      </div>
      <p style="font-size:14px;color:var(--tx);line-height:1.7;margin:0">${ME.about||'<span style="color:var(--txm)">No bio yet.</span>'}</p>
    </div></div>
    <div class="card" style="margin-bottom:8px"><div style="padding:16px 24px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-weight:700;font-size:16px;color:var(--tx)">Education</div>
        <button class="btn btn-outline btn-sm" onclick="openEditModal()">✏️ Edit</button>
      </div>
      <div style="display:flex;gap:14px">
        <div style="width:56px;height:56px;border-radius:8px;flex-shrink:0;background:#f3f0ff;display:flex;align-items:center;justify-content:center;font-weight:700;color:#7152b3;font-size:11px;text-align:center;line-height:1.2;padding:4px">ACET</div>
        <div>
          <div style="font-weight:700;font-size:15px;color:var(--tx)">${ME.college}</div>
          <div style="font-size:13px;color:var(--tx)">${ME.degree}</div>
          <div style="font-size:12px;color:var(--txm)">${ME.period}</div>
        </div>
      </div>
    </div></div>
    <div class="card" style="margin-bottom:8px"><div style="padding:16px 24px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-weight:700;font-size:16px;color:var(--tx)">Skills</div>
        <button class="btn btn-outline btn-sm" onclick="openEditModal()">✏️ Edit</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${ME.skills.length?ME.skills.map(s=>`<span class="tag-li">${s}</span>`).join(''):'<span style="font-size:13px;color:var(--txm)">No skills yet.</span>'}
      </div>
    </div></div>
    <div class="card"><div style="padding:16px 24px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-weight:700;font-size:16px;color:var(--tx)">Projects</div>
        <button class="btn btn-outline btn-sm" onclick="openEditModal()">✏️ Edit</button>
      </div>
      ${ME.projects.length?ME.projects.map((proj,i,arr)=>`
        <div style="${i<arr.length-1?'margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--bd)':''}">
          <div style="font-weight:700;font-size:14px;color:var(--tx);margin-bottom:2px">${proj.name}</div>
          <div style="font-size:12px;color:var(--txm);margin-bottom:6px">${proj.time}</div>
          <p style="font-size:13px;color:var(--tx);line-height:1.6;margin:0 0 8px">${proj.desc}</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap">${proj.tags.map(t=>`<span class="tag-li" style="font-size:12px">${t}</span>`).join('')}</div>
        </div>`).join(''):'<span style="font-size:13px;color:var(--txm)">No projects yet.</span>'}
    </div></div>
  </div>`;
}

function render(){
  const el=document.getElementById('main');
  if(STATE.tab==='feed')         el.innerHTML=renderFeed();
  else if(STATE.tab==='network') el.innerHTML=renderNetwork();
  else if(STATE.tab==='jobs')    el.innerHTML=renderJobs();
  else if(STATE.tab==='notifs')  el.innerHTML=renderNotifs();
  else if(STATE.tab==='profile') el.innerHTML=renderProfile();
  updateBadge();
}
render();
