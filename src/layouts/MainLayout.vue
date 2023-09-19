<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('mails');
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <!-- eslint-disable-next-line -->
    <q-toolbar class="text-grey-8">
      <q-btn flat round dense icon="mdi-bell" />
      <q-toolbar-title class="text-center">
        <strong>Store App</strong>
      </q-toolbar-title>
      <q-btn flat round dense icon="mdi-account-circle-outline">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Editar mi perfil</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Contactar con soporte</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Cerrar sesión</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- eslint-disable -->
    <div class="q-gutter-y-md" style="width: 100%;position: fixed; left:0; bottom: 0; box-shadow: 0px -2px 4px #E6E6E6; background: #fff">
      <q-tabs v-model="tab" class="text-grey-7" id="pau-tabs" style="margin-top: 0;">
        <q-route-tab name="mails" icon="mdi-shopping-outline" label="Ventas" active-class="hi"/>
        <q-route-tab exact to="/inventory" name="alarms" icon="mdi-notebook-edit-outline" label="Inventario" active-class="hi"/>
        <q-route-tab exact name="movies" icon="mdi-cloud-search-outline" label="Buscar" active-class="hi"/>
        <q-route-tab exact to="/" name="movies" icon="mdi-qrcode" label="Home" active-class="hi"/>
      </q-tabs>
    </div>
  </q-layout>
</template>

<style>
#pau-tabs .q-tab__label {
  font-size: 11px;
}
.hi {
  color: #656CE4;
  font-weight: 900;
}
</style>
