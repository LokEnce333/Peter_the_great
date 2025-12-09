const links = document.querySelectorAll(".toggle-link");

links.forEach(link => {
    link.addEventListener("click", () => {

        const blockId = link.getAttribute("data-target");
        const block = document.getElementById(blockId);

        if (block.style.display == "none" || block.style.display == "") {
            block.style.display = "block";
            link.textContent = "Скрыть";
        } else {
            block.style.display = "none";
            link.textContent = `Задание ${blockId}`;
        }
    });
});

const task_1 = document.querySelector(".task1");
task_1.addEventListener("click", () => {
    let num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;
    alert(num);
});

const task_2 = document.querySelector(".task2");
task_2.addEventListener("click", () => {
    let a = 6;
    let b = 9;
    alert("Сумма: " +(a + b)+"\n"+
        "Разность: " + (a - b)+"\n"+
        "Произведение: " + a * b + "\n"+
        "Частное: "+ a / b
    );
});

const task_3 = document.querySelector(".task3");
task_3.addEventListener("click", () => {
    let str1 = 'Привет,', str2 = 'Мир!';
    alert(str1 + ' ' + str2);
});

const task_4 = document.querySelector(".task4");
task_4.addEventListener("click", () => {
    let str = 'abcde';
    alert(str[0]+'\n'+str[2]+'\n'+str[4]);
});

const task_5 = document.querySelector(".task5");
task_5.addEventListener("click", () => {
    let res = prompt('Введите число: ');
    if(res > 0 && res < 5){
        alert('Верно');
    }
    else{
        alert('Неверно');
    }
});

const task_6 = document.querySelector(".task6");
task_6.addEventListener("click", () => {
    let str = 'aaa@bbb@ccc';
    str = str.replaceAll('@', '!');
    alert(str);
});

const task_7 = document.querySelector(".task7");
task_7.addEventListener("click", () => {
    let str = 'я учусь на ИРИТ!';
    alert(str.length);
});

const task_8 = document.querySelector(".task8");
task_8.addEventListener("click", () => {
    let str = '';
    for(let i = 1; i < 10; i++){
        for(let j = 0; j < i; j++){
            str += i;
        }
        str += '\n';
    }
    alert(str);
});

const task_9 = document.querySelector(".task9");
task_9.addEventListener('click', () => {
    let n = 3, m = 4;
    alert("Длина гипотенузы равна: " + Math.sqrt(n**2 + m**2));
});

const task_10 = document.querySelector(".task10");
task_10.addEventListener('click', () => {
    if(confirm("Нажмите ОК или Отмена")){
        alert("ОК");
    }
    else{
        alert("Отмена");
    }
});

const task_11 = document.querySelector(".task11");
task_11.addEventListener('click', () => {
    let name = prompt("Введите свое имя");
    if(confirm("Введенное имя правильное?")){
        alert("Здравствуйте, " + name);
    }
    else{
        alert("Имя введено неправильно");
    }
});

const task_12 = document.querySelector(".task12");
task_12.addEventListener('click', () => {
    let num1 = Number(prompt("Введите первое число")), num2 = Number(prompt("Введите второе число")), num3 = Number(prompt("Введите третье число"));
    alert("Наибольшее число: " + Math.max(num1, num2, num3))
});

const task_13 = document.querySelector(".task13");
task_13.addEventListener('click', () => {
    let num = Number(prompt("Введите трёхзначное число"));
    if(num / 100 < 1 || num / 100 >= 10){
        alert("Вы ввели не трёхнзначное число");
    }
    else{
        if(num % 2){
            alert(Math.floor(num / 100) * Math.floor((num % 100) / 10) * Math.floor(num % 10));
        }
        else{
            alert(Math.floor(num / 100) + Math.floor((num % 100) / 10) + Math.floor(num % 10));
        }
    }
});

const task_14 = document.querySelector(".task14");
task_14.addEventListener('click', () => {
    let num = Number(prompt("Введите число: 1, 2, 3 или 4"));
    switch (num){
        case 1:
            alert("Весна");
            break;
        case 2:
            alert("Лето");
            break;
        case 3:
            alert("Осень");
            break;
        case 4:
            alert("Зима");
            break;
    }
});

const task_15 = document.querySelector(".task15");
task_15.addEventListener('click', () => {
    let num = Number(prompt("Введите число"));
    let obr = '';
    while(num > 0){
        obr += num % 10;
        num = Math.floor(num/10);
    }
    alert("Обратное число: " + obr);
});


const task_16 = document.querySelector(".task16");
task_16.addEventListener('click', () => {
    let stop = false;

    document.addEventListener('keydown', function(event){
        if(event.key == 'Escape'){
            stop = true;
        }
    })


    let cnt = 0, sumy = 0;
    while(!stop){
        let num = Number(prompt("Введите число:"));
        if(num == 0) break;
        cnt++;
        sumy += num;
    }
    alert("Количество чисел :" + cnt + '\nСумма чисел: ' + sumy + "\nСреднее арифметическое чисел: " + sumy/cnt);
});

function squre(num){
    return num*num;
}
const task_17 = document.querySelector(".task17");
task_17.addEventListener('click', () => {
    alert("Квадрат числа: " + squre(Number(prompt("Введите число: "))));
});

function sayDayOfWeek(day){
    switch(day){
        case 1:
            return("Понедельник")
        case 2:
            return("Вторник")
        case 3:
            return("Среда")
        case 4:
            return("Четверг")
        case 5:
            return("Пятница")
        case 6:
            return("Суббота")
        case 7:
            return("Воскресенье")
    }
}
const task_18 = document.querySelector(".task18");
task_18.addEventListener('click', () => {
    alert("День недели: " + sayDayOfWeek(Number(prompt("Введите день от 1 до 7: "))));
});

function buildPiramidka(row){
    let piramidka = '';
    for(let i = 1; i <= row; i++){
        for(let j = 0; j < i; j++){
            piramidka += '*';
        }
        piramidka += "\n";
    }
    return piramidka;
}
const task_19 = document.querySelector(".task19");
task_19.addEventListener('click', () => {
    alert(buildPiramidka(Number(prompt("Введите высоту пирамидки: "))));
});

const task_20 = document.querySelector(".task20");
task_20.addEventListener('click', () => {
    let ans = function(){
        let num = Number(prompt("Введите число: "));
        if(0 < num && num < 10) return true;
        else return false; 
    }
    alert(ans());
})

const task_21 = document.querySelector(".task21");
task_21.addEventListener('click', () => {
    let a1 = Number(prompt("Введите парметр a1: "))
    let a2 = Number(prompt("Введите парметр a2: "))
    let a3 = Number(prompt("Введите парметр a3: "))
    let a4 = Number(prompt("Введите парметр a4: "))
    let a5 = Number(prompt("Введите парметр a5: "))
    let x = Number(prompt("Введите x: "))
    let ans = (a1, a2, a3, a4, a5, x) => {return a1*x**4 + a2*x**3 + a3*x**2 + a4*x + a5};
    alert(ans(a1, a2, a3, a4, a5, x))
})

function findFibonachi(num){
    if(num == 1) return 1;
    if(num == 0) return 0;
    return findFibonachi(num-1) + findFibonachi(num-2);
}
const task_22 = document.querySelector(".task22");
task_22.addEventListener('click', () => {
    alert("Число Фибоначчи: " + findFibonachi(Number(prompt("Введи номер числа Фибоначчи, коротое хочешь узнать: "))));
})

function a(func){
    let num = Number(prompt("Введите число: "));
    func(num);
}
const task_23 = document.querySelector(".task23");
task_23.addEventListener('click', () => {
    a(function(n){alert(n)});
})