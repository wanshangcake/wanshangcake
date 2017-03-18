<template>
  <div class="flip-container">
    <div class="flipper">
      <div class="front">
        <div class="holder">
          <h1 class="heading">www.wanshangcake.com.src</h1>
          <el-form ref="form" :model="user" :rules="rules">
            <el-form-item prop="userid">
              <el-input v-model="user.userid" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="user.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
          </el-form>

          <el-button type="primary" :loading="loading" @click="handleLogin" size="large" class="btn btn-block">
            登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { $page } from '@helper'
  import types from '@store/types'

  export default{
    data () {
      return {
        user: {
          userid: '',
          password: ''
        },
        loading: false,
        rules: {
          userid: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
    },
    computed: {
    },
    methods: {
      ...mapActions({
        fetchUserInfo: types.user.action.fetch
      }),
      handleLogin () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.login()
          }
        })
      },
      login () {
        let user = this.user

        this.loading = true
        return $page.home.login(user).then((result) => {
          this.$router.push('/')
        }).catch((result) => {
          console.log('login error', result)
        }).fin(() => {
          this.loading = true
        })
      }
    }
  }

</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";

.flip-container {
  width: 520px;
  margin: 0 auto;
  margin-top: 150px;
  min-height: 400px;
  position: relative;
}
.flip-container .front {
  width: 520px;
  padding: 30px;
  height: 100%;
  background-color: #FFFFFF;
  clear: both;
  display: table;
  border-radius: 3px;
  border: 1px solid #d7dce5;
}
.flip-container .front,
.flip-container .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.flip-container .holder input {
  background: transparent;
  margin-top: 20px;
  height: 50px;
  border-radius: 3px;
}

.flip-container .btn {
  height: 40px;
  font-size: 16px;
  margin-top: 20px;
  text-transform: uppercase;
  line-height: 40px;
  padding: 0;
}
.flip-container .heading {
  text-align: center;
  color: #2196f3;
}

@media (max-width: 530px) {
  .flip-container {
    margin-top: 5px;
    width: 350px ;
  }
  .flip-container .front {
    width: 350px ;
  }
}
</style>
