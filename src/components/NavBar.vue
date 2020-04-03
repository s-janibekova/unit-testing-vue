<template>
    <div>
        <button v-show="loggedIn">Loggout</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loggedIn: false
            }
        }  
    }
</script>

<style lang="css" scoped>

</style>