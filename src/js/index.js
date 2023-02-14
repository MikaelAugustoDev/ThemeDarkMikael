const tema = document.getElementById('tema');
let header = document.getElementsByClassName('cabecalho');
let main = document.getElementsByClassName('main');

tema.addEventListener('change', () => {
    header[0].classList.toggle('dark');
    main[0].classList.toggle('dark');
});

console.log(main[0])
console.log(header[0])