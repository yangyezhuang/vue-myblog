<template>
  <div>
    <el-menu router mode="horizontal" :default-active="this.$route.path" active-text-color="#9F85EC">
      <el-menu-item index="/">
        <img src="../../../assets/img/logo.png" style="height: 60%" alt="logo">
      </el-menu-item>
      <el-menu-item index="/" style="font-size: 20px;color: black;padding-left: 0"><strong>杨业壮的技术专栏</strong>
      </el-menu-item>
      <el-menu-item style="width: auto;min-width: 460px"></el-menu-item>
      <el-menu-item style="font-size: 18px;">
        <el-input placeholder="请输入相关内容" v-model="keyword">
          <el-button slot="append" icon="el-icon-search" @click="search(keyword)"></el-button>
        </el-input>
      </el-menu-item>
      <el-menu-item index="/" style="font-size: 18px;">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/category" style="font-size: 18px;">
        <i class="el-icon-menu"></i>
        <span slot="title">分类</span>
      </el-menu-item>
      <el-menu-item index="/archive" style="font-size: 18px;">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">历程</span>
      </el-menu-item>
      <el-menu-item index="/tag" style="font-size: 18px;">
        <i class="el-icon-s-flag"></i>
        <span slot="title">Tag</span>
      </el-menu-item>
      <el-menu-item index="/board" style="font-size: 18px;">
        <i class="el-icon-message-solid"></i>
        <span slot="title">公告</span>
      </el-menu-item>
      <el-menu-item index="/about" style="font-size: 18px;">
        <i class="el-icon-user-solid"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
      keyword: '',
    }
  },

  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`)
      location.reload()
    }
  }
}
</script>

<style scoped lang="less">
.el-menu {
  position: relative;
}

.item {
  /*margin-top: 10px;*/
  margin-right: 40px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  text-decoration: none;
}

</style>
