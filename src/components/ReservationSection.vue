<template>
  <section id="reservation" :class="styles.root">
    <h2 :class="styles.title">Réservation</h2>
    <div :class="styles.containerGroup">
      <div :class="styles.containerLeft">
        <p>
          Nous serons heureux de vous accueillir.
          <br />
          Nous sommes très attentif a vos demandes et vous apporterons une
          réponse rapide.
        </p>
        <a :class="styles.link" href="mailto:contact@chalet-rosalie.fr">
          <Icon name="MailCheck" :stroke-width="2" :size="24" />
          contact@chalet-rosalie.fr
        </a>
        <a :class="styles.link" href="tel:+336 74 82 53 29">
          <Icon name="Phone" :stroke-width="2" :size="24" />
          +336 74 82 53 29
        </a>
      </div>
      <div :class="styles.containerRight">
        <form action="" :class="styles.form">
          <div :class="styles.inputGroup">
            <input
              :class="styles.input"
              type="text"
              id="nom"
              name="nom"
              placeholder="Nom"
            />
            <input
              :class="styles.input"
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Prénom"
            />
          </div>
          <input
            :class="styles.input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            :class="styles.textarea"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as styles from "@/styles/ReservationSection";
import Icon from "@/components/Icon.vue";
</script>
