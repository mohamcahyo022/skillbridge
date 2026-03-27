const sections=['overview','students','internship','statistics','alerts'];
const titles={overview:'Teacher Overview',students:'Student Monitoring',internship:'Internship Tracking',statistics:'Statistics & Reports',alerts:'Alerts & Notifications'};
function showSection(id,el){
  sections.forEach(s=>document.getElementById('sec-'+s)?.classList.remove('active'));
  document.getElementById('sec-'+id)?.classList.add('active');
  document.getElementById('pageTitle').textContent=titles[id]||id;
  document.querySelectorAll('.sidebar-item').forEach(e=>e.classList.remove('active'));
  if(el)el.classList.add('active');
}
let sbOpen=true;
function toggleSidebar(){const sb=document.getElementById('sidebar');sbOpen=!sbOpen;sb.style.width=sbOpen?'256px':'0px';sb.style.overflow=sbOpen?'auto':'hidden';}
function openStudentModal(name,company,match){
  document.getElementById('modalInitials').textContent=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('modalName').textContent=name;
  document.getElementById('modalCompanyLabel').textContent='Internship @ '+company;
  document.getElementById('modalMatch').textContent='AI: '+match;
  document.getElementById('studentModal').classList.remove('hidden');
}
function closeModal(){document.getElementById('studentModal').classList.add('hidden');}