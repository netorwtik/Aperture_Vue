<template>
  <div>
    <HeaderBlock />
    <NotFoundBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import NotFoundBlock from '@/components/NotFoundBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'NotFoundView',
  components: {
    HeaderBlock,
    NotFoundBlock,
    FooterBlock,
  },
};
</script>

<style></style>
