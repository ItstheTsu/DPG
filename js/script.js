document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('dashboard');
    const itens = lista.getElementsByTagName('a');
    const body = document.body;

    const imagens = [
        '/Images/Assets/Banners/fundoEldenRing.jpg',
        '/Images/Assets/Banners/fundoFortnite.png',
        '/Images/Assets/Banners/fundoGTA.jpg',
        '/Images/Assets/Banners/fundoForza.jpg',
        '/Images/Assets/Banners/fundoRED.jpg',
        '/Images/Assets/Banners/FundoFIFA.jpg'
    ];

    for (let i = 0; i < itens.length; i++) {
        itens[i].addEventListener('mouseover', function () {
            for (let j = 0; j < itens.length; j++) {
                itens[j].classList.remove('selecionado');
            }

            this.classList.add('selecionado');

            body.style.backgroundImage = `url(${imagens[this.id]})`;
            body.style.backgroundSize = 'cover';
            body.style.transition = 'ease-in-out .3s';
            body.style.backgroundPosition = 'center';
        });
    }
});

let imgScroll1 = document.getElementById('img-move1');
let imgScroll2 = document.getElementById('img-move2');
let imgScroll3 = document.getElementById('img-move3');
let chart1 = document.getElementById('chart1');
let chart2 = document.getElementById('chart2');
let chart3 = document.getElementById('chart3');
let chart4 = document.getElementById('chart4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    imgScroll1.style.left = (value * -.122)/1.2 + 'px';
    imgScroll3.style.right = (value * -.122)/1.2 + 'px';
})