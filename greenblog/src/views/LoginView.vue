<template>
  <v-container>
    <v-card class="pa-10">
      <!-- 뷰티파이를 이용해서 입력창 디자인 -->
      <v-text-field label="아이디" v-model="user"></v-text-field>
      <v-text-field label="패스워드" type="password"></v-text-field>
      <v-card-actions>
        <!-- 로그인 버튼을 누르면 loginUser메소드 호출 -->
        <v-spacer></v-spacer>
        <v-btn @click="loginUser">로그인</v-btn>
        <!-- 취소버튼을 누르면 라우터의 push를 이용하여 '/' 이동 -->
        <v-btn @click="$router.push('/')">취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    // login-user 이벤트를 보내고, this.user 값을 전달
    loginUser() {
      this.$emit("login-user", this.user);
      // 컴포넌트를 '/'로 바꿈
      this.$router.push("/");
    },
  },
};
</script>
