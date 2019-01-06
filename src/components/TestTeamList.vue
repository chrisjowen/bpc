<template>
    <div>
        <md-card>
            <md-card-content>
                <apexchart height="200px" type="bar" ref="teamChart" :options="chartOptions" :series="series"></apexchart>
            </md-card-content>
        </md-card>
        <h1>Testers</h1>

        <div class="md-layout">
            <div v-for="tester in testers" md-with-hover class="md-layout-item">
                <md-card class="user-card">
                    <md-ripple>
                        <md-card-header>
                            <md-card-header-text>
                                <div class="md-title">{{tester.name}}</div>
                                <div class="md-subhead">{{tester.psid}}</div>
                            </md-card-header-text>
                            <md-card-media>
                               <md-icon class="md-size-3x">account_box</md-icon>
                            </md-card-media>
                        </md-card-header>
                        <md-card-content>
                            <md-table>
                            <md-table-row>
                                <md-table-head>Date</md-table-head>
                                <md-table-head>Source</md-table-head>
                                <md-table-head>Score</md-table-head>
                            </md-table-row>
                            <md-table-row v-for="test in tester.tests">
                                <md-table-cell>{{test.date}}</md-table-cell>
                                <md-table-cell>{{test.type}}</md-table-cell>
                                <md-table-cell>{{test.score}}</md-table-cell>
                            </md-table-row>
                            </md-table>
                        </md-card-content>
                    </md-ripple>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'TestTeamList',
    data() {
        let statistics = this.testers.reduce(function(stats, tester) {
            let score = tester.tests[0].score.toLowerCase();
            let s = score == "undefined" ? "unknown" : score;
            stats[s] = stats[s] + 1;
            return stats;

        }, { advanced: 0, intermediate: 0, novice: 0, unknown: 0 });

        let data = Object.keys(statistics).map((key) => statistics[key])
        let categories = Object.keys(statistics)

        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: categories
                }
            },
            series: [{
                name: 'series-1',
                data: data
            }]
        }
    },
    props: {
        testers: Array
    },
    methods: {
        refreshChart: function() {
            console.log("here")
            console.log(this.$refs.teamChart)
            this.$refs.teamChart.refresh()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";

.md-card {
    margin-bottom: 18px !important;
}

.user-card {
    height:300px;
    margin-right: 18px;
}

</style>
