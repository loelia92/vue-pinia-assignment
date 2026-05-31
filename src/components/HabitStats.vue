<script setup>
import { storeToRefs } from "pinia";
import { useHabitStore } from "../stores/habits";

const habitStore = useHabitStore();
const { totalHabits, completedToday, bestStreak } = storeToRefs(habitStore);
</script>

<template>
  <section class="stats-grid">
    <div class="stat-card">
      <h3>Total Habits</h3>
      <p>{{ totalHabits }}</p>
    </div>

    <div class="stat-card">
      <h3>Completed Today</h3>
      <p>{{ completedToday }}</p>
    </div>

    <div class="stat-card">
      <h3>Best Streak</h3>
      <p>{{ bestStreak }}</p>
    </div>
  </section>
</template>
