const lis = document.querySelectorAll('li');
const uls = document.querySelectorAll('ul');

lis.forEach(li => li.addEventListener('click', marcarPasar));

function marcarPasar(e) {
    console.log(e);
    if (e.ctrlKey) {
        let elementoClave = e.target;
        let marcados = document.querySelectorAll("li.mark");
        if(e.shiftKey) {
            marcados.forEach(e => elementoClave.insertAdjacentElement('beforebegin',e));
        } else {
            [...marcados].reverse().forEach(e => elementoClave.insertAdjacentElement('afterend',e));
        }
        marcados.forEach(e => e.classList.remove('mark'));
    } else {
        e.target.classList.toggle('mark')
    }
}

uls.forEach(ul => ul.addEventListener('click', insertarElementos));

function insertarElementos(e) {
    let ulDestino = e.currentTarget;
    if (e.currentTarget.children.length==0) {
        let marcados = document.querySelectorAll('li.mark');
        ulDestino.append(...marcados);
        marcados.forEach(e => e.classList.remove('mark'));
    }
}