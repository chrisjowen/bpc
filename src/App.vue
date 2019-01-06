<template>
  <div id="app">
    <md-toolbar class="md-primary" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button>Refresh</md-button>
      <md-button class="md-primary">Create</md-button>
    </md-toolbar>
    <router-view/>
  </div>
</template>

<style lang="scss" >
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@import "./src/assets/scss/colors";
@include md-register-theme("default",( 
  primary: $primary,
));

@import "~vue-material/dist/theme/all";

#app {
  .md-content {
    background: $light-gray;
  }
  .md-drawer {
    width: 200px;
  }
  .page-container {
    margin: 18px;
  }
}
</style>
