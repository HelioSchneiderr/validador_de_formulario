

class Validador {

    constructor() {
        this.formu = document.getElementById("formu")
        this.nome = document.getElementById(`input-teste-1`);
        this.sobrenome = document.getElementById(`input-teste-2`);
        this.cpff = document.getElementById(`input-teste-3`);
        this.usuario = document.getElementById(`input-teste-4`);
        this.senha = document.getElementById(`input-teste-5`);
        this.confirmarSenha = document.getElementById(`input-teste-6`);
        this.evento();
    };

    evento() {
        this.formu.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validanome2 = this.validaNome();
        const cpfValida = this.validaCPF();
        const validaSobrenome2 = this.validaSobrenome();
        const validaUsuario2 = this.validaUsuario();
        const validaSenha2 = this.validaSenha();
        const confirmarSenha2 = this.confirmaSenha();

        if (validanome2 && cpfValida && validaSobrenome2 && validaUsuario2 && validaSenha2 && confirmarSenha2) {
            alert("Formulário Enviado.")
            this.formu.submit();
        };
    };

    validaNome() {
        const nome = this.nome.value;
        const pNome = document.getElementById('p-nome');
        let valid = true;
        //Validações

        console.log(nome.length, typeof nome);

        if (nome.length === 0) {
            pNome.innerHTML = `Nome inválido, campo em branco.`
            valid = false;

        } else if (!nome.match(/^[aA-zZ]+$/g)) {
            pNome.innerHTML = `Nome inválido, nome com números.`;
            valid = false;
        } else {

            pNome.innerHTML = ` `
            return valid;

        };

    };

    validaSobrenome() {
        const sobrenome = this.sobrenome.value;
        const pSobrenome = document.getElementById('p-sobrenome');
        let valid = true;

        if (sobrenome.length === 0) {
            pSobrenome.innerHTML = `Sobrenome inválido, campo em branco.`
            valid = false;

        } else if (!sobrenome.match(/^[aA-zZ]+$/g)) {
            pSobrenome.innerHTML = `Sobrenome inválido, nome com números.`;
            valid = false;
        } else {

            pSobrenome.innerHTML = ` `;
            return valid;

        }


    }

    validaCPF(cpff) {
        const cpf = new ValidaCPF(this.cpff.value);
        const pCpf = document.getElementById('p-cpf');
        let valid = true;
        if (!cpf.valida()) {
            const pCpf = document.getElementById('p-cpf');
            pCpf.innerHTML = `Cpf Inválido.`
            valid = false;
        } else {
            pCpf.innerHTML = ` `
            return valid;
        }


    };

    validaUsuario() {
        const usuario = this.usuario.value;
        const pUsuario = document.getElementById('p-usuario');
        let valid = true;

        if (usuario.length < 3) {
            pUsuario.innerHTML = `O usuário possui menos que 3 caractéres.`
            valid = false;

        } else if (usuario.length > 12) {
            pUsuario.innerHTML = `O usuário possui mais que 12 caractéres.`
            valid = false;
        } else {
            pUsuario.innerHTML = ` `
            return valid;
        };
    };

    validaSenha() {
        const senha = this.senha.value;
        const pSenha = document.getElementById('p-senha');
        let valid = true;

        if (senha.length < 6 || senha.length === 0) {
            pSenha.innerHTML = `Senha muito curta ou em branco.`
            valid = false;

        } else if (senha.length > 14) {
            pSenha.innerHTML = `Senha muito longa.`
            valid = false;

        } else {
            pSenha.innerHTML = ` `
            return valid
        };

    };

    confirmaSenha() {
        const senha = this.senha.value;
        const confirmarSenha = this.confirmarSenha.value;
        const pConfirmaSenha = document.getElementById('p-confirmaSenha');
        let valid = true;

        if (confirmarSenha !== senha) {
            pConfirmaSenha.innerHTML = `A senhas estão diferentes.`
            valid = false

        } else {
            pConfirmaSenha.innerHTML = ` `
            return valid
        };

    };



};

const vali = new Validador();



