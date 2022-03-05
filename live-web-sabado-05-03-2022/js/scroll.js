window.addEventListener('scroll',()=>{
  // pegando o menu no html e passando par ao javascript
  const header = document.querySelector('.header-top');
  // no header (variavel) iremos adicionar uma classe css quando o scroll for maior do que 80, o js retira essa classe quando o scroll for menor <= 80
  header.classList.toggle('scroll-active', window.scrollY > 640);
});