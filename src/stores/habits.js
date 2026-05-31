import { defineStore } from "pinia";

export const useHabitStore = defineStore("habitStore", {
  state: () => ({
    habits: [
      {
        id: 1,
        name: "Drink Water",
        category: "Health",
        streak: 3,
        completedToday: false,
      },
      {
        id: 2,
        name: "Study Vue",
        category: "School",
        streak: 5,
        completedToday: true,
      },
    ],
  }),

  getters: {
    totalHabits: (state) => state.habits.length,

    completedToday: (state) => state.habits.filter((habit) => habit.completedToday).length,

    bestStreak: (state) => {
      if (state.habits.length === 0) return 0;
      return Math.max(...state.habits.map((habit) => habit.streak));
    },
  },

  actions: {
    addHabit(name, category) {
      const newHabit = {
        id: Date.now(),
        name,
        category,
        streak: 0,
        completedToday: false,
      };

      this.habits.push(newHabit);
    },

    toggleHabit(id) {
      const habit = this.habits.find((habit) => habit.id === id);

      if (habit) {
        habit.completedToday = !habit.completedToday;

        if (habit.completedToday) {
          habit.streak++;
        } else if (habit.streak > 0) {
          habit.streak--;
        }
      }
    },

    deleteHabit(id) {
      this.habits = this.habits.filter((habit) => habit.id !== id);
    },

    resetDay() {
      this.habits.forEach((habit) => {
        habit.completedToday = false;
      });
    },
  },
});
