<script setup lang="ts">
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'

</script>

<template>
    <myHeader />
  <router-view> </router-view>
  <myFooter />
</template>


