<template>
  <div>
  <p>
    <label> Digite o Seu nome:</label>
    <input placeholder="Nome do Criador" type="text" name="criador"  v-model="host" />
  </p>
  <p>
    <label> Digite o nome da Reunião:</label>
    <textarea placeholder="Insira o nome da Reunião" name="nomereuniao"  v-model="reuniao"></textarea>
  </p>
  <button v-on:click="CriarReuniao" type="submit">Criar</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        host: '',
        reuniao: ''
      }
    },
    methods: {
      CriarReuniao() {
        if (this.reuniao.trim() === '') {
          return;
        }
        this.host= this.host.trim()=== '' ? 'Anônimo' : this.host;
        this.$router.push('/about')
      }
    }
  }
</script>
