<template>
  <div id="app">
    <Backtop>
      <router-view></router-view>
    </Backtop>
  </div>
</template>

<script>
import Backtop from "./components/Backtop";
export default {
  name: 'App',
  components: {
    Backtop
  }
}
</script>

