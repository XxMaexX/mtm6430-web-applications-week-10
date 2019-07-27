<template>
  <div class="row">
    <h1 class="col-12">Products List</h1>
    <div class="col-sm-4 p-1" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import {mapState} from "vuex";
export default {
    created(){
        this.$store.dispatch("fetchData");
    },
    computed: mapState(["products"]),
    components: {
        ProductCard
    }
};
</script>
