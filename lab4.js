function SortDataPosts(callback){
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(data => {
            const sortedData = data.sort((a,b)=>b.title.length-a.title.length);
            callback(sortedData);
        })
}

function SortDataComms(callback){
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=> response.json())
        .then(data => {
            const sortedData = data.sort((a,b) => a.name.length-b.name.length);
            callback(sortedData);
        })
}

function StoreSomeData() {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
            .then(users=>{
                const filteredUsers = users.map(user=> ({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone
                }));
                resolve(filteredUsers);
            })
    })
}

function StoreSomeTasks() {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>{
                return response.json();
            })
            .then(tasks=>{
                const filteredTasks = tasks.filter(task => task.completed === false);
                resolve(filteredTasks);
            });
    })
}

async function asSortDataPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return data.sort((a,b)=>b.title.length-a.title.length);
}

async function asSortDataComms(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();
    return data.sort((a,b)=>a.name.length-b.name.length)
}

async function asStoreSomeData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const filteredUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
        
    return filteredUsers;
}

async function asStoreSomeTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await response.json();
    const filteredTasks = tasks.filter(task => task.completed === false);
    return filteredTasks;
}


SortDataPosts(function(data){
data.forEach(el => {
    console.log(el);
})
});

SortDataComms(function(data){
    data.forEach(el => {
        console.log(el);
    })
}); 

StoreSomeData()
    .then(users => {
        users.forEach(user => {
            console.log(user);
        })
    })

StoreSomeTasks()
    .then(tasks=>{
        tasks.forEach(task=>{
            console.log(task);
        })
    })

asSortDataPosts()
    .then(posts => {
        console.log(posts);
    })

asSortDataComms()
    .then(comms => {
        console.log(comms);
    })

asStoreSomeData()
    .then(users =>{
        console.log(users);
    })

StoreSomeTasks()
    .then(tasks =>{
        console.log(tasks);
    })

