<template>
    <div>
        <h1> Crie uma nova pergunta </h1>
        <add-forms>

        </add-forms>
        
    </div>
</template>

<script>
import add_pergunta from '../components/add_pergunta_forms'
export default {

    components:{
        "add-forms" : add_pergunta
    }
}
</script>

<style scoped>
  h1{
    margin-bottom: 10px;
  }
</style>