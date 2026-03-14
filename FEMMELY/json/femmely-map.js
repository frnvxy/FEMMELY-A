function selectMode(mode) {
    
    const dot = document.getElementById('slidingDot');
    const safeText = document.querySelector('.safe-text');
    const careText = document.querySelector('.care-text');
    const modeColorPill = document.getElementById('modeColorPill');
    const fmCard = document.getElementById('fmCard');

    //mini toggle elements
    const miniDot = document.getElementById('mini-slidingDot');
    const miniSafeText = document.querySelector('.mini-safe-text'); 
    const miniCareText = document.querySelector('.mini-care-text');
    const miniModeColorPill = document.getElementById('miniColorPill');
    const fmTitle = document.getElementById('fmTitle');


    
    if (mode === 'safe') {
        dot.className = 'toggle-dot dot-left'; // Move dot left
        safeText.classList.remove('text-inactive'); 
        safeText.classList.add('text-active1'); 
        careText.classList.remove('text-active2'); 
        careText.classList.add('text-inactive');  
        modeColorPill.style.backgroundColor = '#FF66C4'; // Change pill color to pink
        fmCard.style.background = 'linear-gradient(90deg, #ff71be, #d34893, #ff71be)'; 
        miniDot.className = 'mini-toggle-dot mini-dot-left'; // Move mini dot left
        miniSafeText.classList.remove('mini-text-inactive'); 
        miniSafeText.classList.add('mini-text-active1'); 
        miniCareText.classList.remove('mini-text-active2'); 
        miniCareText.classList.add('mini-text-inactive');  
        miniModeColorPill.style.backgroundColor = '#FF66C4'; // Change mini pill color to pink
        fmTitle.textContent = 'Femmely Map > Fem-safe Mode'; 
        fmModeSelectCard.style.borderColor = '#ff66c4';
        window.location.href = "/map/map.html";
        
    } else if (mode === 'care') {
        dot.className = 'toggle-dot dot-right'; // Move dot right
        careText.classList.remove('text-inactive'); 
        careText.classList.add('text-active2'); 
        safeText.classList.remove('text-active1');  
        safeText.classList.add('text-inactive'); 
        modeColorPill.style.backgroundColor = '#a06cd5'; // Change pill color to light pink
        fmCard.style.background = 'linear-gradient(90deg, #a06cd5, #593d76, #a06cd5)';
        miniDot.className = 'mini-toggle-dot mini-dot-right'; // Move mini dot right
        miniCareText.classList.remove('mini-text-inactive');
        miniCareText.classList.add('mini-text-active2');
        miniSafeText.classList.remove('mini-text-active1');
        miniSafeText.classList.add('mini-text-inactive');
        miniModeColorPill.style.backgroundColor = '#a06cd5'; // Change mini pill color to light pink
        fmTitle.textContent = 'Femmely Map > Fem-care Mode';
        fmModeSelectCard.style.borderColor = '#a06cd5';
        // window.location.href = "/map/map.html"; //
    }
}