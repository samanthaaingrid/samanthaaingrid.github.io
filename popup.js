function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';  
    

    setTimeout(function() {
        popup.style.display = 'none'; 
    }, 1000); 
}


document.querySelectorAll('.unavail').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        openPopup(); 
    });
});