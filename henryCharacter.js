function image(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}

function henryCharacter(x, y) {
    const element = image('assets/henryCharacter-static.png');
    element.style.zIndex = 1;
    resizeGIF(element, 30,);
    element.style.position = 'absolute'; // Ensure the character appears on top of other elements

    const minX = 260;
    const maxX = 1430;
    const minY = 110;
    const maxY = 790;

    function moveCharacter(direction) {
        if (direction === null) {
            element, src =`assets/henryCharacter-static.png`;
            resizeGIF(element, 30,);
        }
        if (direction === 'west') {
            element.src = `assets/henryCharacter-walking-west-GIF.gif`;
            resizeGIF(element, 30, );
            x -= 10; // Adjust the movement distance as needed
        }
        if (direction === 'north') {
            element.src = `assets/henryCharacter-walking-north-GIF.gif`;
            resizeGIF(element, 30,);
            y -= 10;
        }
        if (direction === 'east') {
            element.src = `assets/henryCharacter-walking-east-GIF.gif`;
            resizeGIF(element, 30,);
            x += 10;
        }
        if (direction === 'south') {
            element.src = `assets/henryCharacter-walking-south-GIF.gif`;
            resizeGIF(element, 30,);
            y += 10;
        }

        if (x < minX) {
            x = minX; // Reset x position to the minimum x coordinate
        }
        if (x + element.offsetWidth > maxX) {
            x = maxX - element.offsetWidth; // Reset x position to ensure the entire character stays within the map
        }
        if (y < minY) {
            y = minY; // Reset y position to the minimum y coordinate
        }
        if (y + element.offsetHeight > maxY) {
            y = maxY - element.offsetHeight; // Reset y position to ensure the entire character stays within the map
        }
        
        element.style.left = x + 'px';
        element.style.top = y + 'px';
    }

    function resizeGIF(element, width, height) {
        element.style.width = width + 'px';
        element.style.height = height + 'px';
    }

    return {
        element: element,
        moveCharacter: moveCharacter,
    };
}
