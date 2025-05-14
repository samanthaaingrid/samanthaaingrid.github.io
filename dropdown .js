function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownBtn = document.getElementById("dropdownBtn");

    
    dropdownContent.classList.toggle("show");


    dropdownBtn.classList.toggle("active");
}

function selectGender(event, gender) {
    event.preventDefault(); 

    const dropdownBtn = document.getElementById("dropdownBtn");

   
    dropdownBtn.innerText = gender;

    
    toggleDropdown();
}


window.onclick = function(event) {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownContent = document.getElementById("dropdown-content");

    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
        dropdownBtn.classList.remove("active");
    }
}
