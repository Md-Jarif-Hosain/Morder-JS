export function modifier(strings, ...values) {
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr " + values.shift() : "")
    }, "")
    return m;
}
var player1 = "sakib";
var player2 = "Jarif";

// console.log(modifier`We have ${player1} and ${player2} in our team`);
console.log(modifier`We have ${player1} and ${player2} in our team`);