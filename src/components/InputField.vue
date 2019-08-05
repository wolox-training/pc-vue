<template lang="pug">
  div
    label.label(
      v-if='label'
      :for='name'
    )
      | {{ label }}
    input.input(:id='name' v-model='currentValue' :type='type')
    .error(v-if='errors && typeof(errors.$params.required) !== "undefined" && !errors.required') Este campo es requerido
    .error(v-if='errors && typeof(errors.$params.email) !== "undefined" && !errors.email') Debe tener formato de email
    .error(v-if='errors && typeof(errors.$params.password) !== "undefined" && !errors.password') Debe tener formato de password
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
    },
    errors: Object
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
