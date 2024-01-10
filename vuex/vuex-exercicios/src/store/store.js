import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './modules/carrinho'
import parametros from './modules/parametros';

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Bruno',
    sobrenome: 'Neves'
  },
  // getters, // Essa é uma forma de declarar
  getters: {
    ...getters // Essa é outra forma de declara só que pegando todos os getters
  },
  modules: { carrinho, parametros }
})
