import prompt from '@jace1995/prompt';

function generator(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function genNum(): number {
    const min: number = -10;
    const max: number = 10;
    const num: number = generator(min, max - 1);
    return num == 0 ? 10 : num;

}

function getSign(): string {
    const operation: number = generator(0, 3);
    const signs: string[] = ['+', '-', '/', '*'];
    return signs[operation];
}

function calculate(num1: number, num2: number, sign: string): number {
    switch (sign) {
        case '+': {
            return num1 + num2;
        }
        case '-': {
            return num1 - num2;
        }
        case '/': {
            return Math.round(num1 / num2 * 10) / 10;
        }
        case '*': {
            return num1 * num2;
        }
        default: return 0;
    }
}

async function main() {
    while (true) {
        const num1: number = genNum();
        const num2: number = genNum();
        const str: string = num2 < 0 ? `(${num2})` : `${num2}`;
        const sign: string = getSign();
        const userAnswer = await prompt(`Реши математический пример и запиши ЗДЕСЬ свой ШЕДЕВРАЛЬНЫЙ ответ.
    Если нужно записать дробное число, запиши его через ТОЧКУ и только с ОДНИМ ЗНАКОМ после заятой:
    ${num1} ${sign} ${str} = `);
        const rezult: number = calculate(num1, num2, sign);
        if (userAnswer == null || +userAnswer != rezult) {
            console.log('Топай спать, бухарик!');
            break;
        } else console.log('Продолжаем!');
    }
}
main();
