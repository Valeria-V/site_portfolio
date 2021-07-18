var btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function(){
  var boxContact = document.querySelector('.jl-contact-info'); //selecionando a classe do contato
  
  boxContact.classList.toggle('jl-is-open');  //faca a primeira vez, e desfaca depois
  this.classList.toggle('jl-change-icon');    //so troca o icone quando clica no botao  
});