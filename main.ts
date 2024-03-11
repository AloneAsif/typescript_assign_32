// question no 33   Ordinal Numbers:

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Ordinal: string = '';

for (let number of numbers) {
    if (number == 1) {
        Ordinal = 'st';
        console.log(number + Ordinal);
    } else if (number == 2) {
        Ordinal = 'nd';
        console.log(number + Ordinal);
    } else if (number == 3) {
        Ordinal = 'rd';
        console.log(number + Ordinal);
    } else {
        Ordinal = 'th';
        console.log(number + Ordinal);
    }
}
