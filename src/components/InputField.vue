<template lang="pug">
  div
    label.label(
      v-if='label'
      :for='name'
    )
      | {{ label }}
    input.input(:id='name' v-model='currentValue' :type='type')
</template>

<script>

export default {
  name: 'InputField',
  props: {
    name: {
      type: String,
      required: true
    },
    label: String,
    value: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return { currentValue: this.value }
  },
  watch: {
    currentValue (newValue) {
      this.$emit('input', this.currentValue)
    }
  }
}

</script>

<style lang="scss" scoped>

  .label {
    font-size: 12px;
    font-weight: 700;
    padding-left: 5px;
  }

</style>
