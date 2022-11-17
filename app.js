let btn = document.getElementById("btnMenu");
let folding = document.getElementById("folding");
console.log(folding)
btn.onclick = openMenu

function openMenu(event){
    btn.classList.contains('azul')? btn.classList.remove('azul'): btn.classList.add('azul');
    folding.classList.contains('opened-folding')?   folding.classList.remove('opened-folding'):   folding.classList.add('opened-folding');
}