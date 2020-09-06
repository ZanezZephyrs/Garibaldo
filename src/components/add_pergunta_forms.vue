<template>
  <form id="question_form" @submit.prevent="processForm">
    <v-text-field
      v-model="titulo_pergunta"
      :error-messages="nameErrors"
      :counter="100"
      label="titulo"
      required
      
    ></v-text-field>
     <v-textarea
        v-model="descricao"
          name="descricao"
          label="Descricao"
        ></v-textarea>
    <v-text-field
      v-model="resp1"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 1"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="resp2"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 2"
      required
    ></v-text-field>
    <v-text-field
      v-model="resp3"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 3(opcional)"
      required
    ></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
  </form>

</template>

<script>
export default {
  data(){
      return{
          titulo_pergunta:" ",
          descricao:" ",
          resp1:" ",
          resp2:" ",
          resp3:" ",
      }

  },

  methods:{
    submit(){
      this.$emit('childToParent', this)}
  },

  props: {
    msg: String
  }
}
</script>

<style scoped>
    #question_form{
        width:80%;
        padding:10px;
        margin:auto;
        border: 2px solid black;
    }
</style>
