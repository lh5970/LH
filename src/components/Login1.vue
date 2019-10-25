<template>
<div class="bg-img">
 <div class="login">
  <el-tabs v-model="activeName" @tab-click="handleClick">
   <el-tab-pane label="登录" name="first">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="账号" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
    </el-form>
   </el-tab-pane>
   <el-tab-pane label="注册" name="second">
    <register></register>
   </el-tab-pane>
  </el-tabs>
 </div>
</div>
</template>
<script>
import axios from 'axios'
import register from '@/components/register'
export default {
 data() {
  var validatePass = (rule, value, callback) => {
   if (value === '') {
    callback(new Error('请输入密码'));
   } else {
    if (this.ruleForm.checkPass !== '') {
     this.$refs.ruleForm.validateField('checkPass');
    }
    callback();
   }
  };
  return {
   activeName: 'first',
   ruleForm: {
    name: '',
    pass: '',
    checkPass: '',
   },
   rules: {
    name: [
     { required: true, message: '请输入您的名称', trigger: 'blur' },
     { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
    ],
    pass: [
     { required: true, validator: validatePass, trigger: 'blur' }
    ]
   },
  };
 },
 methods: {
  //选项卡切换
  handleClick(tab, event) {
  },
  //重置表单
  resetForm(formName) {
   this.$refs[formName].resetFields();
  },
  //提交表单
  submitForm(formName) {
   this.$refs[formName].validate((valid) => {
    if (valid) {
     this.$message({
      type: 'success',
      message: '登录成功'
     });
     this.$router.push('About');
    } else {
     console.log('error submit!!');
     return false;
    }
   });
  },
  if (valid) {
 axios.userLogin(this.ruleForm)
  .then(({ data }) => {
   //账号不存在
   if (data.info === false) {
    this.$message({
     type: 'info',
     message: '账号不存在'
    });
    return;
   }
   //账号存在
   if (data.success) {
    this.$message({
     type: 'success',
     message: '登录成功'
    });
  
   }
  });
}
 },
 components: {
  register
 }
}
</script>
<style scoped>
.bg-img{
  width: 100%;
  height: 100%;
  background-image: url("../../public/image/14.jpg");
  position: absolute;
}
.login {
 width: 400px;
 margin: 0 auto;
 position: absolute;
 top:30%;
 left: 35%;
 background: rgba(20, 20, 20, 0.6)
}
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
.el-tabsitem {
 text-align: center;
 width: 60px;
}
</style>