

function countLetters(str) {
    // Use a regular expression to match alphabetic characters (a-z, A-Z)
    const letters = str.match(/[a-zA-Z]/g);

    // Return the length of the matched array, which represents the number of letters
    return letters ? letters.length : 0;
}
document.getElementById("myForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const inputValue = document.getElementById("textInput").value;

    const letters = countLetters(inputValue);
    if(!letters==0){
        if (letters == 7) {
            let text = " ";
    
            // for (let x of inputValue) {
            //     text += x + "+";
    
            // };
            
for (let i = 0; i < inputValue.length; i++) {
    text += inputValue[i];
    if (i !== inputValue.length - 1) {
        text += "+";
    }
};
            document.getElementById("thala").innerHTML = "<h1>" + text + "= 7 <br> " + inputValue + " is Thala for a reason.</h1>";
    
            stopAllVideos();
            //  function playMusic(){
            //     let audio=new Audio("bole-jo-koyal-bago-me.mp3");
            //     audio.play();
            //  };
            //  playMusic();
            document.getElementById("myVideo").style.display = "";
            function playVideo() {
                // Get the video element
                var video = document.getElementById("myVideo");
    
                // Play the video
                video.play();
            };
            playVideo();
    
    
        } else {
            document.getElementById("thala").innerHTML = "<h1>Padhai likhai krlo bhai,kuch nhi rkha isme</h1>";
            stopAllVideos();
            document.getElementById("myVideo1").style.display = "";
            function playVideo() {
                // Get the video element
                var video = document.getElementById("myVideo1");
    
                // Play the video
                video.play();
            };
            playVideo();
          
        }
    }
   


    function stopAllVideos() {
        var videos = document.getElementsByTagName('video');
        for (var i = 0; i < videos.length; i++) {
            videos[i].pause();
            videos[i].style.display = "none"; // Hide all videos
        }
    }
    // document.getElementById("thala").innerHTML = text;


     document.getElementById("shareBtn").addEventListener("click", function() {
        // Replace the text and URL with the content you want to share
        var text = "Check out if something is Thala or not!";
        var url = window.location.href;

        // Construct the WhatsApp share URL
        var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + " " + url);

        // Open the WhatsApp share URL in a new tab
        window.open(whatsappUrl, "_blank");
    });

});

