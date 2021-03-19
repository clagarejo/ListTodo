export default class Model {
    constructor() {
        this.view = null;
        // Obtenemos una estructura de datos del localStorage
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'Prueba numero 1000',
                    description: 'Primer todo list',
                    completed: false,
                }
            ]
            this.currentId = 1
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
    }

    setView(view) {
        this.view = view;
    }

    getTodos() {
        return this.todos.map((todo) => ({...todo}))
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    // Funcion para guardar informacion en el localStorage
    save() {
        // Pasamos los datos string 
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Funcion para marcar como completado
    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save()
    }

    editTodo(id, values){
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values)
        this.save()
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        // Añadimos el obejo a al array de elementos
        this.todos.push(todo)
        console.log(this.todos)

        this.save()
        // Retornamos un con, a un objeto vacio le asignamos las propiedas de todo
        return { ...todo }
    }

    removeTodo(id) {
        // Buscamos el indice del todo
        const index = this.findTodo(id)
        this.todos.splice(index, 1);
        this.save()
    }
}
