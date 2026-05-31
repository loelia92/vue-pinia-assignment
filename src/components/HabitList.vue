<script setup>
import { useHabitStore } from "../stores/habits";

const habitStore = useHabitStore();
</script>

<template>
  <section class="card">
    <div class="section-header">
      <h2>Your Habits</h2>

      <button class="secondary-btn" @click="habitStore.resetDay">Reset Day</button>
    </div>

    <p v-if="habitStore.habits.length === 0">No habits yet. Add one above.</p>

    <div v-else class="habit-list">
      <article v-for="habit in habitStore.habits" :key="habit.id" class="habit-item">
        <div>
          <h3>{{ habit.name }}</h3>

          <p>{{ habit.category }} | 🔥 {{ habit.streak }} day streak</p>
        </div>

        <div class="actions">
          <button @click="habitStore.toggleHabit(habit.id)">
            {{ habit.completedToday ? "Undo" : "Complete" }}
          </button>

          <button class="delete-btn" @click="habitStore.deleteHabit(habit.id)">Delete</button>
        </div>
      </article>
    </div>
  </section>
</template>
