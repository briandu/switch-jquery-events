function onoff() {
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
    $('body').toggleClass('light dark')
    $(':button').toggleClass('on off')
    clickOn.play();
    // document.style.backgroundColor = "#FFFFFF"s
  }else{
    document.getElementById("onoff").value="Off";
    $('body').toggleClass('light dark')
    $(':button').toggleClass('on off')
    clickOff.play();
    // document.style.backgroundColor = "#000000"
  }
}

// var lightsOn =

// var lightsOff =

var clickOn = new Audio();
clickOn.src = "http://soundbible.com/mp3/Click On-SoundBible.com-1697535117.mp3";

var clickOff = new Audio();
clickOff.src = "http://soundbible.com/mp3/Button Click Off-SoundBible.com-1730098776.mp3";
