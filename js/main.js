
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


const theme_mode = document.querySelector('.btntheme i');
const container_mobile = document.querySelector('.container-menu-mobile');
theme_mode.addEventListener('click',function(e){
    e.preventDefault();
    theme_mode.classList.toggle('desplazar');

    if(theme_mode.classList.contains('desplazar')){
        theme_mode.classList.remove('fa-sun');
        theme_mode.classList.add('fa-moon');
        theme_mode.style.color="#222222";
        let btn_theme = e.target.parentElement;
        btn_theme.style.background='#fff';
        container_mobile.style.background='#222222';
        const section_about = document.querySelector('.section-about-container')
        section_about.style.background = '#222222';
        section_about.style.color = '#FFFFFF';
        const small_section_about = document.querySelectorAll('.section-about-container p small');
        small_section_about.forEach(e=>{
          e.style.color = '#FFFFFF';
        })
    }else{
        theme_mode.classList.remove('fa-moon');
        theme_mode.classList.add('fa-sun');
        theme_mode.style.color="#fff";
        const btn_theme = e.target.parentElement;
        btn_theme.style.background='#222222';
        container_mobile.style.background='#fff';

        let container_principal = e.target.parentElement.parentElement.parentElement;
        container_principal.style.background='#ffffff';
        const section_about = document.querySelector('.section-about-container')
        section_about.style.background = '#ffff';
        section_about.style.color = '#222222';
        const small_section_about = document.querySelectorAll('.section-about-container p small');
        small_section_about.forEach(e=>{
          e.style.color = '#222222';
        });
    }
});


const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft  =document.querySelector('.left-slider');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button')

const slidesLength = sliderLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slidesLength - 1 ) * 100}vh`;

upButton.addEventListener('click',()=> changeSlide('up'));
downButton.addEventListener('click',()=> changeSlide('down'));

const changeSlide = (direction)=>{
  const sliderHeight = sliderContainer.clientHeight;
  if(direction == 'up'){
    activeSlideIndex++;
    if(activeSlideIndex>slidesLength - 1){
      activeSlideIndex = 0;
    }
  } 

  sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

  
}


















//    if(btntheme.classList.contains('desplazar')){
//     btntheme.classList.remove('fa-sun');
//     btntheme.classList.add('fa-moon');
//     container_theme.style.background = 'var(--color-black)';
//     container_principal.style.background = 'var(--color-black)';
//     container_estudios.style.background = 'var(--color-black)';
//     container_contact.style.background = 'var(--color-black)';

//     for (const  parrafos of parrafos_all) {
//         parrafos.style.color='#fff';
//     }
//     for(const h2 of all_h2){
//       h2.style.color = '#ffff'
//     }
//   }else{
//     container_theme.style.background = '#ffff';
//     container_principal.style.background = '#ffff';
//     container_estudios.style.background = 'var(--color-bg-secundary)';
//     container_contact.style.background = 'var(--color-bg-secundary)';
//     // --color-bg-secundary
//     btntheme.classList.remove('fa-moon');
//     btntheme.classList.add('fa-sun');
//     container_theme.style.background = 'var(--text-color-primary)';
//     for (const  parrafos of parrafos_all) {
//       parrafos.style.color='var(--color-black)';
//   }
//   for(const small of small){
//     small.style.color =' #fff';
//   }
//     for (const  p_footer of parrafos_footer) {
//       p_footer.style.color='#fff';
//   }
//   for(const h2 of all_h2){
//     h2.style.color = 'var(--color-black)';
//   }

//   }  
// });
// console.log(parrafos_footer)