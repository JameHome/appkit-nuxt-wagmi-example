import { defineNuxtPlugin } from '#imports'
import { createAppKit } from '@reown/appkit/vue'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { wagmiAdapter, projectId, networks } from '~/config/wagmi'


export default defineNuxtPlugin(() => {
    createAppKit({
        adapters: [wagmiAdapter],
        networks,
        projectId,
        themeMode: 'light',
        metadata: {
            name: 'AppKit Nuxt Example',
            description: 'AppKit Nuxt Example',
            url: 'https://reown.com/appkit',
            icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
        }
    });
})