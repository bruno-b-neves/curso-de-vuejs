import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* 
	No metódo Vue.directive vamos criar um ciclo de vida
	que são gatilhos ou Hooks.
	A diretiva tem varias fases e podemos escolher até mais de
	uma para implementar o código relacionado a minha diretiva.
*/
Vue.directive('destaque', {
	bind(el, binding, vnode) {
		// Abaixo passa a cor já definida
		// el.style.backgroundColor = 'lightgreen'
		
		// Abaixo passa utiliza para que a cor seja definida
		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (binding.arg == 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
