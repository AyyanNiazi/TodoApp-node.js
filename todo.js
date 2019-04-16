const fs = require('fs')

var addtodo = (title) => {
    var todos = fetchtodos();
    var todo = {
        title // equal to title:title
    }

    
    
    //check if duplicate item exist
    var duplicateTodo = todos.filter((todo) =>  todo.title === title );
    
    if(duplicateTodo.length === 0) {
         todos.push(todo);
         savetodos(todos);
         return todo;
    }
    else console.log("duplication found")

};

//delete functionality
var deletetodo = (title) => {
    var todos = fetchtodos();
    var filtertodos = todos.filter((e) => e.title !== title);
    savetodos(filtertodos);

    return todos.length !== filtertodos.length
};

//Read todo
var readtodo = (title) => {
    var todos = fetchtodos();
    var filtertodos = todos.filter((e) => e.title === title)
    return filtertodos[0]
}

//print all item print all item
var printall = () => {
    return fetchtodos()
}

//
var logtodo = (todo) => {
    // console.log(todo.title, "logger")
    console.log(`file title is: ${todo.title}`)
}
//utility function
var fetchtodos = () => {
    //exception handling
    try{
        var todoString = fs.readFileSync("todos-data.json");
        return JSON.parse(todoString);
    }
    catch(e){
        console.log(e, "from exctn error");
        return [];
    }
};

var savetodos = (todos) => {
    fs.writeFileSync("todos-data.json", JSON.stringify(todos));    
}



module.exports = {
    addtodo,
    deletetodo,
    readtodo,
    logtodo,
    printall
}