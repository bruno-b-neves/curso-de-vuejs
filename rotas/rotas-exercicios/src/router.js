import Vue from 'vue'
import Router from 'vue-router'

import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

import Inicio from './components/Inicio.vue'
// import Usuario from './components/usuarios/Usuario.vue'
// import UsuarioLista from './components/usuarios/UsuarioLista'
// import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe'
// import UsuarioEditar from './components/usuarios/UsuarioEditar'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */ './components/usuarios/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuarios/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */ './components/usuarios/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuarios/UsuarioEditar')

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else if(to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      name: 'inicio',
      path: '/',
      // component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    }, {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt,
      },
      props: true,
      children: [
        { path: '', component: UsuarioLista },
        { path: ':id', component: UsuarioDetalhe, props: true,
          beforeEnter: (to, from, next) => {
            console.log('antes da rota -> usuario detalhe')
            next()
          } },
        { path: ':id/editar', component: UsuarioEditar, props: true,
          name: 'editarUsuario' },
      ]
    }, {
      path: '/redirecionar',
      redirect: '/usuario'
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  next()
})

export default router