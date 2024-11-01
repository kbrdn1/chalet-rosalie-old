<template>
  <footer :class="styles.root">
    <div :class="styles.footerLeft">
      <a href="/" :class="stylesNavbar.title.link">
      <img src="/logo.svg" alt="Logo" :class="stylesNavbar.title.logo" />
      <p :class="stylesNavbar.title.text">Chalet Rosalie</p>
      </a>
      <a :class="stylesReservation.link" href="mailto:contact@chalet-rosalie.fr">
        <Icon name="MailCheck" :stroke-width="2" :size="24" />
        contact@chalet-rosalie.fr
      </a>
      <a :class="stylesReservation.link" href="tel:+336 74 82 53 29">
        <Icon name="Phone" :stroke-width="2" :size="24" />
        +336 74 82 53 29
      </a>
    </div>
    <div :class="styles.footerRight">
    <ul :class="styles.list">
      <li v-for="item in list" :class="styles.item">
        <a :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import * as styles from "@/styles/Footer";
import stylesNavbar from "@/styles/Navbar";
import * as stylesReservation from "@/styles/ReservationSection";
import Icon from "@/components/Icon.vue";
import list from "@/constants/navList";
</script>
a
