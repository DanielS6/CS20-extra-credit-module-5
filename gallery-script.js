// Specifically NOT using DOMContentLoaded but rather the load event so that
// we can be sure that jQuery has also finished loading
// See https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.addEventListener( 'load', function () {

    // elements
    const $img = $('#slideshow-image')
    const $startBtn = $('#slideshow-start');
    const $stopBtn = $('#slideshow-stop');

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

    // Milliseconds for fades
    const SLIDESHOW_SPEED = 1000;

    // Forward declare because of mutual recursion
    let afterFadeIn;
    const afterFadeOut = () => {
        // Stopping the slideshow means that the next image won't fade out,
        // but we will still finish fading in the current one
        currImgIdx = (currImgIdx + 1) % imgURLs.length;
        $img.attr('src', imgURLs[currImgIdx]);
        $img.fadeIn(SLIDESHOW_SPEED, afterFadeIn);
    };
    afterFadeIn = () => {
        // Don't continue if the slideshow is stopped
        if (slideshowRunning) {
            $img.fadeOut(SLIDESHOW_SPEED, afterFadeOut);
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

    $startBtn.on('click', onStartBtn);
    $stopBtn.on('click', onStopBtn);

} );