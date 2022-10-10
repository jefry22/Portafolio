const encabezados = document.querySelectorAll('.section-container .encabezado');
const enlaces = document.querySelectorAll('.enlaces a')
const btn_menu = document.querySelector('#btn-menu')
const div_mobile = document.querySelector('#nav-mobile');


window.sr= ScrollReveal();
sr.reveal('.container-about',{
  duration:4000,
  origin:'left',
  distance:'50px',
});
sr.reveal('.section-title',{
  duration:4000,
  origin:'right',
  distance:'50px',
});
sr.reveal('.section-title',{
  duration:4000,
  origin:'right',
  distance:'50px',
});
sr.reveal('.container-card-estudios',{
  duration:4000,
  origin:'right',
  distance:'50px',
});
sr.reveal('.container-card-portfolio',{
  duration:4000,
  origin:'right',
  distance:'50px',
});


btn_menu.addEventListener('click',function(){
    div_mobile.classList.toggle('active')
})

const typed = new Typed('.typed',{
  strings:['Developer','Freelance'],
  typeSpeed:40,
  backSpeed:20,
  loop:true,
});

// const form = document.querySelector('.form');

// form.addEventListener('submit',(e)=>{
//   e.preventDefault();
  
// })