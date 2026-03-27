const sections = ['dashboard','profile','ai','jobs','applications','interview','monitoring','feedback'];
const sectionTitles = {dashboard:'Dasbor',profile:'Profil & CV',ai:'Rekomendasi AI',jobs:'Lowongan & Magang',applications:'Lamaran Saya',interview:'Persiapan Wawancara',monitoring:'Monitoring Magang',feedback:'Umpan Balik'};

function showSection(id, clickedEl) {
  sections.forEach(s => {
    const el = document.getElementById('sec-'+s);
    if(el) el.classList.remove('active');
  });
  document.getElementById('sec-'+id)?.classList.add('active');
  document.getElementById('pageTitle').textContent = sectionTitles[id] || id;
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  if(clickedEl) clickedEl.classList.add('active');
}

let sidebarOpen = true;
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  sidebarOpen = !sidebarOpen;
  sb.style.width = sidebarOpen ? '256px' : '0px';
  sb.style.overflow = sidebarOpen ? 'auto' : 'hidden';
}

function openJobModal(title,company,loc,dur,match) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalCompany').textContent = company + ' • ' + loc;
  document.getElementById('jobModal').classList.remove('hidden');
}
function openInterviewModal() { document.getElementById('interviewModal').classList.remove('hidden'); }
function openSkillModal() { document.getElementById('skillModal').classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function applyJob(btn) { btn.textContent = '✓ Terkirim!'; btn.style.background = 'linear-gradient(135deg,#10b981,#059669)'; btn.disabled = true; }
function applyToCompany() { closeModal('jobModal'); alert('Lamaran terkirim! Cek tab Lamaran.'); }
function setRating(id, val) {
  const stars = document.getElementById(id).children;
  for(let i=0;i<stars.length;i++){ stars[i].style.color = i<val?'#f59e0b':'#374151'; }
}