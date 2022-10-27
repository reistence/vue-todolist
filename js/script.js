const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        // {
        //   text: "Clean Room",
        //   done: false,
        // },
        // {
        //   text: "Do homework",
        //   done: true,
        // },
        // {
        //   text: "Clean Room",
        //   done: false,
        // },
        // {
        //   text: "Do homework",
        //   done: true,
        // },
        // {
        //   text: "Clean Room",
        //   done: false,
        // },
        // {
        //   text: "Do homework",
        //   done: true,
        // },
      ],
      newTask: {
        text: "",
        done: false,
      },
      longEnough: true,
      empty: false,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.text != "") {
        this.empty = false;
        if (this.newTask.text.length <= 1) {
          this.longEnough = false;
        } else {
          this.longEnough = true;
          this.newTask.text.trim();
          this.tasks.push({ ...this.newTask });
          this.newTask.text = "";
        }
      } else {
        this.empty = true;
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    // removeLastTask() {
    //   this.tasks.pop();
    // },
    doTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
}).mount("#app");
