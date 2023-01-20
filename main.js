prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera")

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="' + data_uri + '"/>';
    })
}
console.log('mi5 version:', ml5.version);

classifire = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qtWe5H-gh/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function modelLoaded() {
    console.log('Model Loaded!')
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;

        if (results[0].label == "peace") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (results[0].label == "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "thumbs down") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if (results[1].label == "peace") {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
        if (results[1].label == "thumbs up") {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if (results[1].label == "thumbs down") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }

    }

}