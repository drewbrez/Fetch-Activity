// Fetch Activity Drew Brezenski, Grant Anderson, Leo Curatola

// Task One Github API

// Q1 - Number of Repos

fetch("https://api.github.com/users/drewbrez")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.public_repos);
  });

// Q2 - Number of Followers

fetch("https://api.github.com/users/drewbrez")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.followers);
  });

// Q3 - UserIDs for all followers

fetch("https://api.github.com/users/drewbrez/followers")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.id);
    });
  });

// Task Two - JSON Placeholder API

// Q1 - Number of Comments

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    console.log(comments.length);
  });

// Q2 - Total Number of All Photos

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos.length);
  });

// Q3 - Name and Email of Each User

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name, user.email);
    });
  });

// Q4 - Name and Current City

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log(user.name, user.address.city);
    });
  });

// Q5 - Total number of todos completed

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    let complete = todos.filter((todo) => todo.completed).length;
    console.log(complete);
  });

// Q6 - Titles and IDs of all todos completed

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    let complete = todos.filter((todo) => todo.completed);
    complete.forEach((todo) => console.log(todo.id, todo.title));
  });

// Q7 - Name of users with incomplete todos

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    let incomplete = todos.filter((todo) => !todo.completed);
    incomplete.forEach((todo) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
        .then((response) => response.json())
        .then((user) => console.log(user.name));
    });
  });

// Q8 - Name of user who owns the album with the title quidem molestiae enim

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    let album = albums.find((album) => album.title === "quidem molestiae enim");
    fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
      .then((response) => response.json())
      .then((user) => console.log(user.name));
  });
