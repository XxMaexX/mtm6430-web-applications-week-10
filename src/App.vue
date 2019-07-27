<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" activeClass="active" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            activeClass="active"
            :to="{ name: 'products-inventory' }"
          >
            <a class="nav-link">Inventory</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {};
</script>

<style></style>