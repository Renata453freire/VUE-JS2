new Vue({
    el: '#desafio',
    data: {
        nome: 'Renata', 
        idade: '68',
        imagem: 'https://www.petroeng.com.br/site/public/images/slider/sagip-icon-slider.png'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        
            random() {
                return Math.random()
         }    
    }
})