<template>
  <div>
    <!-- Header Section -->
    <header class="header" id="top">
      <div class="container">
        <h1>健康医院</h1>
        <nav>
          <ul class="nav-links">
            <li><a href="#about">关于我们</a></li>
            <li><a href="#services">服务项目</a></li>
            <li><a href="#news">最新动态</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h2>以患者为中心的优质医疗服务</h2>
        <p>我们致力于提供专业、精准、高效的医疗服务</p>
        <router-link class="btn" to="#services">了解更多</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2>关于我们</h2>
        <p>
          健康医院是一家现代化综合性医院，拥有最先进的医疗设备和优秀的医疗团队。
          我们以创新和技术驱动，提供以患者为中心的医疗服务。
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <h2>服务项目</h2>
        <div class="service-items">
          <div class="service-item">
            <router-link to="/general-clinic">
              <img
                src="@/assets/A_futuristic_general_clinic_interior_with_a_sleek_.jpg"
                alt="全科门诊"
              />
              <p>全科门诊</p>
            </router-link>
          </div>
          <div class="service-item">
            <router-link to="/checkup-center">
              <img
                src="@/assets/A_state-of-the-art_health_checkup_room_with_advanc.jpg"
                alt="体检中心"
              />
              <p>体检中心</p>
            </router-link>
          </div>
          <div class="service-item">
            <router-link to="/emergency-service">
              <img
                src="@/assets/A_futuristic_emergency_room_with_robotic_medical_e.jpg"
                alt="急诊服务"
              />
              <p>急诊服务</p>
            </router-link>
          </div>
          <div class="service-item">
            <router-link to="/pediatric-clinic">
              <img
                src="@/assets/A_cheerful_pediatric_clinic_featuring_a_friendly_h.jpg"
                alt="儿科诊疗"
              />
              <p>儿科诊疗</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新动态 Section -->
    <section id="news" class="news">
      <div class="container">
        <h2>最新动态</h2>
        <div class="news-carousel">
          <div
            v-for="(item, index) in newsItems"
            :key="index"
            class="news-item"
            :class="{ active: index === currentNewsIndex }"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </div>
        <div class="news-controls">
          <button @click="prevNews">上一条</button>
          <button @click="nextNews">下一条</button>
        </div>
      </div>
    </section>

    <!-- 联系我们 Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2>联系我们</h2>
        <p>地址：健康路123号，健康市</p>
        <p>电话：123-456-7890</p>
        <p>邮箱：contact@hospital.com</p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="container">
        <p>© 2024 健康医院 版权所有</p>
        <button class="back-to-top" id="backToTop" @click="scrollToTop">回到顶部</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 动态数据
const newsItems = ref([
  {
    title: '医院荣获医疗科技创新奖',
    content: '健康医院在医疗科技领域取得重大突破，获得了国家级表彰。',
  },
  {
    title: '开设心血管专科门诊',
    content: '我们新增心血管科门诊，为心血管疾病患者提供更专业的诊疗服务。',
  },
  {
    title: 'AI辅助诊断系统上线',
    content: '引入AI技术，显著提升诊断效率与准确性。',
  },
]);

// 当前显示的动态索引
const currentNewsIndex = ref(0);

// 切换到上一条动态
const prevNews = () => {
  currentNewsIndex.value =
    (currentNewsIndex.value - 1 + newsItems.value.length) % newsItems.value.length;
};

// 切换到下一条动态
const nextNews = () => {
  currentNewsIndex.value = (currentNewsIndex.value + 1) % newsItems.value.length;
};

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
/* Scoped styles for additional customizations */
.hero {
  background-image: url("@/assets/A_bright_hospital_exterior_featuring_a_humanoid_AI.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 0;
}
</style>
