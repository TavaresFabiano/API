const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const nascimento = document.getElementById('nascimento');
const endereco = document.getElementById('endereco');
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;
  const nascimentoValue = nascimento.value;
  const enderecoValue = endereco.value;
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;

  if (nomeValue === "") {
    setErrorFor(nome, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(nome);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (nascimentoValue === "") {
    setErrorFor (nascimento, "A data de nascimento é obrigatória.");
  } else {
    setSuccessFor (nascimento);
  }
  
  if (enderecoValue === "") {
    setErrorFor (endereco, "O endereço é obrigatório.");
  } else {
    setSuccessFor (endereco);
  }


  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmValue === "") {
    setErrorFor(passwordConfirm, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmValue !== passwordValue) {
    setErrorFor(passwordConfirm, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirm);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


