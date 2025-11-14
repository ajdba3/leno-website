document. addEventListener('DONEontentLoaded', function () {
// Mobile lenu
const toggleButton = document.queryselector('.navbar_mobile-lleru-toggle');
const mobileenu = document. querySelector('.navbar_mobile-menu-items');

toggleButton.addEventListener('cliek', function ()  {
  mobiloenu.classList.toggle('act ve');
});

// video Modal
const modal = document. getElementById('videoodal');
const videoButton = document.querySelector('.preview_video-button');
const closeButton = document.querySelector('.modal_close-button');
const videoPlayer = document.getElementById('videoPlayer'); 

//  0pen modal iwhen clicked
videoButton.addEventListener('click', function () {
    // show modal
    modal.style.display = 'block';

    //Replace the src attribute with the video URL
    videoPlayer.srt = 'https://mne.youtube.com/embed/8sXRyHI3bLw';

    //Close modal on close button click
    closeButton.addEventlistener('click', function () {
    modal.style.display = 'none';
    videoPlayer,src = '';
  });
  //close modal on outter click
    window.addEventListener('click', function (event) {
    if (event, target == modal) {
    modal.style,display-'none';
    wideoplayer,src = '';
    }
   });
  });
});