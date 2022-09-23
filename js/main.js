
const encabezados = document.querySelectorAll('.section-container .encabezado');
const enlaces = document.querySelectorAll('.enlaces a')
console.log(enlaces);

const observer = new IntersectionObserver((entradas , observaador)=>{
  entradas.forEach(entrada=>{
      if(entrada.isIntersecting){
        const id = '#' + entrada.target.id;
        history.pushState({}, entrada.target.innetText, id)
        enlaces.forEach(enlace=>{
          enlace.style.color='#fff';

          const href = enlace.attributes.href.nodeValue;
          
          if(href === id){
            const activo = enlace.style.color='#dc3545';
            console.log(activo);
          }
        })
      }
  });
},{
  threshold:1,
  rootMargin:'0px',
});
encabezados.forEach((encabezado)=>{
  observer.observe(encabezado);
});



const typed = new Typed('.typed',{
  strings:['Developer','Freelance'],
  typeSpeed:40,
  backSpeed:20,
  loop:true,
});



  anime({
    targets:'.logo',
    translateX:{
      value:20,
      duration:800
    },
    rotate:{
      value:360,
      duration:1800,
      easing:'easeInOutSine'
    },
    scale:{
      value:2,
      duration:1600,
      delay:800,
      easing:'easeInOutQuart'
    },
    delay:250
  });

  const btn_menu = document.querySelector('#btn-menu')
  const div_mobile = document.querySelector('#nav-mobile');

  // const 
  btn_menu.addEventListener('click',function(){
      div_mobile.classList.toggle('active')
  })