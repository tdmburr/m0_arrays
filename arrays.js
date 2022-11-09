var cats = ["Ryder", "White", "Ciipaya", "Berger"]
//.push will add Carson and Moxie to the end of the existing array designated to cats.
cats.push("Carson", "Moxie")
console.log(cats)
var numbers = [0, 1, 2, 3]
//.slice will start from the first element number and end at the selected element but won't include the element ended on. It will instead include the numbers leading up to that element as an output. This should result in the numbers 1 and 2 being displayed.
console.log(numbers.slice(1,3))
var working = true
var sitting = true
var standing = false
var breathing = true
var actions = [working, sitting, standing, breathing]
//.pop will remove the final element in the actions array and provide the boolean response to the question. Breathing? True.
console.log(actions.pop())

// An index position is denoted by the order or position in an array. Such as "Ryder" under cats would be index position 0. Ciipaya would be considered 2.