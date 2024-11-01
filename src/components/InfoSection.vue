<template>
  <section :class="styles.root">
    <iframe
      :class="styles.map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39433.82743101446!2d6.936044886240679!3d48.072629309115975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793c443b02861a1%3A0x5727c106479f717!2s88400%20Xonrupt-Longemer!5e1!3m2!1sfr!2sfr!4v1730459914356!5m2!1sfr!2sfr"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div :class="styles.container">
      <div :class="styles.containerItems">
        <div v-for="item in itemsLeft" :class="styles.item">
          <Icon :name="item.icon" :stroke-width="2" :size="50" />
          {{ item.text }}
        </div>
      </div>
      <div :class="styles.containerText">
        Notre chalet situé au coeur de la commune de Xonrupt-Longemer à 720
        mètres d’altitude proches de nombreuses commodités et à 2.5 kms du Lac
        de Xonrupt-Longemer.<br />
        Rosalie est un chalet mitoyen orienté avec une vue dégagée sur la vallée
        et la montagne .<br />
        Nous sommes au départ de nombreux sentiers de randonnées pédestres, VTT
        vers les jolies forets Vosgiennes ...<br />
        Dans une nature préservée et sauvage, vous pourrez aussi vous reposer et
        vous ressourcer ...<br />
        De nombreux commerces et services a 20 minutes à pied du chalet
        (boulangerie, pharmacie, traiteur, bureau de tabac, médecin, etc...)<br />
      </div>
      <div :class="styles.containerItems">
        <div v-for="item in itemsRight" :class="styles.item">
          <Icon :name="item.icon" :stroke-width="2" :size="50" />
          {{ item.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as styles from "@/styles/InfoSection";
import Icon from "@/components/Icon.vue";

const itemsLeft = [
  {
    icon: "Bike",
    text: "VTT",
  },
  {
    icon: "Backpack",
    text: "Randonnée",
  },
];

const itemsRight = [
  {
    icon: "CableCar",
    text: "Station de ski",
  },
  {
    icon: "Sailboat",
    text: "Lac",
  },
];
</script>
