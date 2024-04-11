console.log('Hi Henry');

const mapArea = document.querySelector('.map-area');

if (mapArea) {
    const henry = henryCharacter(100, 100);
    if (henry && henry.element) {
        mapArea.appendChild(henry.element);

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;

            if (e.key === 'ArrowLeft') {
                henry.moveCharacter('west');
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
