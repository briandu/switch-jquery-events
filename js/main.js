function onoff() {
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
    $('body').toggleClass('light dark')
    $(':button').toggleClass('on off')
    $('.status').text("It's so bright in here!")
    clickOn.play();
  }else{
    document.getElementById("onoff").value="Off";
    $('body').toggleClass('light dark')
    $(':button').toggleClass('on off')
    $('.status').text('Hey, who turned off the lights?')
    clickOff.play();
  }
}

var clickOn = new Audio();
clickOn.src = "http://soundbible.com/mp3/Click On-SoundBible.com-1697535117.mp3";

var clickOff = new Audio();
clickOff.src = "http://soundbible.com/mp3/Button Click Off-SoundBible.com-1730098776.mp3";
