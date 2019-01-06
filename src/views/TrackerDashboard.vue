<template>
  <div class="page-container">
    <h1>DevOps Wave 1
      <md-chip class="md-primary">{{wave.status}}</md-chip>
    </h1>
    <wave v-bind:wave="wave" />
  </div>
</template>

<script>
import tracker from "../data/tracker.json"
import Wave from "../components/Wave"
let devOpsWave = tracker.devops.waves[0]

export default {
  name: 'TrackerDashboard',
  data: function() {
    return {
      wave : devOpsWave
    }
  },
  components: {
    Wave
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";

.md-card {
  margin-bottom: 18px !important;
}
</style>
