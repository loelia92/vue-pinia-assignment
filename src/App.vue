<script setup>
import HabitForm from "./components/HabitForm.vue";
import HabitList from "./components/HabitList.vue";
import HabitStats from "./components/HabitStats.vue";
</script>

<template>
  <main class="app">
    <section class="hero">
      <h1>Habit Tracker</h1>
      <p>Build better habits and track your daily progress.</p>
    </section>

    <HabitStats />
    <HabitForm />
    <HabitList />
  </main>
</template>
