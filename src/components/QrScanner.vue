<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Html5Qrcode } from 'html5-qrcode';

const qrFound = ref(false);
const decodedQR = ref('');

onMounted(() => {
  const html5QrCode = new Html5Qrcode('reader');
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  const qrCodeSuccessCallback = (decodedText: string, decodedResult: object) => {
    if (decodedText) {
      html5QrCode.stop().then((ignore) => {
        qrFound.value = true;
        decodedQR.value = decodedText;
      }).catch((err) => {
        console.info(err);
      });
    }
  };

  html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback);
});

</script>

<template>
  <div v-if="!qrFound" id="reader" class="w-full" style="border-radius: 8px;
    overflow: hidden;"></div>
  <div v-else class="column items-center" style="margin-top: 100px;">
    <q-spinner-gears color="primary" style="font-size: 6rem; margin-bottom: 10px" />
    <span class="text-overline">Buscando...</span>
    <q-badge outline color="primary" :label="decodedQR" />
    <span class="text-cyan text-overline"></span>
  </div>
</template>
