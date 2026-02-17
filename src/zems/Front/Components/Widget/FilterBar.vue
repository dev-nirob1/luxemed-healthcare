<script setup>
import { ref } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "All",
  },
});

const emit = defineEmits(["update:modelValue", "filter-change"]);

const activeCategory = ref(props.modelValue);

const selectCategory = (category) => {
  activeCategory.value = category;
  emit("update:modelValue", category);
  emit("filter-change", category);
};
</script>

<template>
  <div class="filter-bar">
    <button
      v-for="cat in categories"
      :key="cat"
      class="filter-btn"
      :class="{ active: activeCategory === cat }"
      @click="selectCategory(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-btn {
  border: 1px solid var(--border-color);
  background: var(--white-color);
  padding: 8px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-muted-color);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary-color);
  color: var(--white-color);
  border-color: var(--primary-color);
}
</style>
