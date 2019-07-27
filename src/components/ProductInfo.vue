<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>Description: {{ product.description }} </p>
        <p>Price: &#36; {{ product.price }} </p>
        <p>Quantity: {{ product.quantity }} </p>
        <input type="number" v-model="quant">
        <button :disabled="product.quantity < quant || quant === 0 || quant === ''" class="btn btn-info" @click="updateProducts" >Buy</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return {
            quant: 0
        };
    },
    props: ["product"],
    methods: {
        ...mapActions(["buyProducts"]),
        updateProducts() {
            // dispatch an action to update the quantity
            //this.$store.dispatch('buyProducts, this.qunt')
            this.buyProducts({ quantity: this.quant, product: this.product });
            this.quant = 0;
        }
    }
};
</script>
