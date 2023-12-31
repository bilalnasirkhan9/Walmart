let addtoggle = document.getElementById('toggle-address')
let down = document.getElementById('drop-down-address')
let isDropdownVisible = false;


function getaddressystem() {
    if (!isDropdownVisible) {
        down.style.display = 'block'; // Display the dropdown menu
    } else {
        down.style.display = 'none'; // Hide the dropdown menu
    }
    isDropdownVisible = !isDropdownVisible; // Toggle the state
}

const mainMoveLeft = document.getElementById('layout-container')
let menuToggle = document.getElementById('menu-toggle')
let menuToggleClose = document.getElementById('menu-toggle-close')
let menuToggleCont = document.getElementById('toggle-menu-container')
let toggleItems = document.getElementById('toggle-items')



function toggleclick(){
    if (!isDropdownVisible) {
            menuToggleCont.style.width = '100vw'
            toggleItems.style.display = 'block'
            toggleItems.style.opacity = '1'
        
    } else {
        menuToggleCont.style.width = '0vw'
        toggleItems.style.display = 'none'
        toggleItems.style.opacity = '0'

    }
    isDropdownVisible = !isDropdownVisible; // Toggle the state
}
