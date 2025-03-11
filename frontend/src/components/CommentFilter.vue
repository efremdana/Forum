<template>
  <div class="mb-4 flex space-x-2">
    <input v-model="startDate" type="date" class="border p-2 rounded" />
    <input v-model="endDate" type="date" class="border p-2 rounded" />
    <button @click="applyFilter" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Фильтровать
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    applyFilter() {
      this.$emit('filter', { startDate: this.startDate, endDate: this.endDate });
    }
  }
}
</script>

