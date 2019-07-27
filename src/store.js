import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
      // update the product quantity in the state
      
    },
    PRODUCTS_SOLD(state, data) {
      const productIndex = this.getters.getProductIndex(data.product.id);
      state.products[productIndex].quantity -= data.quantity;

      // the line above is same as writing this
      // state.products[productIndex].quantity = data.quantity;
      // [productIndex].quantity- data.quantity;

      // Make API call to update the DB
      axios.put("https://agan0003-week-10.firebaseio.com/products.json", state.products)
      .then(response => {
        console.log("your data was updated " + response.status);
      })
      .catch(error => {
        console.log("there was an issue saving your data "+ error.response);
      });
    }
  },
  PRODUCT_QUANTITY(state, data) {
    const productIndex = this.getters.getProductIndex(data.product.id);
    state.products[productIndex].quantity = data.quantity;
    axios
      .put(
        "https://agan0003-week-10.firebaseio.com/products.json",
        state.products
      )
      .then(response => {
        console.log("your data was updated" + response.status);
      });
  },
  actions: {
    fetchData({commit}){
      axios
      .get("https://agan0003-week-10.firebaseio.com/products.json")
      .then(response => {
        commit("SET_PRODUCTS", response.data);
      });
  },
  buyProducts({ commit }, { quantity, product }) {
    commit("PRODUCTS_SOLD", { quantity, product });
  },
  updateQuantity({ commit }, { quantity, product }) {
    commit("PRODUCT_QUANTITY", { quantity, product });
  }
},
getters: {
  getProductById: state => id => {
    return state.products.find(product => product.id === id);
  },
  getProductIndex: state => id => {
    return state.products.findIndex(product => product.id === id);
  }
}
});
