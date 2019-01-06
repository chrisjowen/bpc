<template>
    <div class="release page-container">
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{domain.name}} </div>
                    <div class="md-subhead">{{domain.domainLeadName}}</div>
                </md-card-header-text>
            </md-card-header>
        </md-card>

        <div class="md-layout">
            <progress-sticker complete="15" total="32" message="agile teams trained" />
            <progress-sticker complete="25" total="32" message="automated testers trained" />
            <progress-sticker complete="19" total="32" message="releases automated" />
        </div>

        <div class="md-layout">
            <md-card class="md-layout-item">
                <md-card-content>
                    <md-table>
                        <md-table-row>
                            <md-table-head>Team</md-table-head>
                            <md-table-head>Latest Release</md-table-head>
                            <md-table-head>Agile Adoption</md-table-head>
                            <md-table-head>DevOps Adoption</md-table-head>
                            <md-table-head>Test Automation Adoption</md-table-head>
                        </md-table-row>
                        <md-table-row v-for="team in domain.teams">
                            <md-table-cell>{{team.projectName}}</md-table-cell>
                            <md-table-cell> <router-link :to="`/teams/${team.id}/release/1.0.0`">1.0.0</router-link></md-table-cell>
                            <md-table-cell><div class="status">In Progress</div></md-table-cell>
                            <md-table-cell><div class="status">In Progress</div></md-table-cell>
                            <md-table-cell><div class="status">In Progress</div></md-table-cell>
                            <md-table-cell>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>
<script>




import ProgressSticker from "../components/ProgressSticker"

import domainData from "../data/domains.json"
import teamsData from "../data/teams.json"

let getDomainById = function(id) {
    let domain = domainData.find(function(domain){
        return domain.id == id
    })
    domain.teams = teamsData.filter((team) => team.domain == domain.id)
    return domain;
}

export default {
    name: 'ReleaseDashboard',
    data: function() {
        let domainId = this.$route.params.id;
        return {
            domain: getDomainById(domainId),
            devopsPercentage: 10
        }
    },
    components: {
        ProgressSticker
    }
}
</script>



<style lang="scss" scoped>
@import "../assets/scss/colors";

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


.sticker {
    text-align: center;
    h1 {
        font-size: 4em;
    }
    h2 {
        font-weight: normal;
    }
}

.status {
    display: block;
    background: $primary;
    color: white;
    text-align: center;
    padding: 9px auto;
    border-radius: 9px;
    max-width: 100px;
}
</style>
