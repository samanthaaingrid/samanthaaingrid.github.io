
  const canvas = document.getElementById("progressCanvas");
  const ctx = canvas.getContext("2d");

  const radius = 60;
  const lineWidth = 14;

  const progressbar = document.querySelector(".progressbar");
  let targetPercent1 = parseInt(progressbar.dataset.percent1, 10);
  let targetPercent2 = parseInt(progressbar.dataset.percent2, 10);
  const spacing = 8; 
  const canvasWidth = (radius + lineWidth) * 2 * 2 + spacing; 
  const canvasHeight = (radius + lineWidth) * 2 + 60; // Add extra bottom padding

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const centerY = canvas.height / 2;
  const centerX1 = (radius + lineWidth) - 4; 
  const centerX2 = centerX1 + (radius + lineWidth) * 2 + spacing; 
  let currentPercent1 = 0;
  let currentPercent2 = 0;

  const fatIcon = new Image();
  fatIcon.src = 'IMAGES/Avocado.png'; // example: relative path or URL to fat icon PNG
  const sugarIcon = new Image();
  sugarIcon.src = 'IMAGES/candy.png';


  // Only start animation once images are loaded
  let imagesLoaded = 0;
  function checkStart() {
    imagesLoaded++;
    if(imagesLoaded === 2) {
      animate();
    }
  }
  fatIcon.onload = checkStart;
  sugarIcon.onload = checkStart;

  function drawBackground(cx) {
    ctx.beginPath();
    ctx.arc(cx, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#eee";
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  // Add iconWidth and iconHeight parameters to allow different sizes per icon
  function drawProgress(cx, percent, circleColor, textColor, label, icon, iconWidth, iconHeight) {
    const startAngle = -0.5 * Math.PI;
    const endAngle = startAngle + (2 * Math.PI * percent / 100);
  
    ctx.beginPath();
    ctx.arc(cx, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = circleColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = "bold 20px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${Math.round(percent)}%`, cx, centerY);
    
    // Draw label and icon below the progress circle
    const labelY = centerY + radius + 32;
    ctx.fillStyle = "#000"; 
    ctx.font = "14px 'DM Sans', sans-serif";
    ctx.textBaseline = "middle";

    // Approximate total width for icon + spacing + text 
    const totalWidth = iconWidth + 6 + ctx.measureText(label).width; 
    const startX = cx - totalWidth / 2;

    if (icon) {
      // Draw icon with individual width and height, vertically centered with label text.
      ctx.drawImage(icon, startX, labelY - iconHeight/2, iconWidth, iconHeight);
    }

    // Draw label text to the right of icon with a small margin (6px)
    ctx.textAlign = "left";
    ctx.fillText(label, startX + iconWidth + 6, labelY);
  }
  
  function drawBoth() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    drawBackground(centerX1);
    drawBackground(centerX2);
  
    // Pass separate sizes for icons
    drawProgress(centerX1, currentPercent1, "#026247", "#026247", "Fat", fatIcon, 24, 20);
    drawProgress(centerX2, currentPercent2, "#FFA4BC", "#026247", "Sugar", sugarIcon, 19, 23);
  }      
  

  function animate() {
    let done1 = false;
    let done2 = false;

    function step() {
      if (currentPercent1 < targetPercent1) {
        currentPercent1 += 1;
      } else {
        done1 = true;
      }

      if (currentPercent2 < targetPercent2) {
        currentPercent2 += 1;
      } else {
        done2 = true;
      }

      drawBoth();

      if (!done1 || !done2) {
        requestAnimationFrame(step);
      }
    }

    step();
  }

