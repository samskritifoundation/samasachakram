<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex xs12 sm8 md8>
      <div class="text-xs-center">
<sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" />
      </div>
      <v-card class = "bordered text-xs-center" color="primary" dark>
        <v-card-title class="myheader2 papyrus text-xs-center">Mathematics in Sanskrit Prosody</v-card-title>
        <v-card-actions>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" nuxt to="/" large>Binomial Theorem</v-btn>
           <v-spacer></v-spacer>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" nuxt to="/" large>Pascal's Triangle</v-btn>
          <v-spacer></v-spacer>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" nuxt to="/" large>Computer Applications</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sflogo from '../components/SFLogo.vue'
export default {
  data: () => {
    return {
      dialog: false
    }
  },
  components: {
    sflogo
  }
}
</script>

<style scoped>
.bordered {
      border: 10px solid transparent;
-webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
    -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
    border-image: url('~/assets/img/border.png') 30 round;
    border-radius: 15px;
    margin:0;
    padding: 2%;
}

.bg1 {
  background:linear-gradient(0deg,rgba(241, 241, 171, 0.5),rgba(255, 255, 255, 0.2)),url(~/assets/img/bg3.jpg) no-repeat;
  background-size: cover;
  color: darkred;
}
</style>
