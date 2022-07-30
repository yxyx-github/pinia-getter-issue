import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStore = defineStore('default', () => {
    const sampleArg = ref('hello world')

    const demoGetter = computed(() => sampleArg)
})

/*export const useStore = defineStore('default', {
    state: () => ({
        sampleArg: 'hello world',
    }),

    getters: {
        demoGetter: (state) => state.sampleArg
    }
})*/
