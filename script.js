const toggleBtn = document.getElementById('toggleBtn');
const menuToggle = document.getElementById('menuToggle');
const submenu = document.getElementById('submenu');


// sidebar open / close
toggleBtn.addEventListener('click', () => {
sidebar.classList.toggle('closed');
});


// submenu collapse
menuToggle.addEventListener('click', () => {
submenu.classList.toggle('open');
});