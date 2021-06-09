function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zVnhp0y97/model.json',modelLoaded);
}

function modelLoaded(){
    console.log('modelLoaded');
}