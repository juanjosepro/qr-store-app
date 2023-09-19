<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-pa-md column items-center justify-center">
        <div class="column full-width">
          <div class="row">
            <q-card class="q-pa-sm full-width" style="height: 500px;">
              <q-card-section>
                <div class="text-h6 text-grey text-center">Our Changing Planet</div>
                <div class="text-subtitle2 text-grey text-center">by Juan José Pau</div>
              </q-card-section>
              <q-card-section class="q-mb-md">
                <q-form class="q-gutter-md">
                  <q-input class="q-mb-md" type="email" outlined v-model="email" label="Email" />
                  <q-input type="password" outlined v-model="password" label="Password" />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md q-mb-md">
                <q-btn unelevated color="primary" size="md" class="full-width" label="Ingresar" />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6">Not reigistered? Created an Account</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
