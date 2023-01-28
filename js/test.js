const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: "./img/nike.webp",
                    name: "Nike Sneakers",
                    price: 830,
                    quantity: 0,
                },
                {
                    id: 2,
                    image: "./img/watch.webp",
                    name: "Watch",
                    price: 9000,
                    quantity: 0,
                },
                {
                    id: 3,
                    image: "./img/nikon.webp",
                    name: "Nikon Camera ",
                    price: 80000,
                    quantity: 0,
                },
            ],
            carts: [],
            toggle: false,
        };
    },
    methods: {
        addCart(id) {
            let isExist = false;
            this.carts.forEach((item) => {
                if (item.id === id) {
                    item.quantity++;
                    isExist = true;
                }
            });
            if (!isExist) {
                const selectedItem = this.products.find(
                    (product) => product.id === id
                );
                selectedItem.quantity = 1;
                this.carts.push(selectedItem);
            }
        },
        toggleBtn() {
            this.toggle = !this.toggle;
        },
        delItem(id) {
            let item = this.carts.find((item) => item.id === id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    this.carts = this.carts.filter((c) => c.id !== id);
                }
            }
        },
    },
});

app.mount("#app");
