<script setup>
import { ref } from "vue";
import { useHabitStore } from "../stores/habits";

const habitStore = useHabitStore();

const name = ref("");
const category = ref("Health");

const addNewHabit = () => {
  if (name.value.trim() === "") {
    alert("Please enter a habit name.");
    return;
  }

  habitStore.addHabit(name.value, category.value);

  name.value = "";
  category.value = "Health";
};
</script>

<template>
  <section class="card">
    <h2>Add New Habit</h2>

    <form @submit.prevent="addNewHabit" class="habit-form">
      <input v-model="name" type="text" placeholder="Enter a habit" />

      <select v-model="category">
        <option>Health</option>
        <option>School</option>
        <option>Fitness</option>
        <option>Personal</option>
      </select>

      <button type="submit">Add Habit</button>
    </form>
  </section>
</template>
