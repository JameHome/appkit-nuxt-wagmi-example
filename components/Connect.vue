<script setup lang="ts">
import { useAppKit } from "@reown/appkit/vue";

const { open } = useAppKit();
const openModal = () => {
    open({
        view: "Connect"
    })
}

</script>
<template>
    <div>
        <button @click="openModal">Open Modal</button>
    </div>
</template>
