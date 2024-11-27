<template>
    <div>
        <header class="header">
            <h1>健康医院</h1>
            <nav>
                <router-link to="/">首页</router-link>
                <router-link to="/general-clinic">全科门诊</router-link>
                <router-link to="/checkup-center">体检中心</router-link>
                <router-link to="/emergency-service">急诊服务</router-link>
                <router-link to="/pediatric-clinic">儿科诊疗</router-link>
            </nav>
        </header>
        <section class="hero">
            <h2>以患者为中心的优质医疗服务</h2>
            <p>我们致力于提供专业、精准、高效的医疗服务</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>



