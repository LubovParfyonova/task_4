// Конвертер

const chooseOperation = prompt('Выберите опрацию: \n 1 - преобразовать доллар в грн; \n 2 - преобразовать грн в доллар');

const num = +prompt('Введите сумму для преобразования');

const res = converter(num,chooseOperation);
console.log(res);


function getGrn(x){
    return x * 27.29;
}
function getDolar(x){
    return x / 27.29;
}

function converter(number, operation){

        let i;

        switch (operation){
            case '1':
                i = getGrn;
                break;
            case '2':
                i = getDolar;
                break;
        }

        if (typeof i === 'function'){
            const result = i (number);
            return result;
        }else{
            alert('Неправильно выбрана операция');
            return null;
        }
}
