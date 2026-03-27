const sections=['overview','postjob','jobs','applicants','kanban'];
const titles={overview:'Ikhtisar Perusahaan',postjob:'Posting Lowongan',jobs:'Daftar Lowongan',applicants:'Pelamar',kanban:'Pipeline Rekrutmen'};
function showSection(id,el){
  sections.forEach(s=>document.getElementById('sec-'+s)?.classList.remove('active'));
  document.getElementById('sec-'+id)?.classList.add('active');
  document.getElementById('pageTitle').textContent=titles[id]||id;
  document.querySelectorAll('.sidebar-item').forEach(e=>e.classList.remove('active'));
  if(el)el.classList.add('active');
}
let sbOpen=true;
function toggleSidebar(){const sb=document.getElementById('sidebar');sbOpen=!sbOpen;sb.style.width=sbOpen?'256px':'0px';sb.style.overflow=sbOpen?'auto':'hidden';}
function openCandidateModal(name,pos,match,skills){
  const initials=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('candAvatar').textContent=initials;
  document.getElementById('candName').textContent=name;
  document.getElementById('candPos').textContent=pos;
  document.getElementById('candMatch').textContent=match+' Match';
  document.getElementById('candScore').textContent=match;
  const skillsEl=document.getElementById('candSkills');
  skillsEl.innerHTML='';
  skills.split(', ').forEach(s=>{
    const span=document.createElement('span');
    span.className='badge badge-blue';
    span.textContent=s;
    skillsEl.appendChild(span);
  });
  document.getElementById('candidateModal').classList.remove('hidden');
}
function closeModal(){document.getElementById('candidateModal').classList.add('hidden');}
function submitJob(){alert('✅ Lowongan dipublikasikan! AI sedang mencocokkan kandidat.\n\nDiperkirakan 18-24 pelamar berkualitas akan diberitahu dalam 30 menit.');}