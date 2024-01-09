<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`"> -->
    <router-link tag="button" primario
      :to="{ name: 'editarUsuario', params: { id },
      query: {completo: true, lingua: 'pt'},
      hash: '#rodape'}">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  // Fazer com props, não preciso passar nada em data() e watch, apenas definir props e passar props: true no router.js
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    // console.log(this.id)
    console.log('Dentro do componente -> Usuário Detalhe')
    next(vm => {
      console.log(vm.id)
    })
  }
  // Abaixo um exemplo de escutar mudanças nos componentes
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>