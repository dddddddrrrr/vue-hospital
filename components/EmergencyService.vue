<template>
    <div>
        <header class="header">
            <h1>急诊服务</h1>
            <router-link to="/">返回首页</router-link>
        </header>
        <section class="service-detail">
            <h2>急诊服务详情</h2>
            <p>
                健康医院的急诊服务致力于为患者提供快速、高效的紧急医疗护理。我们的急诊科配备先进的医疗设备和专业团队，
                可应对各种突发疾病和紧急情况。
            </p>
            <img src="/assets/A_futuristic_emergency_room_with_robotic_medical_e.jpg" alt="急诊服务">
        </section>
    </div>
</template>

<script>
export default {
    name: 'EmergencyService',
};
</script>

<style scoped>
.header {
    background: #f44336;
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
    color: #f44336;
}
</style>
