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

//import ax from 'axios'

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
    onChildClick:async function (value) {
      const obj = value;
      

      // make request api

        // let request= new Request()
      
      // let novo_header=new Headers()
      // novo_header.append('content-type',"application/json")
      //novo_header.append('Access-Control-Allow-Origin',"*")
      

    //https://cors-anywhere.herokuapp.com/
    //https://www.strawpoll.me/api/v2/polls
      
      let id_resposta=0;
     // let copia_lista=this.lista;
      const axios = require('axios');
      await axios.post('https://cors-anywhere.herokuapp.com/https://www.strawpoll.me/api/v2/polls', {
          title: obj.titulo_pergunta,
          options: [obj.resp1, obj.resp2],
          multi: true,
          captcha: true,
        
      })
        .then(function (response) {
          console.log(response.data.id);
          id_resposta=response.data.id;
          // this.lista.push({
          //   pergunta:obj.titulo_pergunta,
          //   aberta:false,
          //   descricao:obj.descricao,
          //   link:"https://www.strawpoll.me/" + id_resposta.toString(),
          //   autor:"anonymous",
          // })
          
        })
        .catch(function (error) {
          console.log(error);
        });

        this.lista.push({
        pergunta:obj.titulo_pergunta,
        aberta:false,
        descricao:obj.descricao,
        link:"https://www.strawpoll.me/" + id_resposta.toString(),
        autor:"anonymous",
      })
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