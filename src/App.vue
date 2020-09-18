<template>
  <v-app>
    <Timer />

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Timer from './components/Timer';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Timer,
  },

  data: () => ({
    //
  }),
};
</script>
