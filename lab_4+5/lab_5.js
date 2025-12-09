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
    let obj = { a: 1, b: 2, c: 3 };
    alert("Через квадратные скобки: " + obj['c'] + "\nЧерез свойство объекта: " + obj.c);
});

const task_2 = document.querySelector(".task2");
task_2.addEventListener("click", () => {
    let daysOfWeek = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье",
    }

    const today = new Date();
    let dayNum = today.getDay();
    if (dayNum == 0) dayNum = 7;
    alert("День недели сегодня: " + daysOfWeek[dayNum]);
});

const task_3 = document.querySelector(".task3");
task_3.addEventListener("click", () => {
    let arr = [];
    let sumy = 0;
    for (let i = 1; i <= 20; i++) {
        arr.push(i);
        sumy += i;
    }
    alert("Среднее арифметическое чисел массива: " + sumy / arr.length);
});

const task_4 = document.querySelector(".task4");
task_4.addEventListener("click", () => {
    let arr1 = ['a', 'b', 'c'], arr2 = [1, 2, 3];
    alert("Объединённый массив: " + arr1.concat(arr2))
});

const task_5 = document.querySelector(".task5");
task_5.addEventListener("click", () => {
    let arr1 = ['a', 'b', 'c'];
    arr1.push(1);
    arr1.push(2);
    arr1.push(3);
    alert("Изменённый массив: " + arr1);
});

const task_6 = document.querySelector(".task6");
task_6.addEventListener("click", () => {
    let arr1 = [1, 2, 3];
    arr1 = arr1.reverse();
    alert("Перевёрнутый массив: " + arr1);
});

const task_7 = document.querySelector(".task7");
task_7.addEventListener("click", () => {
    let arr1 = [1, 2, 3];
    arr1.unshift(4);
    arr1.unshift(5);
    arr1.unshift(6);
    alert("Изменённый массив: " + arr1);
});

const task_8 = document.querySelector(".task8");
task_8.addEventListener("click", () => {
    let arr1 = ['js', 'css', 'jq'];
    alert("Первый элемент: " + arr1[0] + "\nПоследний элемент: " + arr1[arr1.length - 1]);
});

const task_9 = document.querySelector(".task9");
task_9.addEventListener("click", () => {
    let arr1 = [1, 2, 3, 4, 5];
    arr1 = arr1.slice(3, 5);
    alert("Срез массива: " + arr1);
});

const task_10 = document.querySelector(".task10");
task_10.addEventListener("click", () => {
    let arr1 = [1, 2, 3, 4, 5];
    arr1.splice(3, 0, 'a', 'b', 'c');
    alert("Изменённый массив: " + arr1);
});

const task_11 = document.querySelector(".task11");
task_11.addEventListener("click", () => {
    let arr = [3, 4, 1, 2, 7];
    arr.sort();
    alert("отсортированный массив: " + arr);
});

const task_12 = document.querySelector(".task12");
task_12.addEventListener("click", () => {
    let obj = { js: 'test', jq: 'hello', css: 'world' };
    let arrKeys = Object.keys(obj);
    alert("Значения ключей: " + arrKeys);
});

const task_13 = document.querySelector(".task13");
task_13.addEventListener("click", () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 20));
    }
    if (arr.includes(5)) alert("да");
    else alert("нет");
});

const task_14 = document.querySelector(".task14");
task_14.addEventListener("click", () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100) - 50);
    }
    let newArr = arr.filter(num => num > 0 && num < 10);
    alert("Новый массив: " + newArr);
});

function squar(num) {
    return num * num;
}
const task_15 = document.querySelector(".task15");
task_15.addEventListener("click", () => {
    let arr = [23, 34, 22, 9, 11];
    arr = arr.map(squar);
    alert("Массив квадратов: " + arr);
});

const task_16 = document.querySelector(".task16");
task_16.addEventListener("click", () => {
    let myname = {
        name: "Илья",
        sayHi() {
            alert("Привет, меня зовут " + this.name);
        }
    }
    myname.sayHi();
});

const task_17 = document.querySelector(".task17");
task_17.addEventListener("click", () => {
    const numberStorage = {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

        checkAndAdd: function (num) {
            if (this.numbers.includes(num)) {
                alert(`Число ${num} найдено в массиве`);
                return num;
            } else {
                alert(`Число ${num} не найдено. Добавляю в массив...`);
                this.numbers.push(num);
                return this.numbers;
            }
        }
    };

    numberStorage.checkAndAdd(5);
    numberStorage.checkAndAdd(43);
    numberStorage.checkAndAdd(43);
});

const task_18 = document.querySelector(".task18");
task_18.addEventListener("click", () => {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Student.prototype.sayHello = function () {
        alert(`Привет, меня зовут ${this.firstName}`);
    };

    const student1 = new Student('Илья', 'Евстратов');
    const student2 = new Student('Мария', 'Иванова');

    alert("Первый студент: ");
    student1.sayHello();
    alert(`Полное имя: ${student1.firstName} ${student1.lastName}`);

    alert("Второй студент: ");
    student2.sayHello();
    alert(`Полное имя: ${student2.firstName} ${student2.lastName}`);
});
