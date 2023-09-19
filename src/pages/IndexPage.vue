<script setup lang="ts">
import QrScanner from 'src/components/QrScanner.vue';
import { ref } from 'vue';

const text = ref('KU9854');
</script>

<template>
  <q-page class="q-pa-md row items-start justify-evenly">
    <qr-scanner />
    <!-- eslint-disable -->
    <q-input outlined v-model="text" prefix="CODE:" class="w-full" style="margin-top: -80px;">
      <template v-slot:after>
        <q-icon name="mdi-magnify" class="bg-primary text-white w-full h-full" style="font-size: 40px;" />
      </template>
    </q-input>
  </q-page>
</template>

<style>
.q-field__after {
  padding: 0;
  width: 60px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
}
</style>
