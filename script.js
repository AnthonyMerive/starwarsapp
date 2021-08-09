import {data} from './data/data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let Like = [];
let disLike = [];
let ej = 0;
document.addEventListener('DOMContentLoaded', ()=>{
    loadData(data);
})

const loadData = data => {
    data.forEach(personaje =>{
        const{ id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        templateCard.querySelector('.btn-danger').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);
}

items.addEventListener('click', e =>{
    addLike(e)
})

const addLike = e => {
    if (e.target.classList.contains('btn-dark')){
    totalLikes(e.target.parentElement);
    ej = 1;
    }else if(e.target.classList.contains('btn-danger')){
    totalLikes(e.target.parentElement);
    ej = 2;
    }
}



const  totalLikes = objeto =>{
    const boton = {
    id: objeto.querySelector('.btn-dark').dataset.id,
    cantidad : 1,
    id: objeto.querySelector('.btn-danger').dataset.id,
    cantidad : 1
    }
    console.log(objeto)
    if(disLike.hasOwnProperty(boton.id) && ej == 1){
        boton.cantidad = Like[boton.id].cantidad+1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }else if(objeto.classList.contains('btn-dark')){
        Like[boton.id] = {...boton};
        objeto.querySelector('#like').textContent = boton.cantidad;
    }else if(disLike.hasOwnProperty(boton.id) && ej == 2){
        boton.cantidad = Like[boton.id].cantidad-1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    Like[boton.id] = {...boton};
}

