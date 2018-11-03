<template>
  <pdf src="./vrittaratnakara-print.pdf"></pdf>
</template>

<script>
import Vue from 'vue'
import pdf from 'vue-pdf'
Vue.component('vue-pdf', pdf)

export default {
  components: {
    pdf
  }
}
