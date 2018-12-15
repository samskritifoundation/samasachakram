<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex md6>
      <div class="text-xs-center">
    <sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" subtitle2="An organisation engaged in the preservation, revival and propagation of the Indian Knowledge Systems and Cultural and Scientific Heritage of India" />
    </div>
    <v-card color="transparent" flat>
      <v-card-text class="subheading font-weight-black text-xs-center">
      <h3>Credits</h3>
      <p>English translations are based on the translation available <a href="https://www.sanskritworld.in/pages/detail/pagename/samasa">here</a> and <a href="https://en.wikipedia.org/wiki/Sanskrit_compound#Aluk-sam%C4%81sa">here</a></p>
    </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sflogo from '../components/SFLogo.vue'
export default {
  components: {
    sflogo
  }
}
</script>