<template>
  <section id="about" :class="styles.root">
    <div :class="styles.carousel">
      <Carousel />
    </div>
    <div :class="styles.container">
      <h2 :class="styles.containerTitle">A propos</h2>
      <div :class="styles.content">
        <p>
          Amoureux de la nature, proche des cascades, lacs et sentiers, le
          Chalet Rosalie vous garantit un séjour réussi grâce à son emplacement
          au calme, son équipement (jeux de société, chaises longues et
          transats) et une grande terrasse sans vis-à-vis pour vous poser au
          soleil...<br /><br />
          Depuis la terrasse, une vue imprenable sur la vallée s’offre à
          vous.<br /><br />
          Idéal pour 6 personnes et un bébé.<br /><br />
          Deux chambres avec un lit de 140x190, une mezzanine avec 2 lits
          90x190, un salon avec un coin repas et une cuisine équipée.
        </p>
      </div>
      
      <div :class="styles.box">
      <div v-for="item in aItems" :class="styles.boxItem">
        <div :class="styles.boxTitleContainer">
          <Icon
            :name="item.icon"
            color="#F0EAD2"
            :stroke-width="2"
            :size="32"
          />
          <p :class="styles.boxTitle">
            {{ item.title }}
          </p>
        </div>
        <p :class="styles.boxText">
          {{ item.text }}
        </p>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as styles from "@/styles/AboutSection";
import Icon from "@/components/Icon.vue";
import aItems from "@/constants/AboutItems";
import Carousel from "@/components/CarouselPhoto.vue";
</script>
