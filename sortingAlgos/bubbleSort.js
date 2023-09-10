import { bg2 , swap , delay} from "./helpers.js";

export async function bSort(){
    const hist = document.querySelectorAll('.bar')

    for(let i = 0;i < hist.length;++i){
        for(let j = 0;j < hist.length-1-i;++j){
            bg2(hist[j],hist[j+1],"blue")
            if(parseInt(hist[j].style.height) > parseInt(hist[j+1].style.height)){
                await delay()
                swap(hist,j,j+1);
            }
            bg2(hist[j],hist[j+1],"black")
        }
        hist[hist.length-1-i].style.background = "green";
    }
}