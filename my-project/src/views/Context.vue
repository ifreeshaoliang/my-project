<template>
    <div>
        <h1>内容页</h1>
        <h1>{{info}}</h1>
        <navigation-bar/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Context',
  data(){
   return {
     info: null
   }
  },
  mounted(){
    axios.get('http://localhost:8080/user')
          .then(resp => {
                this.info = resp.data;
                console.log(this.info);
            })
            .catch(err => {
                console.log(err);
            })
  }
}
</script>

<style scoped>

</style>
