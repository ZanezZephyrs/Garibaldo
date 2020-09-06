<template>
    <div>

        <h1> Perguntas </h1>

        <voting-list v-bind:l="lista">

        </voting-list>

        <h1> Crie uma nova pergunta </h1>

        <add-forms v-on:childToParent="onChildClick">

        </add-forms>
        <br>
    </div>
</template>

<script>
import voting_list from '../components/voting_list'
import add_pergunta from '../components/add_pergunta_forms'

export default {
    data () {
    return {
      lista:[], // This value is set to the value emitted by the child
    }
  },
    components:{

        "voting-list" : voting_list,
        "add-forms" : add_pergunta

    },
    methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick (value) {
      const obj = value;
      this.lista.push({
        pergunta:obj.titulo_pergunta,
        aberta:false,
        descricao:obj.descricao,
        link:"link",
        autor:"anonymous",
      })

      // make request api


    
    }
  }
}
</script>

<style scoped>
  h1{
    margin-top:20px;
    margin-bottom: 20px;
  }
</style>