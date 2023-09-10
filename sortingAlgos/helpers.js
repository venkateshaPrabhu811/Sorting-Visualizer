export const state = {
    size : 50,
    bars_arr : [],
    speed : 1
}

export function swap(arr,i,j){
    const temp = arr[i].style.height;
    arr[i].style.height = arr[j].style.height;
    arr[j].style.height = temp;
}
export function bg2(e1,e2,color){
    e1.style.background = color;
    e2.style.background = color;
}
export function bg1(e1,color){
    e1.style.background = color
}
export function delay(){
    return new Promise(resolve => setTimeout(resolve,(1/state.speed) * 1000))
}