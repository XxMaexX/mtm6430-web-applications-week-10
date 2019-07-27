import Vue from "vue";
import Router from "vue-router";
import Products from "./views/ProductsList.vue";
import SingleProduct from "./views/SingleProduct.vue";
import ProductsInventory from "./views/ProductInventory.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Products
    },
    {
      path: "/product/:id",
      name: "single-product",
      component: SingleProduct,
      props: true
    },
    {
      path: "/inventory",
      name: "products-inventory",
      component: ProductsInventory
    }
  ]
});
