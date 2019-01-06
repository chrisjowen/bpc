<template>
    <md-card class="md-layout-item sticker">
        <md-card-content>
            <h1>{{complete}}/{{total}}</h1>
            <h2>{{message}}</h2>
            <md-progress-bar md-mode="determinate" :md-value="percentage" ></md-progress-bar>
        </md-card-content>
    </md-card>
</template>


<script>
export default {
    name: 'ProgressSticker',
    data: function() {
        let percentage = (100 / this.total) * this.complete
        return { percentage }
    },
    props: {
        complete: Number,
        total: Number,
        message: String
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";

.sticker {
    text-align: center;
    h1 {
        font-size: 4em;
    }
    h2 {
        font-weight: normal;
    }
}
</style>
