//Seleciona os elementos do formulário
const amount = document.getElementById("amount");

//Fica observando toda vez que entrar algum conteúdo no input
amount.oninput = () => {

  //Remove as letras, não permitindo informar no campo 
  let value = amount.value.replace(/\D/g, "");
  amount.value = value; 


}

