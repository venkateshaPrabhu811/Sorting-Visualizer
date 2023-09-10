import { swap, delay, bg1 } from "./helpers.js";

export async function qSort() {
  const hist = document.querySelectorAll(".bar");
  await qSortUtil(hist, 0, hist.length - 1);
}
async function qSortUtil(hist, start, end) {
  if (start > end) return;
  let pivot = await partition(hist, start, end);

  await qSortUtil(hist, start, pivot - 1);
  await qSortUtil(hist, pivot + 1, end);
}
async function partition(hist, start, end) {
  for (let i = start; i < end; ++i) {
    bg1(hist[i], "black");
  }
  let val = parseInt(hist[end].style.height);
  bg1(hist[end], "red");
  await delay();

  let index = start;
  for (let i = start; i < end; ++i) {
    bg1(hist[i], "blue");
    await delay();
    let flag = false;
    if (parseInt(hist[i].style.height) < val) {
      swap(hist, index, i);
      bg1(hist[index], "orange");
      flag = true;
      await delay();
      ++index;
    }
    if (flag) {
      if (parseInt(hist[i].style.height < val)) {
        bg1(hist[i], "orange");
        await delay();
      } else {
        bg1(hist[i], "pink");
        await delay();
      }
    } else {
      bg1(hist[i], "pink");
      await delay();
    }
  }
  swap(hist, index, end);

  bg1(hist[index], "green");
  await delay();

  return index;
}
