<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <!-- 文章详情 -->
        <el-card style="height: auto;min-height: 620px">
          <h1>{{ detail.title }} </h1>
          <div class="article-time">
            <i class="el-icon-user"></i>:&nbsp;{{ detail.author }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-time"></i>:&nbsp;{{ detail.date }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-view"></i>:&nbsp;{{ pv }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-star-off"></i>:&nbsp;{{ star }}&nbsp;&nbsp;&nbsp;
          </div>
          <!-- Markdown 查看器 -->
          <mavon-editor
              class="md"
              :value="detail.content"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              :scrollStyle="true"
              :ishljs="true"
              :codeStyle="codeStyle"
          ></mavon-editor>
          <br>
          <p style="color: grey;font-size: 8px">
            本站所有文章，如无特殊说明或标注，均为本站原创发布。任何个人或组织，在未征得本站同意时，禁止复制、盗用、采集、发布本站内容到任何网站、书籍等各类媒体平台。
            <br>如若本站内容侵犯了原著者的合法权益，可联系我们进行处理。</p>

          <el-button icon="el-icon-thumb" type="danger" plain @click="addStar()">点赞</el-button>

          <el-popover
              width="200"
              trigger="click">
            <img src="../../../assets/img/pay.jpg" style="width: 200px">
            <el-button slot="reference"icon="el-icon-coin" type="primary" plain @click="toSupport()">打赏</el-button>
          </el-popover>
        </el-card>

        <!-- 评论组件  -->
        <comment :article_id="article_id"></comment>
      </div>

      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from '../layout/Footer'
import Comment from "./Comment";

export default {
  name: "Detail",
  components: {
    Header,
    Footer,
    Comment
  },
  data() {
    return {
      uid: sessionStorage.getItem("uid"),
      username: sessionStorage.getItem('username'),
      article_id: this.$route.params.id,
      codeStyle: "atom-one-dark", //设置主题 ，
      detail: "",
      pv: '',
      star: ''
    };
  },

  created() {
    this.getPv()
    this.getStar()
    this.getDetail()
  },

  methods: {
    // 根据 id 进行查询
    async getDetail() {
      const {data: res} = await this.$http.get(`/articles/article/${this.article_id}`)
      this.detail = res.data;
    },

    // 获取访问量
    async getPv() {
      const {data: res} = await this.$http.get(`/pv/${this.article_id}`)
      this.pv = res.data
    },

    // 获取访问量
    async getStar() {
      const {data: res} = await this.$http.get(`/star/${this.article_id}`)
      this.star = res.data
    },

    // 点赞
    async addStar() {
      const {data: res} = await this.$http.put(`/star/${this.article_id}`)
      this.$message.success('感谢支持')
    },

    // 打赏
    async toSupport() {
      this.$message.success('您的支持是我创作的动力')
      // this.$message.info('作者未开启打赏功能')
    }
  }
}
</script>

<style scoped>

.md {
  box-shadow: none;
}

.v-note-wrapper.shadow {
  box-shadow: none !important;
}

.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  background: #fff !important;
}

#editor {
  margin: auto;
  width: 100%;
  height: 580px;
  margin: 15px 0;
}

.details-wrapper {
  max-width: 960px;
  margin: -110px auto 50px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px;
  padding: 35px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  min-height: calc(100vh - 120px);
}

/*.article-title {*/
/*  font-size: 30px;*/
/*  line-height: 48px;*/
/*  font-weight: 400;*/
/*  color: rgb(33, 33, 33);*/
/*}*/

.article-time {
  line-height: 14px;
  font-size: 13px;
  font-weight: bold;
  color: rgb(114, 114, 114);
  margin: 8px 0px 10px;
  overflow: hidden;
}
</style>
