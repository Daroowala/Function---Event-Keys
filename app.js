// Yaa ek simple button function hai
document.getElementById("myButton1").addEventListener("click", function(){
    alert("Button Clicked")
}); 


// yaa button par hover active aur clicked hota hai
document.getElementById("myButton2").addEventListener("click", function(){
    this.classList.add("clicked")
})


// yaa image button hai jis par click karna sai image change ho jai gi
function changeImage(){
    var image = document.getElementById("myImage");
    if (image.src.match("image/nature-319.jpg")){
        image.src = "image/th.jpeg";
    } 
    else {
        image.src = "image/nature-319.jpg";
    }
}


// ya ek calculater ka button hai 
function Number(num){
var result = document.getElementById('display')
result.value += num
}
function resultClear(){
    var result = document.getElementById('display')
    result.value = ""
    }