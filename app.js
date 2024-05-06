// Yaa ek simple button function hai
document.getElementById("myButton1").addEventListener("click", function(){
    alert("Button Clicked")
}); 

// yaa button par hover active aur clicked hota hai
document.getElementById("myButton2").addEventListener("click", function(){
    this.classList.add("clicked")
})
