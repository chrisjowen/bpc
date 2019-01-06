<template>
  <md-card class="tracker">
    <md-card-content>
      <table>
        <tr>
          <th v-for="team in teams">
            {{ team.team }}
          </th>
        </tr>
        <tr v-for="stage in stages">
          <td v-for="team in teams" class="status waves-effect waves-light" :class="status(team, stage)" >
            <a href="">{{stage}}</a>
          </td>
        </tr>
      </table>
    </md-card-content>
  </md-card>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Tracker',
  data: function() {
    var teams = this.wave.teams;
    var stages = _.chain(teams)
      .flatMap((t) => { return t.stages })
      .map((s) => { return s.name })
      .uniq().value();

    return { teams, stages }
  },
  props: {
    wave: Object
  },
  methods: {
    status: function(item, stageName) {
      let stage = item.stages.find((s) => s.name == stageName)
      return ((stage) ? stage.status : "NOT_APPLICABLE").toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";
body .tracker {
  .status {
    &.done {
      background: $success;
      color: $white;
    }
    &.in_progress {
      background: $in-progress;
      color: $white;
    }
    &.not_started {
      background: $not_started;
    }
    &.not_applicable {
      background: $gray;
      color: $white;
    }
    &.blocked {
      background: $blocked;
      color: $white;
    }
  }
  .md-card-header {
    background: $accent;
    color: white;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  td {
    border-right: solid 1px white;
    border-bottom: solid 1px white;
    text-align: center;
      a {
        display: block;
        width:100%;
        height:100%;
        text-decoration: none;
        color: white;
        padding:18px;
        &:hover {
          background: $primary;
          color: white;
        }

      }
  }
  th {
    border-bottom: solid 1px white;
    border-right: solid 1px white;
    text-align: center;
    padding: 18px;
    background: black;
    color: white;
  }
  th:last-child,
  td:last-child {
    border-right: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
}
</style>
