// Дз 1

// let prom = prompt("Введите возраст")


// if (Number(prom) <= 30 &&  Number(prom)>=0) {
//     alert("Вы молодой человек")
// }
// else if(Number(prom) >30 && Number(prom) <=60){
// alert("Кризис среднего возраста")
// }
// else if(Number(prom)>60){
// alert("Вы старик")
// }
// else{alert("Вы не существуете")}

// доп дз

let prom = prompt("Введите число");

prom = Number(prom);

console.log(Number.isInteger(prom));

if (Number.isInteger(prom) === true){
    alert("Вы ввели число")
}else if(Number.isInteger(prom)=== false){
    alert("Введенно некорректное значение")
}