const buttonMenu = document.querySelector('.btn-menu');
const dropdownLink = document.querySelectorAll('.dropdown-link');
const navigationWrapper = document.querySelector('.nav-overlay');

buttonMenu.addEventListener('click', function () {
    if (buttonMenu.classList.contains('btn-menu--open')) {
        buttonMenu.classList.replace('btn-menu--open', 'btn-menu--close');
        navigationWrapper.classList.add('nav-overlay--open');
    } else {
        navigationWrapper.classList.remove('nav-overlay--open');
        buttonMenu.classList.replace('btn-menu--close', 'btn-menu--open');
    }
});

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', function () {
        dropdownLink[i].classList.toggle('dropdown--active');
    })
}