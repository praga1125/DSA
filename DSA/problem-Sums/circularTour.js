let petrolInCar = 2,
	count = 0;
let petrolBunks = ["A", "B", "C"];
let distance = [1, 5, 3];
let quantity = [6, 4, 2];
let sum = petrolInCar,
	n = petrolBunks.length;
for (let i = 0; i < n; i++) {
	sum -= distance[i];
	sum += quantity[i];
}

console.log(`The petrol contained in the car : ${petrolInCar}`);
console.log(`The petrol bunks are : [${petrolBunks}]`);
console.log(`The remaining petrol is : `);
console.log(sum);
