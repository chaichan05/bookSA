function openSidebar() {
    document.getElementById('sidebarPanel').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}
function closeSidebar() {
    document.getElementById('sidebarPanel').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}