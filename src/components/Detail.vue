<template>
    <p>상세페이지</p>
    {{ $route.params.id }}
    <div>
        <p>제목 : <span>{{ data[$route.params.id].title }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'detailComponent',
    props: {
        data: Array
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>