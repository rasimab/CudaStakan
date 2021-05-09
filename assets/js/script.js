window.addEventListener("load",() =>{
    const preload=document.querySelector(".preload");
    preload.classList.add("preload-finish");
    const main=document.querySelector("#main");
    main.classList.remove("preload-finish1");
   main.classList.add("preload-finish2");
});