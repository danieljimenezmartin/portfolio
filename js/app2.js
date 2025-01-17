'use strict'
//LIGHTBOX
const enlaces = document.querySelectorAll('.section-galerialightbox__ul-li .a-li')
const lightbox = document.querySelector('.section-galerialightbox__lightbox')
const grande = document.querySelector('.section-galerialightbox__grande')
const cerrar = document.querySelector('.section-galerialightbox__cerrar')

enlaces.forEach(( cadaEnlace, i)=>{
        enlaces[i].addEventListener('click', (e)=>{
                e.preventDefault()
                let ruta = cadaEnlace.querySelector('.section-galerialightbox__img').src
                console.log(ruta)

                lightbox.classList.add('activo')
                grande.setAttribute('src', ruta)

        })
})

cerrar.addEventListener('click', ()=>{
       lightbox.classList.remove('activo')

})

//CARRUSEL
const big = document.querySelector('.section-carrousel__big');
const punto = document.querySelectorAll('.section-carrousel__punto');

punto.forEach( ( cadaPunto , i )=> {
        punto[i].addEventListener('click',()=>{

                let posicion = i
                let operacion = posicion * -10

                big.style.transform = `translateX(${ operacion }%)`

                punto.forEach( ( cadaPunto , i )=>{
                        punto[i].classList.remove('activo')
                })
                punto[i].classList.add('activo')
        })
})