<template>
  <div>
    <ul>
      <li
        v-for="item in users"
        :key="item._id"
      >
        <router-link :to="{ name: 'user-single', params: { id: item._id } }">
          {{item.firstName}} {{item.lastName}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch('http://localhost:8888/users')
      .then((request) => request.json())
      .then((users) => {
        this.users = users;
      });
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/main.scss';
</style>
