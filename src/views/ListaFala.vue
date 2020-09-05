<template>
    <div class="content">
        <div>
            <h3>Seja bem-vindo(a) a lista com a ordem para falar </h3>
            <img alt="logo" src="../assets/falando.svg">
            <br>
            <label for="nome-input"> Adicione seu nome: </label>
            <input v-model="novoNome" id="nome-input"/>
            <button @click="add()"> OK </button>
            <br>
            <br>
            <label for="user-input"> Altere o nome do usuário: </label>
            <input v-model="user.name" id="user-input"/>
            <br>
        </div>
    <br>
        <PropsList 
            :user="user"
            :nomes="nome" 
            title="Lista" 
        ></PropsList>
    </div>
</template>

<style scoped>
    .content{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    img {
    max-width: 15%;
    display: middle;
    }
    h3{
        margin:0;
    }
</style>

<script>
    import PropsList from '../components/PropsList.vue'
    export default{
        components:{
            PropsList
        },

        data(){
            return{
                nome:["Host"],
                user:{
                    name:"Alguém"
                },
                novoNome:"Nome"
            }
        },
        methods:{
            add(){
                if(this.novoNome!== undefined){
                    this.nome.push(this.novoNome)
                }
            }
        }
    }
</script>

