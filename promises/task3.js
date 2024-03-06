
const BASE_URL = 'https://jsonplaceholder.typicode.com'
async function fetchTodoById(id){
    const response = await fetch(`${BASE_URL}/todos/${id}`)
    const body = await response.json()
    return body
}

async function fetchUsersById(id){
    const response = await fetch(`${BASE_URL}/users/${id}`)
    const body = await response.json()
    return body
}

Promise.all([
    fetchTodoById(1),
    fetchUsersById(1),
]).then((values)=> console.log(values))

Promise.race([
    fetchTodoById(1),
    fetchUsersById(1),
]).then((values)=> console.log(values))