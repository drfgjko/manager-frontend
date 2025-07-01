<script setup>
import { ref, onMounted } from 'vue'
import InformationContent from '@/views/front/InformationContent'
import AgritainmentContent from '@/views/front/AgritainmentContent'
import Goods from '@/views/front/Goods'

const user = JSON.parse(localStorage.getItem('xm-user') || '{}')

// 轮播图数据
const carouselData = ref([
  require('@/assets/imgs/lun1.jpg'),
  require('@/assets/imgs/lun2.jpg'),
  require('@/assets/imgs/lun3.jpg'),
  require('@/assets/imgs/lun4.jpg'),
  require('@/assets/imgs/lun5.jpg'),
])

// 数据变量
const informationData = ref([])
const agritainmentData = ref([])
const goodsData = ref([])

// 初始化路由器
const router = useRouter()

// 加载农场信息
const loadInformation = async () => {
  const res = await $request.get('/information/top6')
  if (res.code === '200') {
    informationData.value = res.data
  } else {
    $message.error(res.msg)
  }
}

// 加载农趣体验
const loadAgritainment = async () => {
  const res = await $request.get('/agritainment/top6')
  if (res.code === '200') {
    agritainmentData.value = res.data
  } else {
    $message.error(res.msg)
  }
}

// 加载商品数据
const loadGoods = async () => {
  const res = await $request.get('/goods/selectAll')
  if (res.code === '200') {
    goodsData.value = res.data
  } else {
    $message.error(res.msg)
  }
}

// 页面加载时
onMounted(() => {
  loadInformation()
  loadAgritainment()
  loadGoods()
})
</script>

<template>
  <div class="main">
    <div>
      <el-carousel :interval="3000" height="500px" direction="vertical">
        <el-carousel-item v-for="item in carouselData" :key="item">
          <img :src="item" alt="" class="carousel-item-img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>
      <div class="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-signpost-split-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z"
          />
        </svg>
        农趣体验
      </div>
      <AgritainmentContent :agritainment-data="agritainmentData" />

      <div class="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-signpost-split-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z"
          />
        </svg>
        助农资讯
      </div>
      <InformationContent :informationData="informationData" />

      <div class="section-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-signpost-split-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z"
          />
        </svg>
        优品农展
      </div>

      <Goods />
    </div>

    <router-link to="/register" class="register-link"
      >还没有账号？请注册</router-link
    >
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .carousel-item-img {
    height: 30vh !important;
  }
}

.section-title {
  color: #19a14b;
  font-size: 20px;
  font-weight: 550;
  margin: 40px 0;
}

.overflowShow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.register-link {
  color: #7ddf43;
}
</style>
