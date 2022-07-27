/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
    return {
        theme: {
            dark: 'monokai',
            light: 'solarized-light',
            // light: 'min-light',
        },
    }
})
