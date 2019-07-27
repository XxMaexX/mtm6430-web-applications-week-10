<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Price: &#36;{{ product.price }} | In Stock {{ product.quantity }}
      </h6>
      <p class="card-text">{{ product.description }}</p>
      <!-- The Details anchor tag will bring us to the single product page where we can buy the product -->
      <router-link
        :to="{ name: 'single-product', params: { id: product.id } }"
        class="card-link btn btn-success"
        >Details</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"]
};
</script>