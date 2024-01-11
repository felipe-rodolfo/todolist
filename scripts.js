var listTasks = []
const ToDoList = {
    data(){
        return {
            listTasks,
            newTask:{
                id: Math.floor(Math.random() * 90000) + 10000,
                name: '',
                done: false
            }
        }
    },
    methods: {
        addTask: function(){
            if(!this.newTask.name)
                return alert("A task must to be passed")
            this.listTasks.push(this.newTask);
            this.newTask = {
                id: Math.floor(Math.random() * 90000) + 10000,
                name: '',
                done: false
            }
            localStorage.setItem("listTask", JSON.stringify(this.listTasks))
        },
        storeTodos(){
            localStorage.setItem("listTask", JSON.stringify(this.listTasks))
        }
    },
    created() {
        this.listTasks = localStorage.getItem("listTask") ? JSON.parse(localStorage.getItem("listTask")) : this.listTasks;
    },
}

Vue.createApp(ToDoList).mount("#app");
