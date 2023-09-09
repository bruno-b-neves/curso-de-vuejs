new Vue({
  el: '#desafio',
  data: {
    nome: 'Bruno Neves',
    idade: 27,
    imgSrc: 'https://e0.pxfuel.com/wallpapers/694/689/desktop-wallpaper-jiraiya-naruto-in-2021-naruto-shippuden-kid-naruto-naruto-iphone-kid-naruto-naruto-jiraiya-naruto-shippuden-kakashi-kid-cute.jpg'
  },
  methods: {
    multiplicarIdade() {
      this.idade = 27 * 3
      return this.idade
    },
    getRandom() {
      return Math.random()
    }
  }
})