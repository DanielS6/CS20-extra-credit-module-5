document.addEventListener( 'DOMContentLoaded', function () {

    // elements
    const leftInput = document.getElementById('input-left');
    const rightInput = document.getElementById('input-right');
    const jumpBtn = document.getElementById('jump-button');

    let currentSide = 'left';
    const jumpToRight = () => {
        rightInput.value = leftInput.value;
        leftInput.value = '';
        jumpBtn.textContent = '< JUMP';
        currentSide = 'right';
    };
    const jumpToLeft = () => {
        leftInput.value = rightInput.value;
        rightInput.value = '';
        jumpBtn.textContent = 'JUMP >';
        currentSide = 'left';
    };
    const jumpToggle = () => {
        if (currentSide === 'left') {
            jumpToRight();
        } else {
            jumpToLeft();
        }
    };

    const setup = () => {
        jumpBtn.addEventListener('click', jumpToggle);
    };
    setup();
} );