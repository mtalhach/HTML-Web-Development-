const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbatlinks = document.getElementsByClassName('navbar_links')[0]
toggleButton.addEventListener('click', () => {
    navbatlinks.classList.toggle('active')
})