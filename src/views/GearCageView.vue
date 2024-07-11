<template>
  <div>
    <HeaderBlock />
    <SnowBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import SnowBlock from '@/components/SnowBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'NotFoundView',
  components: {
    HeaderBlock,
    SnowBlock,
    FooterBlock,
  },
};
</script>

<style></style>
