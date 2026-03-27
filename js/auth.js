function switchTab(tab){
  const lf=document.getElementById('loginForm'),rf=document.getElementById('registerForm');
  const lt=document.getElementById('loginTab'),rt=document.getElementById('registerTab');
  if(tab==='login'){
    lf.classList.remove('hidden');lf.classList.add('fade-in');
    rf.classList.add('hidden');
    lt.classList.remove('inactive-tab');lt.classList.add('active-tab');
    rt.classList.remove('active-tab');rt.classList.add('inactive-tab');
  }else{
    rf.classList.remove('hidden');rf.classList.add('fade-in');
    lf.classList.add('hidden');
    rt.classList.remove('inactive-tab');rt.classList.add('active-tab');
    lt.classList.remove('active-tab');lt.classList.add('inactive-tab');
  }
}
function selectRole(r){
  ['rc-student','rc-teacher','rc-company'].forEach(id=>document.getElementById(id).classList.remove('role-selected'));
  document.getElementById('rc-'+r).classList.add('role-selected');
}