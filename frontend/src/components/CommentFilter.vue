<template>
  <div class="mb-4 flex space-x-2">
    <input v-model="startDate" type="date" class="border p-2 rounded" />
    <input v-model="endDate" type="date" class="border p-2 rounded" />
    <button
      @click="applyFilter"
      :disabled="!isValidDateRange"
      class="p-2 rounded text-white transition-colors"
      :class="{
        'bg-blue-500 hover:bg-blue-600': isValidDateRange,
        'bg-gray-300 cursor-not-allowed': !isValidDateRange,
      }"
    >
      Фильтровать
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
    }
  },

  computed: {
    //   localStartDate: {
    //     get() {
    //       return this.startDate
    //     },
    //     set(value) {
    //       this.$emit('update:startDate', value)
    //     },
    //   },
    //   localEndDate: {
    //     get() {
    //       return this.endDate
    //     },
    //     set(value) {
    //       this.$emit('update:endDate', value)
    //     },
    //   },
    isValidDateRange() {
      return this.startDate && this.endDate && this.startDate <= this.endDate
    },
  },

  methods: {
    applyFilter() {
      if (this.isValidDateRange) {
        this.$emit('filter', { startDate: this.startDate, endDate: this.endDate })
      }
    },
  },
}
</script>
