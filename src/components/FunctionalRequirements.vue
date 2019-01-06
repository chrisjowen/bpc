<template>
    <md-card >
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">Functional Requirements</div>
            </md-card-header-text>
        </md-card-header>
        <md-card-content>
            <md-table>
                <md-table-row>
                    <md-table-head>Requirement</md-table-head>
                    <md-table-head>Status</md-table-head>
                    <md-table-head>Code Review Evidence</md-table-head>
                    <md-table-head>Test Scripts</md-table-head>
                </md-table-row>
                <md-table-row v-for="requirment in requirements">
                    <md-table-cell>
                        <md-icon>toc</md-icon> {{ requirment.id }} </md-table-cell>
                    <md-table-cell>{{ requirment.status }} </md-table-cell>
                    <md-table-cell>
                        <a href="">Pull Review DF12312 </a>
                    </md-table-cell>
                    <md-table-cell>
                        <a href="">Bit Bucket</a>
                    </md-table-cell>
                </md-table-row>
            </md-table>
          
        </md-card-content>
    </md-card>
</template>

<script>
export default {
    name: 'FunctionalRequirments',
    props:  {
        requirements : Array
    }
}
</script>