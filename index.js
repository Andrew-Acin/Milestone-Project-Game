console.log('Hi Henry')


const mapArea = document.querySelector('.map-area');

// Check if the mapArea is found before proceeding
if (mapArea) {
    const henry = henryCharacter(100, 100); // Create the henry object

    // Check if henryCharacter function returns a valid object
    if (henry && henry.element) {
        mapArea.appendChild(henry.element);

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                henry.moveCharacter('west'); // Adjust values as needed
            }
            if (e.key === 'ArrowUp') {
                henry.moveCharacter('north');
            }
            if (e.key === 'ArrowRight') {
                henry.moveCharacter('east');
            }
            if (e.key === 'ArrowDown') {
                henry.moveCharacter('south');
            }
        });
    } else {
        console.error("Error: Unable to create henry object.");
    }
} else {
    console.error("Error: Map area not found.");
}
