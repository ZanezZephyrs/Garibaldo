<template>

  <div id="app">
    <div id="nav">
      <ul>
          <li><router-link to="/">Home</router-link></li>     |  
          <li><router-link to="/about">About</router-link></li>     |  
          <li><router-link to="/votacao">votacao</router-link></li>     |  
          <li> <router-link to="/add_pergunta">Criar pergunta</router-link></li>     |  
          <li> <router-link to="/ordemdefala">Ordem de Fala</router-link></li>     |  
          <li><router-link to="/Form">Form</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: white;
}


#nav a.router-link-exact-active {
  color: #ed7efa;
}

#nav ul {
    padding:10px;
    margin:0px;
    background-color:#fff2e9;
    list-style:none;
}

#nav ul li { display: inline; }

#nav ul li router-link {
    padding: 20px 50px;
    display: inline-block;

    /* visual do link */
    background-color:#a098f6;
    color: #333;
    text-decoration: none;
    border-bottom:3px solid #EDEDED;
}

#nav ul li router-link:hover {
    background-color:#fff2e9;
    color: #a098f6;
    border-bottom:10px solid #EA0000;
}
</style>


<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
