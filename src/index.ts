import { fruits } from '../data/case1';
import { comments } from '../data/case2';

// 1
const fruitNames = fruits.map(fruit => fruit.fruitName.toLowerCase());
const filtertedFruits = fruitNames.filter((value, index, self) => self.indexOf(value) === index);
console.log(filtertedFruits);

// 2
const fruitType = fruits.map(fruit => fruit.fruitType);
const filtertedFruitType = fruitType.filter((value, index, self) => self.indexOf(value) === index);
console.log("Jumlah wadah:", filtertedFruitType.length);

filtertedFruitType.forEach(type => {
	const fruitsInType = fruits.filter(fruit => fruit.fruitType === type);
	console.log(`Fruit type ${type}:`, fruitsInType.map(fruit => fruit.fruitName.toLocaleLowerCase()).filter((value, index, self) => self.indexOf(value) === index));
});

// 3
const totalStock = (fruits: any[], type: string): number => {
	return fruits.filter(fruit => fruit.fruitType === type).reduce((acc, fruit) => acc + fruit.stock, 0);
}

for (let type of filtertedFruitType) {
	console.log(`Total stock ${type}:`, totalStock(fruits, type));
}

// 5
const countComments = (comments: any[]): number => {
	let count = 0;
	comments.forEach(comment => {
		count++;
		if (comment.replies) {
			count += countComments(comment.replies);
		}
	});
	return count;
}

console.log("Total comments:", countComments(comments));
