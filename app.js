const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);
//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

/*const playerName = "archaon";
const playerLevels = 99;
const playerHansome = true;
const playerFat = "No";

const player = ["archaon", 99, true, "no"]; */


const player = {
    name:"archaon",
    levels: 99,
    hansome: true,
    fat: "no",
};

console.log(player);

player.fat = "yes";

console.log(player);

player.lastName = "everchosen"

console.log(player);

player.levels = 100;

console.log(player);