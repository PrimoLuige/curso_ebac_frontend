const form = document.getElementById("form-submit");

form.addEventListener('submit', function(e){
e.preventDefault();
const primeiroCampo = document.getElementById("campoa");
const segundoCampo = document.getElementById("campob");
const mensagemSucesso = 'O valor de '+segundoCampo.value+' do Campo B é maior que digitado no Campo A e portanto seu formulário foi aceito';
const mensagemFracasso = 'Seu formulario foi rejeitado devido ao valor do Campo B ser menor que o valor de '+primeiroCampo.value+' que foi digitado no Campo A';
if(primeiroCampo.value < segundoCampo.value){
    
const containerMensagemsucesso =  document.querySelector('.sucess-message');
containerMensagemsucesso.innerHTML = mensagemSucesso;
containerMensagemsucesso.style.display = "block";    
} else {
const containerMensagemfracaso = document.querySelector('.fail-message');
containerMensagemfracaso.innerHTML = mensagemFracasso;
containerMensagemfracaso.style.display = "block";    
}
})
