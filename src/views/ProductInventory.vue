<template>
    <div>
        <h1>Product Inventory</h1>
        <table class="table">
            <thead>
             <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <input v-model="product.quantity" />
          </td>
          <td>
            <button
              @click="sendQuantity(product.quantity, product)"
              class="btn btn-warning"
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapState(["products"]),
  methods: {
    ...mapActions(["updateQuantity"]),
    sendQuantity(quantity, product) {
      this.updateQuantity({ quantity: quantity, product: product });
    }
  }
};
</script>
