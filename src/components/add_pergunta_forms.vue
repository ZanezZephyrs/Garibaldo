<template>
  <form id="question_form" @submit.prevent="processForm">
    <v-text-field
      v-model="titulo_pergunta"
      :error-messages="nameErrors"
      :counter="100"
      label="titulo"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
     <v-textarea
        v-model="descricao"
          name="descricao"
          label="Descricao"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
    <v-text-field
      v-model="resp1"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 1"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="resp2"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 2"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="resp3"
      :error-messages="nameErrors"
      :counter="100"
      label="Resposta 3(opcional)"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
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
      console.log(this.titulo_pergunta, this.descricao);
    }
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
