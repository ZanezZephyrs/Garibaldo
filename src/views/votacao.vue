<template>
    <div>
        <h1> Perguntas </h1>
        <voting-list>

        </voting-list>
        
    </div>
</template>

<script>
import voting_list from '../components/voting_list'
export default {

    components:{

        "voting-list" : voting_list
    }
}
</script>

<style scoped>
  h1{
    margin-bottom: 10px;
  }
</style>