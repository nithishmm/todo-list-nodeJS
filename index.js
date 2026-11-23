const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function showMenu() {
    console.log("\n===== TO-DO LIST APP =====");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit");

    rl.question("Choose an option: ", function(choice) {

        if (choice === "1") {
            rl.question("Enter your task: ", function(task) {
                tasks.push(task);
                console.log("Task added successfully!");
                showMenu();
            });
        }

        else if (choice === "2") {
            console.log("\nYour Tasks:");

            if (tasks.length === 0) {
                console.log("No tasks available.");
            } else {
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                });
            }

            showMenu();
        }

        else if (choice === "3") {
            rl.question("Enter task number to delete: ", function(number) {
                const index = Number(number) - 1;

                if (Number.isInteger(index) &&
                    index >= 0 && index < tasks.length) {
                    tasks.splice(index, 1);
                    console.log("Task deleted successfully!");
                } else {
                    console.log("Invalid task number.");
                }

                showMenu();
            });
        }

        else if (choice === "4") {
            console.log("Thank you for using To-Do List!");
            rl.close();
        }

        else {
            console.log("Invalid option!");
            showMenu();
        }
    });
}

showMenu();