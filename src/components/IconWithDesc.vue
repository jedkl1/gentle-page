<template>
    <v-flex class="strongPoint" xs6 sm4 md4>
        <i class="material-icons md-64">{{image}}</i>
        <span class="text__normal"> {{description}} </span>
    </v-flex>
</template>

<script>
    export default {
        name: 'IconWithDescription',
        props: {
            image: {
                type: String,
                default: ""
            },
            description: {
                type: String,
                default: "Some description"
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .strongPoint {
        color: grey;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        padding: 16px;
        .material-icons {
            padding: 16px;
            &.md-64 {
                font-size: 64px;
            }
        }
        span {
            text-align: center;
            max-width: 340px;
        }
    }

</style>
