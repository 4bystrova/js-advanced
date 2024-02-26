function fetchTodoById(id){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((jsonBody)=> console.log(jsonBody))
        .catch((e)=> console.log(e))
}

function fetchUsersById(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((jsonBody)=> console.log(jsonBody))
        .catch((e)=> console.log(e))
}

Promise.all([
    fetchTodoById(1),
    fetchUsersById(1),
]).then((values)=> console.log(values))

Promise.race([
    fetchTodoById(1),
    fetchUsersById(1),
]).then((values)=> console.log(values))