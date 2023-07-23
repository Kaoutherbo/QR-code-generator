
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
const btn = document.querySelector('.btn');
btn.addEventListener('click',generateQR);

function generateQR (){
    if(qrText.value != ''){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.Value;
    imgBox.classList.add("show-img");   
    }
   else{
    qrText.classList.add("error");
    setTimeout(()=>{
        qrText.classList.remove("error");
    },700);
    qrText.style.borderColor = "red";
    qrText.style.borderWidth = "1.5px";
    
   }

}