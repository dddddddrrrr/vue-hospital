<template>
    <div>
        <header class="header">
            <h1>儿科诊疗</h1>
            <router-link to="/">返回首页</router-link>
        </header>
        <section class="service-detail">
            <h2>儿科诊疗详情</h2>
            <p>
                健康医院的儿科诊疗致力于为儿童提供优质的医疗服务。我们关注儿童健康，拥有温馨的诊疗环境、
                专业的医护团队，以及适合儿童的先进医疗设备。
            </p>
            <img src="/assets/A_cheerful_pediatric_clinic_featuring_a_friendly_h.jpg" alt="儿科诊疗">
        </section>
    </div>
</template>

<script>
export default {
    name: 'PediatricClinic',
};
</script>

<style scoped>
.header {
    background: #4caf50;
    color: white;
    text-align: center;
    padding: 1rem 0;
}

.header a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;
}

.service-detail {
    padding: 2rem;
    text-align: center;
}

.service-detail img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 20px;
}

.service-detail h2 {
    color: #4caf50;
}
</style>
