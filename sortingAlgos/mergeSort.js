import {bg1,delay} from "./helpers.js"

export async function mSort(){
    const hist = document.querySelectorAll(".bar")
    if(hist.length == 1){
        bg1(hist[0],"green")
        return;
    }
    await mergeSort(hist,0,hist.length-1);
}

async function mergeSort(hist,start,end){
    if(start >= end) return;
    const mid = start + Math.floor((end - start)/2);
    await mergeSort(hist,start,mid);
    await mergeSort(hist,mid+1,end);
    await merge(hist,start,mid,end);

}
async function merge(hist,start,mid,end){
    let ptr1 = start;
    let ptr2 = mid+1;

    const left = []
    const right = []
    const len = end - start + 1
    for(let i = start;i<=mid;++i){
        await delay();
        bg1(hist[i],"yellow");
        left.push(hist[i].style.height);
    }

    for(let i = mid+1;i<=end;++i){
        await delay();
        bg1(hist[i],"orange");
        right.push(hist[i].style.height);
    }   
    let index = start;
    while(ptr1 <= mid && ptr2 <= end){
        await delay();
        if(len == hist.length){
            bg1(hist[index],"green")
        }
        else{
            bg1(hist[index],"pink")
        }
        if(parseInt(left[ptr1 - start]) <= parseInt(right[ptr2 - (mid+1)])){
            hist[index].style.height = left[ptr1 - start];
            ++ptr1;
        }
        else{
            hist[index].style.height = right[ptr2 - (mid+1)];
            ++ptr2;
        }
        ++index;
    }
    while(ptr1 <= mid){
        await delay()
        if(len == hist.length){
            bg1(hist[index],"green")
        }
        else{
            bg1(hist[index],"pink")
        }
        hist[index].style.height = left[ptr1 - start];
        ++index;
        ++ptr1;
    }
    while(ptr2 <= end){
        await delay()
        if(len == hist.length){
            bg1(hist[index],"green")
        }
        else{
            bg1(hist[index],"pink")
        }
        hist[index].style.height = right[ptr2 - (mid+1)];
        ++index;
        ++ptr2;
    }
}