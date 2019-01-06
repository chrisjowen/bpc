<template>
    <div>
        <md-tabs @md-changed="afterTabSelection">
            <md-tab id="tab-pages" md-label="Overview">
                <md-card class="requirements">
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">{{release.team.projectName}}</div>
                            <div class="md-subhead">Release version - {{release.version}}</div>
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-content>
                        <ul class="status-info">
                            <li>
                                <md-icon>flight</md-icon> 3 days from now
                            </li>
                            <li>
                                <md-icon>description</md-icon>
                                <a href="#">Business requirmement document 2018.doc</a>
                            </li>
                            <li>
                                <md-icon>announcement</md-icon> In Progress
                            </li>
                        </ul>
                    </md-card-content>
                </md-card>
                <!-- <md-card class="sdf_checks">
                    <md-card-content>
                        <md-list>
                            <md-subheader>SDF Documents For Release</md-subheader>
                            <md-list-item>
                                <md-checkbox checked disabled />
                                <span class="md-list-item-text">
                                    <a href="#">Test stratergy verson 1.0.0.docx</a> - Reviewed</span>
                            </md-list-item>
                            <md-list-item>
                                <md-checkbox value="sound" />
                                <span class="md-list-item-text">System Architecture Reviewed</span>
                            </md-list-item>
                            <md-list-item>
                                <md-checkbox value="sound" />
                                <span class="md-list-item-text">
                                    <md-button class="md-raised md-primary">Generate Code Review</md-button>
                                </span>
                            </md-list-item>
                            <md-list-item>
                                <md-checkbox value="sound" />
                                <span class="md-list-item-text">
                                    <md-button class="md-raised md-primary">Generate FR Report</md-button>
                                </span>
                            </md-list-item>
                            <md-list-item>
                                <md-checkbox value="sound" />
                                <span class="md-list-item-text">
                                    <md-button class="md-raised md-primary">Generate Test Closure Report</md-button>
                                </span>
                            </md-list-item>
                        </md-list>
                    </md-card-content> -->
                </md-card>
                <md-card class="other-releases right">
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">Other Releases for BRD</div>
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-content>
                        <md-table>
                            <md-table-row>
                                <md-table-head>Release ID</md-table-head>
                                <md-table-head>Status</md-table-head>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>1.0.0</md-table-cell>
                                <md-table-cell>Released</md-table-cell>
                            </md-table-row>
                            <md-table-row>
                                <md-table-cell>0.0.9</md-table-cell>
                                <md-table-cell>Failed</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </md-tab>
            <md-tab id="tab-requirements" md-label="Functional Requirements">
                <div class="md-layout">
                    <functional-requirements v-bind:requirements="requirements" class="md-layout-item" />
                    <md-card class="tracker md-layout-item">
                        <md-card-content>
                            <div class="quality">
                                <apexchart height="400px" type="pie" ref="chart" :options="chartOptions" :series="series"></apexchart>
                            </div>
                        </md-card-content>
                    </md-card>
                </div>
            </md-tab>
            <md-tab id="tab-home" md-label="Testers">
                <test-team-list v-bind:testers="testers" ref="team" />
            </md-tab>
        </md-tabs>
        <div class="release page-container">
        </div>
    </div>
</template>

<script>
import TestTeamList from '../components/TestTeamList'
import FunctionalRequirements from '../components/FunctionalRequirements'
import testersData from "../data/testers.json"
import teamsData from "../data/teams.json"

let requirements = [{
    id: "DF123",
    board: "DF",
    status: "DONE"
}, {
    id: "DF124",
    board: "DF",
    status: "DONE"
}, {
    id: "DF125",
    board: "DF",
    status: "DONE"
}, {
    id: "DF126",
    board: "DF",
    status: "In Progress"
}];


export default {
    name: 'ReleaseDashboard',
    components: {
        TestTeamList,
        FunctionalRequirements
    },
    data() {
        let teamId = this.$route.params.teamId;
        let team = teamsData.find((team) =>  team.id == teamId )
        let release = {
            team,
            version : this.$route.params.version
        }
        return {
            requirements,
            testers: testersData,
            release ,
            chartOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                labels: ['Previous Test Coverage', 'Test Coverage This Release', 'Missing Coverage'],
                legend: {
                    position: 'bottom'
                }
            },
            series: [70, 25, 5]
        }
    },
    mounted() {
        console.log(this.$refs)
        this.$refs.chart.refresh()
    },
    methods: {
        afterTabSelection: function() {
            console.log(this.$refs)
            this.$refs.chart.refresh()
            this.$refs.team.refreshChart()
        }
    }
}
</script>



<style lang="scss" scoped>
@import "../assets/scss/colors";

.status-info {
    list-style: none;
    padding: 0;

    li {
        margin: 9px;
    }
}

.coverage-badges {
    display: flex;
    .coverage-badge {
        font-size: 1.2em;
        padding: 20px;
        margin: 20px;
        border-radius: 20px;
        flex: 1;
        text-align: center;
    }
}

.md-card {
    margin-bottom: 18px !important;
}

.md-layout {
    .md-layout-item:nth-child(1) {
        margin-left: 0;
    }
    .md-layout-item {
        margin-left: 18px;
    }
}

.options {
    text-align: center;
    margin-top: 9px;
}

.sdf_checks .md-list-item-text * {
    width: inherit
}
</style>
