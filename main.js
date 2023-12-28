const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeById(id){
            console.log(id)
           this.cart.filter((itemId) => itemId.id !== id)
           console.log(this.cart)
        }
    }
})
