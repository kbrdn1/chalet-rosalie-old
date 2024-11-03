<template>
  <header :class="styles.root">
    <div :class="styles.side.left">
      <div :class="styles.content.container">
        <h1 :class="styles.content.title">
          Votre Refuge de Sérénité au Cœur des Vosges!
        </h1>
        <p :class="styles.content.text">
          Plongez au cœur de la nature préservée des Vosges et laissez-vous
          envelopper par la tranquillité du Chalet Rosalie, un refuge où le
          calme et le confort se rencontrent pour une expérience unique et
          apaisante.
        </p>
        <div :class="styles.content.box">
          <div v-for="item in hItems" :class="styles.content.boxItem">
            <div :class="styles.content.boxTitleContainer">
              <Icon
                :name="item.icon"
                color="#ADC178"
                :stroke-width="2"
                :size="32"
              />
              <p :class="styles.content.boxTitle">
                {{ item.title }}
              </p>
            </div>
            <p :class="styles.content.boxText">
              {{ item.text }}
            </p>
          </div>
          <button :class="styles.content.boxButton">
            <a href="#reservation">Réserver</a>
          </button>
        </div>
      </div>
      <div :class="styles.indicator.container">
        <div :class="styles.indicator.arrow.container">
          <Icon
            name="Minus"
            color="#A98467"
            :stroke-width="2"
            :size="32"
            :class="styles.indicator.arrow.extension"
          />
          <Icon name="ArrowDown" color="#ADC178" :stroke-width="2" :size="32" />
        </div>
        <p :class="styles.indicator.text">Glissez pour découvrir</p>
      </div>
    </div>
    <div :class="styles.side.right"></div>
  </header>
</template>

<script setup lang="ts">
import styles from "@/styles/Header";
import Icon from "@/components/Icon.vue";
import hItems from "@/constants/headerItems";
</script>
