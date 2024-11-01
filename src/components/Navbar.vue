<template>
  <nav :class="styles.root">
    <div :class="styles.title.container">
      <a href="/" :class="styles.title.link">
        <img src="/logo.svg" alt="Logo" :class="styles.title.logo" />
        <p :class="styles.title.text">Chalet Rosalie</p>
      </a>
    </div>
    <ul :class="styles.list.container">
      <li v-for="item in list" :class="styles.list.item">
        <a :href="item.path" :class="styles.list.link">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import styles from "@/styles/Navbar";
import list from "@/constants/navList";
</script>
