<template>
  <div>
    <configurator style="display:flex; justify-items:center; align-items:center;
    align-content:center; justify-content:center;
    align-self:center; justify-self:center"></configurator>
    <attributes></attributes>
  </div>
</template>

<script>
import Configurator from '@/components/Center/center/configurator.vue';
import Attributes from '@/components/Center/center/attributes.vue';

export default {
  name: 'centerCenter',
  components: {
    Attributes,
    Configurator,
  },
};
</script>

<style scoped>

</style>
