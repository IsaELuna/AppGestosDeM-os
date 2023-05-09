prediction1 = ""
prediction2 = ""

Webcam.set({
    width:350,
    height:300,
    imageFormart: 'png',
    pngQuality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>';        
    });
}

console.log('m15 version:', m15.version);

classifier = m15.imageClassifier("https://teachablemachine.withgoogle.com/models/JkkqoV55F/model.json",modelLoaded)

    function modelLoaded() {
console.log('Model Loaded!');
    }

function speak(){
    var synth = window.speech5ynthesis;
    speakData1 = "A primeira precisão é " + prediction1;
    speakData2 = "E a segunda precisão é" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = result[0].label;
        document.getElementById("resultEmotionName2").innerHTML = result[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
    }}