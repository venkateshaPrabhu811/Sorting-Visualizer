import { bg1, delay } from "./helpers.js";

export async function iSort(arr){
    const hist = document.querySelectorAll(".bar")
    for(let i = 1;i<hist.length;++i){
        let key = parseInt(hist[i].style.height);
        let j = i-1;
        bg1(hist[i],"blue")
        await delay()
        while(j >= 0 && parseInt(hist[j].style.height) > key){
            bg1(hist[j],"blue")
            hist[j+1].style.height = hist[j].style.height;
            j = j-1;
            await delay()
            for(let k = i;k >= 0;--k){
                bg1(hist[k],"green");
            }
        }
        hist[j+1].style.height = `${key}px`
        bg1(hist[i],"green")
    }
}