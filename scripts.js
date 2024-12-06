function showMenu() {
    const menu = document.getElementById("webMenu")
    const close = document.getElementById("closeMenu")
    const show = document.getElementById("showMenu")
    menu.style.display = 'flex';
    close.style.display = 'block';
    show.style.display = 'none';
}

function closeMenu() {
    const menu = document.getElementById("webMenu")
    const close = document.getElementById("closeMenu")
    const show = document.getElementById("showMenu")
    menu.style.display = 'none';
    close.style.display = 'none';
    show.style.display = 'block';
}