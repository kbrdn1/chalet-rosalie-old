<template>
  <div :class="styles.root">
    <div :class="styles.container({ view: selector ? 'selector' : null })">
      <button @click="handleClickPrev" :class="styles.button" style="left: 0">
        <Icon name="ChevronLeft" :stroke-width="2" :size="24" color="#fff" />
      </button>
      <div :class="styles.imageContainer">
        <img :src="selected" alt="display" :class="styles.image" />
      </div>
      <button @click="handleClickNext" :class="styles.button" style="right: 0">
        <Icon name="ChevronRight" :stroke-width="2" :size="24" color="#fff" />
      </button>
    </div>
    <div v-if="selector" :class="styles.imageSelectionContainer">
      <div v-for="img in photos" :class="styles.imageSelectionElement">
        <img
          :key="img"
          :value="img"
          :src="img"
          :class="styles.imageSelection"
          :aria-selected="selected === img"
          @click="handleClickSelection"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as styles from "@/styles/CarouselPhoto";
import Icon from "@/components/Icon.vue";
import type { CarouselPhotoProps } from "@/types";
import { photos } from "@/constants/carousel";
import { ref } from "vue";

const { selector } = defineProps<CarouselPhotoProps>();

// Initially selected photo
const selected = ref<string>(photos[3]);

// Navigate to the previous photo
const handleClickPrev = () => {
  const currentIndex = photos.indexOf(selected.value);
  const newIndex = (currentIndex - 1 + photos.length) % photos.length;
  selected.value = photos[newIndex];
};

// Navigate to the next photo
const handleClickNext = () => {
  const currentIndex = photos.indexOf(selected.value);
  const newIndex = (currentIndex + 1) % photos.length;
  selected.value = photos[newIndex];
};

// Select a specific photo from the thumbnails
const handleClickSelection = (e: MouseEvent) => {
  const imgElement = e.target as HTMLImageElement;
  if (imgElement && imgElement.src) {
    selected.value = imgElement.src;
  }
  console.log(selected.value);
};
</script>
