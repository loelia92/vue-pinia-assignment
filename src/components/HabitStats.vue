<script setup>
import { useHabitStore } from "../stores/habits";

const habitStore = useHabitStore();
</script>

<template>
  <section class="stats-grid">
    <div class="stat-card">
      <h3>Total Habits</h3>
      <p>{{ habitStore.totalHabits }}</p>
    </div>

    <div class="stat-card">
      <h3>Completed Today</h3>
      <p>{{ habitStore.completedToday }}</p>
    </div>

    <div class="stat-card">
      <h3>Best Streak</h3>
      <p>{{ habitStore.bestStreak }}</p>
    </div>
  </section>
</template>
