import Vue from 'vue'

export default new Vue({
  methods: {
    quandoSelecionarUsuario(usuario) {
      this.$emit('usuarioSelecionado', usuario)
    },
    onUsuarioSelecionado(callback) {
      this.$on('usuarioSelecionado', callback)
    }
  }
})