<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size">
      <tr v-for="(table, index) in paramsInfo.rule.tables" :key="index">
        <td v-for="(td, indez) in table" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.info.set" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.param-info {
  padding: 20px 15px;
  border-top: 3px solid @lineColor;
  border-bottom: 3px solid @lineColor;
  table{
    width: 100%;
    border-collapse: collapse;
    tr{
      height: 42px;
      td{
        border-bottom: 1px solid rgba(100, 100, 100, .1);
      }
    }
  }
  .info-param-key{
    width: 95px;
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-value{
    color: @colorHithText;
  }
}
</style>
