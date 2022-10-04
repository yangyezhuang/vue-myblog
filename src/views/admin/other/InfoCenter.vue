<template>
  <div>
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="uid">
          <el-input v-model="form.uid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="性别">
      <span style="float: left">
        <el-radio v-model="form.sex" label="男"></el-radio>
        <el-radio v-model="form.sex" label="女"></el-radio>
      </span>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>

        <el-form-item>
          <!--          <el-upload-->
          <!--              :limit="1"-->
          <!--              class="upload-demo"-->
          <!--              ref="upload"-->
          <!--              action-->
          <!--              :on-preview="handlePreview"-->
          <!--              :on-remove="handleRemove"-->
          <!--              :file-list="fileList"-->
          <!--              :auto-upload="false"-->
          <!--              :http-request="UploadSubmit"-->
          <!--          >-->
          <!--   <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->


          <el-upload
              ref="upload"
              action
              :file-list="fileList"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :auto-upload="false"
              :http-request="UploadSubmit">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-button
              style="margin-left: 10px"
              size="small"
              type="success"
              @click="submitUpload"
          >上传到服务器
          </el-button
          >
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
          <!--          </el-upload>-->

        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "InfoCenter",
  data() {
    return {
      form: {
        uid: 10001,
        username: 'admin',
        password: '******',
        sex: '',
        desc: ''
      },
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    onSubmit() {
      this.$message.success("修改成功")
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    UploadSubmit(param) {
      var file = param.file;
      //console.log(param.file);
      var file_form = new FormData(); //获取上传表单（文件）
      file_form.append("file", file);
      this.$http({
        url: "/upload",
        method: "POST",
        data: file_form,
      })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
  }
}
</script>

<style scoped>

</style>
