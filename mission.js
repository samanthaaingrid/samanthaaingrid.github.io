window.onload = function () {
    move("missionBar", 66);
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
    }, 10);
  }
  