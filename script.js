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
            menuToggleCont.style.width = '320px'
            toggleItems.style.display = 'block'
            toggleItems.style.opacity = '1'
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        
    } else {
        menuToggleCont.style.width = '0px'
        toggleItems.style.display = 'none'
        toggleItems.style.opacity = '0'
        document.body.style.position = '';
        document.body.style.width = '';

    }
    isDropdownVisible = !isDropdownVisible; // Toggle the state
}
