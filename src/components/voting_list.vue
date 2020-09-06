<template>
    <div class="box-contorn">
        <div class="card" v-for="instancia in l" v-bind:key="instancia">
                           <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title style="text-align:center" class="headline">{{instancia.pergunta}}</v-list-item-title>
        <v-list-item-subtitle>{{instancia.autor}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      {{instancia.descricao}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
       <a :href="instancia.link"> Vote</a>
      </v-btn>
            <v-spacer></v-spacer>

      <span> Finalizada: {{instancia.aberta? "Sim":"Não"}}</span>
     
    </v-card-actions>
  </v-card>
            </div >
        </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
      return{
          
      }

  },
  props: {
    l: Array
  }
}
</script>

<style scoped>

.card{
    display:inline-block;
    font-size:3vh;
    border: 3px solid black;
    margin:5px;

}

.box-contorn{
    width:80%;
    margin:auto;
    border: 2px solid black;
    
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
