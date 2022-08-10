<template>
  <div>
    <div class="container">
      <div id="container-login">
        <div id="container-inner-login">
          <div>
            <h2>Acessar o Sistema</h2>
          </div>

          <div class="input-login-capsule">
            <label for="username">Usuário:</label>
            <input type="text" name="username" maxlength="14" class="input-login-default" v-model="inputDataAccess.inputUsername">
          </div>

          <div class="input-login-capsule">
            <label for="password">Senha:</label>
            <input type="password" name="password" maxlength="8" class="input-login-default" :disabled="inputPasswordDisabled" v-model="inputDataAccess.inputPassword">
          </div>   

          <div class="button-login-capsule">
            <button class="button-login-default" :disabled="buttonAccessdisabled" :class="{'button-login-disabled' : !buttonAccess}">Entrar</button>     
          </div> 

          <div>
            <p style="font-size: 13px">Ao acessar sua conta, você concorda com os Termos de serviços de Uniformes LA.</p>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data(){
      return {
        inputDataAccess:{
          inputUsername: "",
          inputPassword: ""
        },

        inputPasswordDisabled: true,
        buttonAccess: false
      }
    }
}
</script>

<style>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

  #container-login{
    width: 400px;
    height: 490px;
    border-radius: 5px;
    background: #fefefe;
    box-sizing: border-box;
    overflow: hidden;
    padding: 55px;
    border: 1px solid #1818181f;
    box-shadow: 0px 1px 10px #18181824;
  }

    #container-inner-login{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .input-login-capsule{
      text-align: left;
      margin: 21px 0px;
    }

      .input-login-capsule > label{
        font-weight: 510;
        font-size: 14px;
      }    

      .input-login-default{
        width: 100%;
        height: 40px;
        outline: none;
        padding: 5px 25px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid #18181850;
        transition: all 250ms;
      }

      .input-login-default:focus{
        border: 1px solid #2170f4;
      }

      .button-login-default{
        width: 100%;
        height: 40px;
        border: none;        
        box-sizing: border-box;
        color: #fefefe;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.3px;
        background-color: #2170f4;
      }

      .button-login-disabled{
        width: 100%;
        height: 40px;
        border: none;        
        box-sizing: border-box;
        color: #fefefe;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.3px;
        background-color: #8f8f8f;
      }      

      .button-login-capsule{
        margin: 34px 0px;
      }
</style>