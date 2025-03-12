<template>
  <div class="mb-4 flex space-x-2">
    <input v-model="localStartDate" type="date" class="border p-2 rounded" />
    <input v-model="localEndDate" type="date" class="border p-2 rounded" />
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
  props: {
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      localStartDate: this.startDate,
      localEndDate: this.endDate
    }
  },

  computed: {
    isValidDateRange() {
      return this.localStartDate && this.localEndDate && this.localStartDate <= this.localEndDate
    },
  },

  watch: {
    startDate(newVal) {
      this.localStartDate = newVal
    },
    endDate(newVal) {
      this.localEndDate = newVal
    },
  },

  methods: {
    applyFilter() {
      if (this.isValidDateRange) {
        this.$emit('filter', { startDate: this.localStartDate, endDate: this.localEndDate })
      }
    },
  },
}
</script>
