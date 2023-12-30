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
    if (!isDropdownVisible) {;
            menuToggleCont.style.width = '200px'
            mainMoveLeft.style.marginLeft = '200px' // Display the dropdown menu
            toggleItems.style.display = 'block'
            toggleItems.style.opacity = '1'
    } else {
        menuToggleCont.style.width = '0px'
        mainMoveLeft.style.marginLeft = '0px' // Hide the dropdown menu
        toggleItems.style.display = 'none'
        toggleItems.style.opacity = '0'
    }
    isDropdownVisible = !isDropdownVisible; // Toggle the state
}

// function helo() {
//     if(isDropdownVisible){
//         menuToggleCont.style.width = '0px'
//         mainMoveLeft.style.marginLeft = '0px'
//     }else{
        

//     }

    
// }