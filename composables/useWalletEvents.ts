import { onMounted, onUnmounted } from 'vue'
import { useAccount, useAccountEffect } from '@wagmi/vue'
import { useAppKitAccount } from "@reown/appkit/vue";
import { useDisconnect } from "@reown/appkit/vue";
// import { useAppKit } from '@reown/appkit/vue';
export function useWalletEvents() {
    const { disconnect } = useDisconnect();
    const accountData = useAppKitAccount()
    useAccountEffect({
        onConnect(data) {
            console.log('✅✅✅✅✅✅✅✅ Connected!连接上了!-----', data)
            // useWalletLogin()
        },
        onDisconnect() {
            console.log('❌❌❌❌❌❌❌❌ DisConnected!-----',)
        },
    })
}