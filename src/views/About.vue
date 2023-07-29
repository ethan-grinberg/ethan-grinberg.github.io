<template>
    <h1>
        About
    </h1>
</template>
  
<script>
import {useAppStore} from '@/store/app'

export default {
    name: "AboutView",
    components: {
    
    },
    setup() {
        const store = useAppStore();
        return {
            store
        }
    },

    created() {
        console.log(this.store.resume.basics.name);
    }
}
</script>
  