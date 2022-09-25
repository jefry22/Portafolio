
const encabezados = document.querySelectorAll('.section-container .encabezado');
const enlaces = document.querySelectorAll('.enlaces a')
const btn_menu = document.querySelector('#btn-menu')
const div_mobile = document.querySelector('#nav-mobile');



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


btn_menu.addEventListener('click',function(){
    div_mobile.classList.toggle('active')
})

const typed = new Typed('.typed',{
  strings:['Developer','Freelance'],
  typeSpeed:40,
  backSpeed:20,
  loop:true,
});




const btntheme = document.querySelector('.fa-sun');
const container_theme = document.querySelector('.btntheme');
const container_principal = document.querySelector('.container')
const parrafos_color = document.querySelectorAll('.about-description p');
const small = document.querySelectorAll('.data small');
const container_estudios = document.querySelector('.container-section-estudios');
const container_contact = document.querySelector('.container-section-contact')


const all_h2 = document.querySelectorAll('.section-container h2')
const parrafos_all = document.querySelectorAll('.section-container p');
const parrafos_footer = document.querySelectorAll('footer p');

btntheme.addEventListener('click',function(){
  
  btntheme.classList.toggle('desplazar');  
  
   if(btntheme.classList.contains('desplazar')){
    btntheme.classList.remove('fa-sun');
    btntheme.classList.add('fa-moon');
    container_theme.style.background = 'var(--color-black)';
    container_principal.style.background = 'var(--color-black)';
    container_estudios.style.background = 'var(--color-black)';
    container_contact.style.background = 'var(--color-black)';

    for (const  parrafos of parrafos_all) {
        parrafos.style.color='#fff';
    }
    for(const textSmall of small){
      textSmall.style.color='#fff';
    }
    for(const h2 of all_h2){
      h2.style.color = '#ffff'
    }
  }else{
    container_theme.style.background = '#ffff';
    container_principal.style.background = '#ffff';
    container_estudios.style.background = 'var(--color-bg-secundary)';
    container_contact.style.background = 'var(--color-bg-secundary)';
    // --color-bg-secundary
    btntheme.classList.remove('fa-moon');
    btntheme.classList.add('fa-sun');
    container_theme.style.background = 'var(--text-color-primary)';
    for (const  parrafos of parrafos_all) {
      parrafos.style.color='var(--color-black)';
  }
    for (const  p_footer of parrafos_footer) {
      p_footer.style.color='#fff';
  }
  for(const h2 of all_h2){
    h2.style.color = 'var(--color-black)';
  }

  }  
});
console.log(parrafos_footer)