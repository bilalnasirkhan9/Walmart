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