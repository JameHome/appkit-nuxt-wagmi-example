<script setup lang="ts">
import { createAppKit } from '@reown/appkit/vue'
import { mainnet, polygon, base } from '@reown/appkit/networks'
import { wagmiAdapter, projectId, networks } from './config/wagmi'
import { useDisconnect } from "@reown/appkit/vue";
import { useAppKit } from "@reown/appkit/vue";
import { connect } from '@wagmi/core';

const { disconnect } = useDisconnect();
const handleDisconnect = () => {
  disconnect();
}



if (import.meta.client) {
  useWalletEvents();
}


</script>
<template>
  <client-only>
    <appkit-button />
    <appkit-network-button />
    <button @click="handleDisconnect">Disconnect</button>
    <Connect />
  </client-only>
</template>
