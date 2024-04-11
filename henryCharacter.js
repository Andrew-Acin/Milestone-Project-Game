
function image(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}

function henryCharacter (x, y) {
    const element = image('assets/henryCharacter-static.png')
    element.style.zIndex = 1;


    function henryDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/henryCharacter-static.png`
        }
        if (direction === 'west') {
            element.src = `assets/henryCharacter-walking-west-GIF.gif`
        }
        if (direction === 'north') {
            element.src = `assets/henryCharacter-walking-north-GIF.gif`
        }
        if (direction === 'east') {
            element.src = `assets/henryCharacter-walking-east-GIF.gif`
        }
        if (direction === 'south') {
            element.src = `assets/henryCharacter-walking-south-GIF.gif`
        }
    }
    function moveHenryCharacter(direction) {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    return {
        element: element,
        moveCharacter: moveHenryCharacter,
        changeDirection: henryDirectionChange,
    };
  
}


