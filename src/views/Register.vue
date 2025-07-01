<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from '@/router/index'
import { register } from '@/services/authService'

const router = useRouter()

const form = ref({
  username: '',
  password: '',
  confirmPass: '',
  role: 'USER',
})

const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPass: [
    {
      validator: (rule, confirmPass, callback) => {
        if (confirmPass === '') {
          callback(new Error('请确认密码'))
        } else if (confirmPass !== form.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
}

const registerUser = async () => {
  formRef.value.validate((valid) => {
    if (valid) {
      register(form.value).then((res) => {
        if (res.code === '200') {
          router.push('/login')
          ElMessage.success('注册成功')
        } else {
          ElMessage.error(res.msg)
        }
      })
    }
  })
}
</script>

<template>
  <div class="content">
    <div class="register-box">
      <div class="register-title">欢迎注册</div>
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入账号"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPass">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请确认密码"
            show-password
            v-model="form.confirmPass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="
              width: 100%;
              background-color: #50955e;
              border-color: #50955e;
              color: white;
            "
            @click="registerUser"
            >注 册</el-button
          >
        </el-form-item>
        <div class="login-link">
          <div>已有账号？请 <router-link to="/login">登录</router-link></div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .content {
    font-size: 10px !important;
  }
}

.content {
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/imgs/bg1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.register-box {
  padding: 30px;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

.register-title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
}

.login-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}

a {
  color: #7ddf43;
}
</style>
