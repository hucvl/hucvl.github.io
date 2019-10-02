const S3_PREFIX =
  "./media/";
const IMAGE_SRC_PREFIX =
  "./media";
// const IMAGE_PLACEHOLDER_SRC = `${IMAGE_SRC_PREFIX}/placeholder3.png`;
const IMAGE_PLACEHOLDER_SRC = `${IMAGE_SRC_PREFIX}/placeholder4.png`;
const LOADING_IMAGE_SRC = `${IMAGE_SRC_PREFIX}/loading.png`;
const DOWNLOAD_IMAGE_SRC = `${IMAGE_SRC_PREFIX}/DownloadIcon.png`;
const MAX_IMAGE_SIZE = 1024; // dimension in pixels.
const image_list = ["36", "11"];
var currentImIndx = 0;
var currentAttribute = "sunset";



function myFunction() {
    var x = document.getElementById("attributes"); 
    currentAttribute = x.value;   
    var inputImElement = document.getElementById("inputIM");  

   // if(inputImElement!=null){

    //inputImElement.parentNode.removeChild(inputImElement);
    //}

    var outputImElement = document.getElementById("outputIM"); 
    //if(outputImElement!=null){

    //outputImElement.parentNode.removeChild(outputImElement);
    //}
    var inputElement = document.getElementById("input");
    var outputElement = document.getElementById("output");
    input_impath = "./media/"+image_list[currentImIndx]+"/"+currentAttribute+"/"+image_list[currentImIndx]+"_000.png";
    output_impath = "./media/"+image_list[currentImIndx]+"/"+currentAttribute+"/"+image_list[currentImIndx]+"_020.png";
    //outputElement.remove();
    //var x = document.createElement("IMG");
    //x.setAttribute("src", input_impath);
    //x.setAttribute("width", "360");
    //x.setAttribute("height", "256");
    //x.setAttribute("alt", "Test");
    //x.setAttribute("id", "inputIM");
    //inputElement.appendChild(x);

    //var y = document.createElement("IMG");
    //y.setAttribute("src", output_impath);
    //y.setAttribute("width", "360");
    //y.setAttribute("height", "256");
    //y.setAttribute("alt", "Test");
    //y.setAttribute("id", "outputIM");
    //outputElement.appendChild(y);
    document.getElementById("outputIM").src=output_impath;
    var slider = document.getElementById("myRange");
    slider.value = 20
    
    
}

function myFunction2() {
    var x = document.getElementById("attributes").options.length;
    var e = document.getElementById("attributes");

    var value = e.options[e.selectedIndex].value;

    var slider = document.getElementById("myRange");

    impath = "./media/"+image_list[currentImIndx]+"/"+currentAttribute+"/"+image_list[currentImIndx]+"_"+padDigits(slider.value, 3)+".png";
    document.getElementById("outputIM").src=impath;
    
    
    
}
function initDemo() {
    var inputElement = document.getElementById("input");
    var outputElement = document.getElementById("output");
    var x = document.createElement("IMG");
    x.setAttribute("src", "./media/36/sunset/36_000.png");
    x.setAttribute("width", "360");
    //x.setAttribute("height", "100%");
    x.setAttribute("alt", "Test");
    x.setAttribute("id", "inputIM");
    inputElement.appendChild(x);
    

    var y = document.createElement("IMG");
    y.setAttribute("src", "./media/36/sunset/36_020.png");
    y.setAttribute("width", "360");
    //y.setAttribute("height", "100%x");
    y.setAttribute("alt", "Test");
    y.setAttribute("id", "outputIM");
    outputElement.appendChild(y);
    var slider = document.getElementById("myRange");
    slider.value = 20
}
function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

function newImage() { 
    var inputElement = document.getElementById("input");
    var outputElement = document.getElementById("output");
    currentImIndx = (currentImIndx + 1) % image_list.length;
    input_impath = "./media/"+image_list[currentImIndx]+"/"+currentAttribute+"/"+image_list[currentImIndx]+"_000.png";
    output_impath = "./media/"+image_list[currentImIndx]+"/"+currentAttribute+"/"+image_list[currentImIndx]+"_020.png";
    document.getElementById("inputIM").src=input_impath;
    document.getElementById("outputIM").src=output_impath;
    var slider = document.getElementById("myRange");
    slider.value = 20
    

}
function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}




