<template>
  <div>
    <el-footer>
      <div class="footer">

                  <el-divider></el-divider>

<!--        <a href="http://localhost:8080/admin">后台管理</a>-->

        <p>Copyright © 2022 Yang Yezhuang. All Rights Reserved.</p>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.el-footer {
  padding: 0;
}

.footer {
  height: 70px;
  background-color: white;
}

p {
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
}

a {
  font-size: 15px;
  text-decoration: none;
  color: black;
}

</style>
