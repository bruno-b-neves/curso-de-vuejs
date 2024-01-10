<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    /* 1º Exemplo - É uma forma de acessar os getters de forma manual e com mais controle */
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // },
    
    /* 2º Exemplo - É outra forma mais concisa e conveniente */
    // computed: mapGetters(['valorTotal'])
    
    /* 3º Exemplo - É outra forma que torna o código mais legível e conciso */
    computed: mapGetters('carrinho', {
        total: 'valorTotal'
    })
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
