let info = {};

function addDetails() {
    info.name = prompt("Enter your Name");
    info.email = prompt("Enter your email");
    info.age = prompt("Enter your age");
    info.gender = prompt("Enter your gender");
}

function editDetails() {
    let updates = {};

    let name = prompt("Enter your Name (leave blank to keep current)");
    if (name) updates.name = name;

    let email = prompt("Enter your email (leave blank to keep current)");
    if (email) updates.email = email;

    let age = prompt("Enter your age (leave blank to keep current)");
    if (age) updates.age = age;

    let gender = prompt("Enter your gender (leave blank to keep current)");
    if (gender) updates.gender = gender;

    updateDetails(updates);
}

function updateDetails({ ...updates }) {
    info = { ...info, ...updates };
}