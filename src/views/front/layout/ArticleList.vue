<template>
  <div>
    <!--  文章列表  -->
    <div v-for="article in dataShow">
      <el-card class="bbc" style="margin-bottom: 20px">
        <!--  title  -->
        <h2 style="text-align: left" @click="$router.push(`/article/${article.id}`)">
          {{ article.title }}</h2>
        <!--  标签  -->
        <p style="text-align: left;color: gray">
          <i class="el-icon-user"></i>:&nbsp;{{ article.author }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-time"></i>:&nbsp;{{ article.date }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-paperclip"></i>:&nbsp;
          {{ article.tag }}
        </p>
        <!--  简介  -->
        <div style="text-align: left;color: gray">
          {{ article.content.replace(/[#]/g, "").slice(0, 38) }}...
        </div>
      </el-card>
    </div>

    <!--  空状态  -->
    <!--   <el-empty v-show="fyShow" description="暂无内容"></el-empty>-->

    <!--  回到顶部   -->
    <el-backtop :bottom="80">Top</el-backtop>

    <!--  分页 -->
    <div>
      <el-button type="primary" plain size="mini" @click="prePage">上一页</el-button>
      <el-button type="primary" plain size="mini" @click="page(i)" v-for="i in pageNum">{{ i }}</el-button>
      <el-button type="primary" plain size="mini" @click="nextPage">下一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    articles: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      articleList: '',
      emptyShow: false,
      fyShow: true,
      totalPage: [], // 所有分页的数据
      pageSize: 3, // 每页显示数量
      pageNum: 1,  // 共几页=所有数据/每页现实数量
      dataShow: [], // 当前显示的数据
      currentPage: 0 // 默认当前显示第一页
    }
  },

  watch: {
    // 正确给 articleList 赋值的方法
    articles: function (newVal, oldVal) {
      this.articleList = newVal;  // newVal即是articles
      console.log('articleList:' + this.articleList)

      if (this.articleList.length === 0) {
        this.emptyShow = true
        this.fyShow = false
      } else {
        this.fenye()
      }
    }
  },

  methods: {
    // 假分页
    fenye() {
      this.pageNum = Math.ceil(this.articleList.length / this.pageSize);//计算有多少页数据，默认为1

      // 循环页面
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
        this.totalPage[i] = this.articleList.slice(this.pageSize * i, this.pageSize * (i + 1))
      }

      // 获取到数据后默认显示第一页内容
      this.dataShow = this.totalPage[this.currentPage];
    }
    ,

    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    }
    ,

    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    }
    ,

    // 点击页码
    page(i) {
      this.currentPage = i
      this.dataShow = this.totalPage[i - 1];
    }
  }
}
</script>

<style scoped lang="less">

.bbc:hover {
  /*transform: scale(1.02); !*鼠标放上之后元素变成1.1倍大小*!*/
  box-shadow: 0px 0px 8px #9F85EC;

  h2 {
    color: #9F85EC;
  }
}

</style>
