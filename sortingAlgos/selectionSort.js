import { bg1, delay, swap } from "./helpers.js";

export async function sSort(){
    const hist = document.querySelectorAll(".bar");
    for(let i = 0;i<hist.length;++i){
        let min = parseInt(hist[i].style.height)
        let index = i;
        bg1(hist[i],"red");
        await delay();
        let flag = false;
        for(let j = i+1;j<hist.length;++j){
            bg1(hist[j],"blue");
            await delay()
            if(parseInt(hist[j].style.height) < min){
                min = parseInt(hist[j].style.height);
                index = j;
                flag = true;
            }
            bg1(hist[j],"black");
        }
        bg1(hist[index],"orange")
        await delay()
        swap(hist,i,index);
        bg1(hist[i],"green");
        await delay()
        if(flag) bg1(hist[index],"black")

    }
}