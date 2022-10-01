<template>
  <div>
    <Header></Header>

    <el-main style="margin: 0 auto;width:1000px;height: auto;min-height: 560px;">
      <div style="text-align: left">
        <h2>杨业壮</h2>
        <i class="el-icon-user-solid">杨业壮的技术专栏</i>
      </div>

      <!--      名言  -->
      <div style="width: 100%;height: 150px;background-color: #F3F4F4;text-align: left;border-radius: 5px">
        <h3 style="margin-left: 25px;">荧惑守心 掩日以观天象</h3>
        <p style="margin-left: 25px"> 以七国为峰，山海为锷， 制以五行，开以阴阳， 持以春秋，行以秋冬， 举世无双，天下归服，为天子之剑。
        </p>
        <p style="float: right;margin-right: 25px"> 韩非《天行九歌》</p>
      </div>


      <div style="text-align: left"><h3>兴趣方向</h3>
        <ul>
          <li>编程语言 Python/Java/Vue</li>
          <li>职业领域 爬虫/web/消息中间件</li>
          <li>兴趣方向 分布式服务/系统架构/用户运营</li>
        </ul>
      </div>

      <div style="text-align: left">
        <h3>读过的书</h3>
        <ul>
          <li>《Kafka 权威指南》</li>
          <li>《Rabbit 权威指南》</li>
          <li>《代码整洁之道》</li>
          <li>《从零开始学架构》</li>
          <li>《HTTP 权威指南》</li>
        </ul>
      </div>

      <div style="text-align: left">
        <h3>其他社区</h3>
        <ul>
          <li><a href="https://blog.csdn.net/qq_47183158">CSDN</a></li>
          <li><a href="https://github.com/yangyezhuang">Github</a></li>
        </ul>
      </div>

      <h3 style="text-align: left">留言</h3>
      <el-form :label-position="left" label-width="80px" :model="MsgForm">
        <el-form-item label="姓名">
          <el-input v-model="MsgForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="MsgForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="MsgForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="留言">
          <el-input v-model="MsgForm.content"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain @click="submit">提交</el-button>


      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default {
  name: "About",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      MsgForm: {
        name: '',
        email: '',
        phone: '',
        content: ''
      }
    }
  },
  methods: {
    async submit() {
      const {data: res} = await this.$http.post('/messages', this.MsgForm)
      if (res.code === 1) {
        this.$message.success('留言成功')
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 45px;
}

li {
  margin-bottom: 15px;
}

a{
  text-decoration: none;
  color: #9F85EC;
}

</style>
