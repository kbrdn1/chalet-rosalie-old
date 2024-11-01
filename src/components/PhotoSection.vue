<template>
  <section id="photos" :class="styles.root">
    <h2 :class="styles.title">Photos</h2>
    <div :class="styles.container">
      <Carousel selector />
    </div>
  </section>
</template>

<script setup lang="ts">
import * as styles from "@/styles/PhotoSection";
import Carousel from "@/components/CarouselPhoto.vue";
</script>
