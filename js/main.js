//DECLARANDO VARIAVEIS
var btnContact = document.querySelector('.jl-btn-contact');


//PAGE PRELOADER
//quando pag(janela) tiver carregado tudo, faca a funcao
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function() {
        pagePreloader.style.display = 'none';
    }, 5000);
});

//ABRINDO E FECHANDO INFO CONTATO
btnContact.addEventListener('click', function(){
  var boxContact = document.querySelector('.jl-contact-info'); //selecionando a classe do contato
  
  boxContact.classList.toggle('jl-is-open');  //faca a primeira vez, e desfaca depois
  this.classList.toggle('jl-change-icon');    //so troca o icone quando clica no botao  
});

