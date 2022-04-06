<template>
  <div class="page">
    <!-- 동적라우터를 이용하여 $route의 값을 저장하고 가져올 수 있음 -->
    <p>{{ $route.params.page }}페이지입니다</p>
  </div>
</template>

<script>
export default {
  name: "PageComponent",
};
</script>
