import { preloader } from "./svg.js";

export function createPreloader() {
    const preloaderBlock = document.createElement('div');
    const preloaderItem = document.createElement('span');

    preloaderBlock.classList.add('preloader-block');
    // preloaderBlock.role = 'status';
    preloaderItem.id = 'preloader';

    preloaderItem.innerHTML = preloader;

    preloaderBlock.append(preloaderItem);
    return preloaderBlock;
}