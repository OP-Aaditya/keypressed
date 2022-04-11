canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

img_width=300;
img_height=100;

var img_image;

img_x=100;
img_y=100;

function add(){
img_imageTag= new Image();
img_imageTag.onload=uploading();
img_imageTag.src=img_image;

}
function uploading(){
    ctx.drawImage(img_imageTag , img_x , img_y , img_width , img_height );
}



window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed > 65 && keypressed < 90 || keypressed > 97 && keypressed < 122){
        alphabet();
        document.getElementById("likho").innerHTML="You pressed an Alphabet key";
       
        console.log("alphabet_Key");
    }
    if(keypressed > 48 && keypressed < 57){
        number();
   document.getElementById("likho").innerHTML="You pressed a Number key";
   console.log("number_key");
    }
    if(keypressed > 37 && keypressed < 40){
        arrow();
        document.getElementById("likho").innerHTML="You pressed a Arrow key";
        console.log("arrow_key");
    }
    if( keypressed > 122){
        other();
        document.getElementById("likho").innerHTML="You pressed an Other key";
        console.log("other_key");
    }
    if(keypressed == 17 || keypressed == 18 || keypressed == 27){
        special();
        document.getElementById("likho").innerHTML="You pressed a Special key";
        console.log("special_key");
    }
    
}
function alphabet(){
    img_image="Alpkey.png";
    add();
}
function number(){
    img_image="numkey.png";
    add();
}
function arrow(){
    img_image="Arrkey.png";
    add();
}
function special(){
    img_image="spkey.png";
    add();
}
function other(){
    img_image="otherkey.png";
    add();
}