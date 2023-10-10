/*header*/
let headbar = document.querySelector('.headbar');

document.querySelector('.menubar').onclick = () =>{
    headbar.classList.toggle('active');
}

/*ใช้ปิดแทปเมนูที่ไม่ใช้*/ 
window.onscroll = () =>{
    headbar.classList.remove('active');
}

/*scroll button*/
const scrollbutton = document.querySelector(".scrollbutton");

scrollbutton.addEventListener("click", function(){
    window.scrollTo({
        top: 150,
        left: 0,
        behavior: "smooth"
    });
});