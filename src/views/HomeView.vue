<template>
  <div>
    <HeaderApp />
    <MainBlock />
    <CardsBlock />
    <MountBlock />
    <GearBlock />
    <LeavesBlock />
    <PicturesBlock />
    <SnowBlock />
    <HelpBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderBlock.vue';
import MainBlock from '@/components/MainBlock.vue';
import CardsBlock from '@/components/CardsBlock.vue';
import MountBlock from '@/components/MountBlock.vue';
import GearBlock from '@/components/GearBlock.vue';
import LeavesBlock from '@/components/LeavesBlock.vue';
import PicturesBlock from '@/components/PicturesBlock.vue';
import SnowBlock from '@/components/SnowBlock.vue';
import HelpBlock from '@/components/HelpBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderApp,
    MainBlock,
    CardsBlock,
    MountBlock,
    GearBlock,
    LeavesBlock,
    PicturesBlock,
    SnowBlock,
    HelpBlock,
    FooterBlock,
  },
};
</script>

<style></style>
