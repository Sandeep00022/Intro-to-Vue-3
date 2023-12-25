const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            varients:[
                {id:2234, color: 'green'},
                {id:2235, color: 'bule'},
            ],
            sizes: ["small", "medium", "large"],
        }
    }
})
