<script setup>
import { storeToRefs } from "pinia";
import { useHabitStore } from "../stores/habits";

const habitStore = useHabitStore();
const { habits } = storeToRefs(habitStore);
const { toggleHabit, deleteHabit, resetDay } = habitStore;
</script>

<template>
  <section class="card">
    <div class="section-header">
      <h2>Your Habits</h2>

      <button class="secondary-btn" @click="resetDay">Reset Day</button>
    </div>

    <p v-if="habits.length === 0">No habits yet. Add one above.</p>

    <div v-else class="habit-list">
      <article v-for="habit in habits" :key="habit.id" class="habit-item">
        <div>
          <h3>{{ habit.name }}</h3>
          <p>{{ habit.category }} | 🔥 {{ habit.streak }} day streak</p>
        </div>

        <div class="actions">
          <button @click="toggleHabit(habit.id)">
            {{ habit.completedToday ? "Undo" : "Complete" }}
          </button>

          <button class="delete-btn" @click="deleteHabit(habit.id)">Delete</button>
        </div>
      </article>
    </div>
  </section>
</template>
