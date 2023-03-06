document.addEventListener( 'DOMContentLoaded', function () {

    // elements
    const img = document.getElementById('slideshow-image');
    const startBtn = document.getElementById('slideshow-start');
    const stopBtn = document.getElementById('slideshow-stop');

    // Image sources
    const imgURLs = [
        './images/Example.jpg',
        './images/Example.png',
        './images/Example.svg',
        './images/Information_example_page.jpg',
        './images/JAB-code.png'
    ];
    // HTML is coded to start with Example.jpg
    let currImgIdx = 0;
    let slideshowRunning = false;

    // Forward declare because of mutual recursion
    let afterFadeIn;
    const afterFadeOut = () => {
        // Stopping the slideshow means that the next image won't fade out,
        // but we will still finish fading in the current one
        currImgIdx = (currImgIdx + 1) % imgURLs.length;
        img.src = imgURLs[currImgIdx];
        // fade is accomplished with CSS transition
        img.classList.remove('faded');
    };
    afterFadeIn = () => {
        // Don't continue if the slideshow is stopped
        if (slideshowRunning) {
            img.classList.add('faded');
        }
    };
    const onTransitionEnd = () => {
        if (img.classList.contains('faded')) {
            // just faded out
            afterFadeOut();
        } else {
            afterFadeIn();
        }
    };

    const onStartBtn = () => {
        // Don't trigger multiple fades if already running
        if (!slideshowRunning) {
            slideshowRunning = true;
            // start the next fade out
            afterFadeIn();
        }
    };
    const onStopBtn = () => {
        // No harm in setting to false if already false, doesn't do anything
        slideshowRunning = false;
    };

    img.addEventListener('transitionend', onTransitionEnd);
    startBtn.addEventListener('click', onStartBtn);
    stopBtn.addEventListener('click', onStopBtn);

} );