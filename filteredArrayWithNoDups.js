const arry= ["mimi", "Munyana", "kamanzi", "manzi", "mimi", "Munyana"]
//returns a filtered array with no reputation
let x = (arry) => arry.filter((i, j) => arry.indexOf(i) === j)
x(arry);