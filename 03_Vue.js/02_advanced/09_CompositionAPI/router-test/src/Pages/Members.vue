<template>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="mem in members"
          :key="mem.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <router-link :to="'/members/' + mem.id">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="mem.photo"
            />
            <!-- :속성 = JS 표현식 넣기 -->
            <br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from '@/members.json';
export default {
  name: 'Members',
  setup() {
    return { members };
  },
};
</script>
<style scoped></style>
