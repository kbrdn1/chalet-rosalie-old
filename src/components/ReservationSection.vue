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
        <a :class="styles.link" href="mailto:mickael.collot754@sfr.fr">
          <Icon name="MailCheck" :stroke-width="2" :size="24" />
          mickael.collot754@sfr.fr
        </a>
        <a :class="styles.link" href="tel:+336 74 82 53 29">
          <Icon name="Phone" :stroke-width="2" :size="24" />
          +336 74 82 53 29
        </a>
      </div>
      <div :class="styles.containerRight">
        <form
          action="https://formsubmit.co/mickael.collot754@sfr.fr"
          method="POST"
          :class="styles.form"
        >
          <input type="hidden" name="_next" value="https://chalet-rosalie.com" />
          <input type="hidden" name="_captcha" value="true">
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
          <input
            :class="styles.input"
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Téléphone"
            maxlength="10"
          />
          <div :class="styles.inputGroup">
            <div :class="styles.inputGroupDateRange">
              <label for="dateArrival">Date d'arrivée</label>
              <input
                :class="styles.input"
                type="date"
                id="dateArrival"
                name="dateArrival"
                placeholder="Date d'arrivée"
              />
            </div>
            <div :class="styles.inputGroupDateRange">
              <label for="dateDeparture">Date de départ</label>
              <input
                :class="styles.input"
                type="date"
                id="dateDeparture"
                name="dateDeparture"
                placeholder="Date de départ"
              />
            </div>
          </div>
          <textarea
            :class="styles.textarea"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button :class="styles.buttonSubmit" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as styles from "@/styles/ReservationSection";
import Icon from "@/components/Icon.vue";
</script>
