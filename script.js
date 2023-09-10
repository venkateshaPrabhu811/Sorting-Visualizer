import { bSort } from "./sortingAlgos/bubbleSort.js";
import { iSort } from "./sortingAlgos/insertionSort.js";
import { mSort } from "./sortingAlgos/mergeSort.js";
import { qSort } from "./sortingAlgos/quickSort.js";
import { sSort } from "./sortingAlgos/selectionSort.js";
import { state } from "./sortingAlgos/helpers.js";

const bars = document.querySelector(".bars");
const algo_container = document.querySelector(".algo-container");
const arr_size_btn = document.querySelector('.arr-size-btn');
const algoithms = document.querySelectorAll('.algo-btn')
const new_arr_btn = document.querySelector('.new-arr-btn')
const speed_btn = document.querySelector('.speed-btn')


function randomArray(size){
    let barsValue = []
    for(let i = 0;i<size;++i){
        barsValue.push(Math.ceil(Math.random()*50));
    }
    state.bars_arr = barsValue
}

function createBars(e = '_',size = state.size){
    bars.innerHTML = ''
    randomArray(size);
    state.bars_arr.forEach(val => {
        const bar = document.createElement('div');
        bar.classList.add('bar')
        bar.setAttribute('data-value',val);
        bar.style.height = `${+val * 8}px`
        bars.appendChild(bar); 
    });
}


const algo_select = async function(e){
    const algorithm = e.target.closest('.algo-btn')?.id
    if(!algorithm){
        alert("Select the exact algorithm to start execution");
        return;
    }
    disableButtons();
    switch(algorithm){
        case "bSort" :
            await bSort()
            break;
        case "sSort" :
            await sSort();
            break;
        case "qSort" :
            await qSort();
            break;
        case "mSort" :
            await mSort();
            break;
        case "iSort" :
            await iSort();
            break;
    }
    enableButtons()
}

const enableButtons = function(){
    algoithms.forEach((a) =>{
        a.removeAttribute('disabled')
    })
    changeAttributes()
}

const disableButtons = function(){
    algoithms.forEach((a) =>{
        a.setAttribute('disabled','true')
    })
    changeAttributes()
}

const changeAttributes = function(){
    new_arr_btn.toggleAttribute('disabled')
    arr_size_btn.toggleAttribute('disabled')
}

const changeSize = function(){
    let val = +arr_size_btn.value
    state.size = val
    createBars(val)
}

const changeSpeed = function(){
    let currSpeed = +speed_btn.value;
    state.speed = currSpeed
}

const init = function(){
    createBars();
    algo_container.addEventListener('click',algo_select);
    arr_size_btn.addEventListener('input',changeSize)
    new_arr_btn.addEventListener('click',createBars)
    speed_btn.addEventListener('input',changeSpeed);
}
init()

