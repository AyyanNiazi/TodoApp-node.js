const _ = require('lodash')
const yargs = require("yargs")
const todo = require('./todo')
var log = console.log()
const argv = yargs.argv;
var command = argv._[0];

console.log("you performed", command, "action");
switch(command){
    case "addtodo" : {
        var add =  todo.addtodo(argv.title);
        if(add) console.log("succesfully added");
        break;
    }
    case "deltodo" : {
        var tododeleted = todo.deletetodo(argv.title);
        var message = tododeleted ? "succesfully deleted" : "No Item Found"    
        console.log(message);
        break
    }
    case "readtodo" : {
        var todos = todo.readtodo(argv.title);
        if(todos){
            console.log("-----Found----")
            // console.log("Your selected file title is: ", todos)
            todo.logtodo(todos)
        }
        else console.log("your todo not found or may be you enter wrong spell");
        break
    }
    case "printall" : {
        var allitem = todo.printall();
        console.log(` Founded Item from list ${allitem.length} todo(s).`);
        allitem.forEach(element => {
            todo.logtodo(element)
        });
        break
    }

    default : console.log("entered wrong command")
}
// if (command === 'addtodo'){
    // var add =  todo.addtodo(argv.title);
    //     if(add) console.log("succesfully added")
// }
// if(command === "deltodo") {
//     var tododeleted = todo.deletetodo(argv.title);
//     var message = tododeleted ? "succesfully deleted" : "No Item Found"    
//     console.log(message)
// }
// else if (command === "readtodo"){
//     var todos = todo.readtodo(argv.title);
//     if(todos){
//         console.log("-----Found----")
//         // console.log("Your selected file title is: ", todos)
//         todo.logtodo(todos)
//     }
//     else console.log("your todo not found or may be you enter wrong spell")
// }
// else if (command === "printall"){
//     var allitem = todo.printall();
//     console.log(` Founded Item from list ${allitem.length} todo(s).`);
//     allitem.forEach(element => {
//         todo.logtodo(element)
//     });
// }
// else{ console.log("invalid command") }
// console.log(argv)