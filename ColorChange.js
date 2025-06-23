let hue = 0;

function changeBackground() {
    document.body.style.color = `hsl(${hue}, 70%, 50%)`;
    
    hue++;
    if (hue > 360) hue = 0; 
    }

setInterval(changeBackground, 30);