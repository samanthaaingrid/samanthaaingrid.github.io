window.onload = function () {
    move("fatBar", 13);
    move("sugarBar", 2.35);
  };
  
  function move(barId, target) {
    const elem = document.getElementById(barId);
    let width = 1;
    const id = setInterval(() => {
      if (width >= target) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }, 30);
  }
  