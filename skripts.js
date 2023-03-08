"Use strict"

// task 1
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    for (let name of arr) {
        console.log(name);
    }
}

// task 2
// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

{
    let array = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

    for (i = 0; i < array.length; i++) {
        if (array[i] > -10 && array[i] < -3) {
            console.log(array[i]);
        }
    }

}

// task 3
// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.


{
    let emptyArr = [];
    let result = 0;

    for (let i = 23; i <= 57; i++) {
        emptyArr.push(i);
        result += i
    }
    console.log(emptyArr);
    console.log(result);
}
{
    let emptyArr = [];
    let i = 23;

    while (i <= 57) {
        emptyArr.push(i);
        i++;
    }
    console.log(emptyArr);
}

{
    let result = 0;
    for (let i = 23; i <= 57; i++) {

        result += i
    }
    console.log(result);

}

// task 4
// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

{
    let arr = [`10`, `20`, `30`, `50`, `235`, `3000`];

    console.log(arr)


    for (let i = 0; i < arr.length; i++) {
        let num = String(arr[i]);
        if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
            console.log(num);
        }
    }

}

//  task 5
// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

{
    let arr = [`ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`, `ВС`]

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == `СБ` || arr[i] == `ВС`) {

            document.write(`<b>  ${arr[i]}  </b>`);
        }
        else {
            document.write(` ${arr[i]} `);
        }
    }

}

// task 6
// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

{
    let arr = [4, 6, 7, `яблоко`, `aпельсин`, 567, 834]

    arr[arr.length] = `лимон`;

    console.log(arr);
}

// task 7
// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

{
    let arr = [];
    let count = 0;



    while (true) {
        let num = +prompt("Введите число");

        if (num === 0) break;{

        if (isFinite(num)) {
            arr.push(num);
            count++
        }}
    }
    console.log(arr);
        arr.sort(function(a,b) {
    return a-b
        });
        console.log(arr);

}
// task 8
// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

{
    let arr5 = [12, false, "Текст", 4, 2, -5, 0];

    arr5.reverse();
    console.log(arr5);

    let i = arr5.length - 1;
    while (i >= 0) {
        console.log(arr5[i]);
        i--;
    }

}

// task 9
// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

{
    let arr7 = [5, 9, 21, , , 9, 78, , , , 6];
    let count = 0;

    for (let i = 0; i < arr7.length; i++) {
        if (arr7[i] === undefined) {
            console.log(arr7);
            count++;
        }
    } console.log(count);
}

// task 10
// Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

{
    let arr8 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
    let sum = 0;


    for (let i = 0; i < arr8.length; i++) {
        let arr9 = arr8.slice(arr8.indexOf(0), arr8.lastIndexOf(0));
        console.log(arr9);
        sum = 0;
        for (let j = 0; j < arr9.length; j++) {
            sum += arr9[j];
        }
    }
    console.log(sum);

}