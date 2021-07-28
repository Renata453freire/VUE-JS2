new Vue({
    el: '#desafio',
    data: { 
        valor: ''
    },
    methods: {
        exibirAlerta() {
            Alert('Estou te alertando')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})