<template>
  <div class="login">
    <form class="login-form">
      <label for="email">Eposta</label>
      <input v-model="email" id="email" type="email" />
      <label for="password">Şifre</label>
      <input v-model="password" id="password" type="password" />
      <button class="submit" @click="callLogin">Giriş</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email:"",
      password: "",
    };
  },
  methods: {
     callLogin() {
      this.login({email:this.email, password:this.password}).then(()=>{
        console.log(this)
        this.$router.push("Home")
      }).catch((e)=>{
        alert(e)
      })

    },
    ...mapActions({
      login: "login"
    })
  }
};
</script>
<style scoped lang="scss">
.login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Helvetica;
}
.login-form {
  padding: 2em;
  background-color: $salmon;
  border-radius: 10px;
  input {
    display: block;
    margin-bottom: 0.5em;
    font-weight: 300;
    min-width: 15em;
    border-radius: 4px;
    border: none;
    padding: 0.4em 0.5em;
  }
  .submit {
    outline: none;
    border: none;
    width: 100%;
    padding: 0.5em;
    background: #f2ac6b;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 16px;
    font-weight: bold;
    margin-top: 1.5em;
    border-radius: 4px;
    transition: opacity 0.5s;
  }
  .submit:hover,
  .submit:focus {
    opacity: 0.9;
  }
}
</style>
