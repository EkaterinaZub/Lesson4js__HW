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
    let arr=[`ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`, `ВС`]
    
    for (let i=0; i<arr.length; i++){
                                           
         if (arr[i] == `СБ` || arr[i]== `ВС`){

            document.write(`<b>  ${arr[i]}  </b>`);
        }
        else{
            document.write(` ${arr[i]} `);
        }
    }
    
    
}

