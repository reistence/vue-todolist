const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          text: "Clean Room",
          done: false,
        },
        {
          text: "Do homework",
          done: true,
        },
        {
          text: "Clean Room",
          done: false,
        },
        {
          text: "Do homework",
          done: true,
        },
        {
          text: "Clean Room",
          done: false,
        },
        {
          text: "Do homework",
          done: true,
        },
      ],
      newTask: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    addTask() {
      if (this.newTask.text) {
        this.newTask.text.trim();
        this.tasks.push({ ...this.newTask });
        this.newTask.text = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    removeLastTask() {
      this.tasks.pop();
    },
    doTask(index) {
      if (this.tasks[index].done === true) {
        this.tasks[index].done = false;
      } else {
        this.tasks[index].done = true;
      }
    },
  },
}).mount("#app");
