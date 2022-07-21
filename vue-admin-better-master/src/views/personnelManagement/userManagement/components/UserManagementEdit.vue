<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="500px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model.trim="form.username"
          autocomplete="off"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.trim="form.password"
          type="password"
          autocomplete="off"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="篡改余额为" prop="wanted_money">
        <el-input
          v-model.number="form.wanted_money"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <!--      <el-form-item label="权限" prop="permissions">-->
      <!--        <el-checkbox-group v-model="form.permissions">-->
      <!--          <el-checkbox label="admin"></el-checkbox>-->
      <!--          <el-checkbox label="editor"></el-checkbox>-->
      <!--        </el-checkbox-group>-->
      <!--      </el-form-item>-->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { EditWantedMoney } from '@/api/userManagement'

  export default {
    name: 'UserManagementEdit',
    data() {
      return {
        form: {
          ID: 1,
          username: '',
          password: '',
          wanted_money: 0,
          money: 0,
          intercept: false,
          lastlogin: '',
        },
        rules: {
          // username: [
          //   { required: true, trigger: 'blur', message: '请输入用户名' },
          // ],
          // password: [
          //   { required: true, trigger: 'blur', message: '请输入密码' },
          // ],
          wanted_money: [
            { required: true, trigger: 'blur', message: '请输入期望的余额' },
          ],
          // permissions: [
          //   { required: true, trigger: 'blur', message: '请选择权限' },
          // ],
        },
        title: '',
        dialogFormVisible: false,
      }
    },
    created() {},
    methods: {
      showEdit(row) {
        console.log('showEdit->', row)
        if (!row) {
          this.title = '添加'
        } else {
          this.title = '编辑'
          console.log('after assign->', row)
          this.form = Object.assign({}, row)
        }
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
      },
      save() {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            console.log('edit table row->', this.form)
            const { msg } = await EditWantedMoney(this.form)
            this.$baseMessage(msg, 'success')
            this.$emit('fetch-data')
            this.close()
          } else {
            return false
          }
        })
      },
    },
  }
</script>
