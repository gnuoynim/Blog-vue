<template>
    <h4>블로그 글 제목</h4>
    <div v-for="(data, index) in data" :key="data">
        <p @click="$router.push(`/detail/${index}`)">제목 : <span>{{ data.title }}</span></p>
        <p>작성일 : {{ data.date }}<span></span></p>
        <p>content : {{ data.content }}</p>
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props: {
        data: Array
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>