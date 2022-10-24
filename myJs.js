const modalKapa = document.querySelector('table')
const formKapa = document.querySelector('.modal-body');
const tıklandığında = document.querySelector('#mailGonder');
const mailGonder1 = document.querySelector('#mailGonder1');

tıklandığında.addEventListener('click', (e) => {
    const toast = new bootstrap.Toast(mailGonder1);
    toast.show();

})


const urlGetir = document.querySelector('#btn1');

urlGetir.addEventListener('click', goToLink);

function goToLink() {
    location.href = "https://www.instagram.com/oguzzcirak0/";
}



//scroll event
window.addEventListener('scroll',function(e){
    
    const nav=document.querySelector('.navbar');
    if(window.scrollY>800){
        nav.classList.add('collapse')
        
    }else if(window.scrollY<800){
         nav.classList.remove('collapse')
    }
    
})


       
       




