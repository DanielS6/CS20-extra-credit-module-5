document.addEventListener( 'DOMContentLoaded', function () {

    // elements
    const allCheck = document.getElementById('checkbox-all');
    const allLabel = document.getElementById('checkbox-all-label')

    const check1 = document.getElementById('checkbox-1');
    const check2 = document.getElementById('checkbox-2');
    const check3 = document.getElementById('checkbox-3');
    const check4 = document.getElementById('checkbox-4');
    const checks = [check1, check2, check3, check4];

    const onUpdate = (shouldCheck) => {
        checks.forEach((e) => e.checked = shouldCheck);
        // label should reflect the oppose of the current state, i.e. when
        // checked unchecking it will uncheck everything, and vice versa
        allLabel.textContent = shouldCheck ? 'Uncheck all' : 'Check all';
    };

    const setup = () => {
        allCheck.addEventListener('input', (e) => onUpdate(e.target.checked));
    };
    setup();
} );