<template>
  <Navbar />
  <section class="flex-1">
    <router-view />
  </section>
  <Footer />
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<style lang="scss">
  .underlineActive {
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #ffffff;
      transition: all 0.3s ease-in-out;
    }

    &:hover:after {
        width: 100%;
    }
  }
</style>
