new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Eu fui clicado! Isso esta sendo apenas um alerta!')
        },
        armazenaValor(event) {
            this.valor = event.target.value
        },
        confirmarValor(event) {
            this.valor = event.target.value
        }
    }
})