const users = [
    { id: 1, name: "John Doe", salary: "2000$",position:"senior" },
    { id: 2, name: "Jane Smith", salary: "1500$",position:"middle" },
    { id: 3, name: "Alice Johnson", salary: "1000$",position:"middle" }
];


function populateUserList() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.salary}</td>
            <td>${user.position}</td>
            <td><button onclick="editUser(${user.id})">Edit</button></td>
        `;
        userList.appendChild(row);
    });
}

function editUser(userId) {
    window.location.href = `edit.html?id=${userId}`;
}

document.addEventListener("DOMContentLoaded", function() {
    populateUserList();
});
