"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("@jace1995/prompt");
function generator(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
function genNum() {
    const min = -10;
    const max = 10;
    const num = generator(min, max - 1);
    return num == 0 ? 10 : num;
}
function getSign() {
    const operation = generator(0, 3);
    const signs = ['+', '-', '/', '*'];
    return signs[operation];
}
function calculate(num1, num2, sign) {
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const num1 = genNum();
            const num2 = genNum();
            const str = num2 < 0 ? `(${num2})` : `${num2}`;
            const sign = getSign();
            const userAnswer = yield prompt_1.default(`Реши математический пример и запиши ЗДЕСЬ свой ШЕДЕВРАЛЬНЫЙ ответ.
    Если нужно записать дробное число, запиши его через ТОЧКУ и только с ОДНИМ ЗНАКОМ после заятой:
    ${num1} ${sign} ${str} = `);
            const rezult = calculate(num1, num2, sign);
            if (userAnswer == null || +userAnswer != rezult) {
                console.log('Топай спать, бухарик!');
                break;
            }
            else
                console.log('Продолжаем!');
        }
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0dGUuanMiLCJzb3VyY2VSb290IjoiRTovSlNwcm9qZWN0cy9ub2RlLXByb2plY3Qvc3JjLyIsInNvdXJjZXMiOlsibGF0dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFzQztBQUV0QyxtQkFBbUIsR0FBVyxFQUFFLEdBQVc7SUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQ7SUFDSSxNQUFNLEdBQUcsR0FBVyxDQUFDLEVBQUUsQ0FBQztJQUN4QixNQUFNLEdBQUcsR0FBVyxFQUFFLENBQUM7SUFDdkIsTUFBTSxHQUFHLEdBQVcsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBRS9CLENBQUM7QUFFRDtJQUNJLE1BQU0sU0FBUyxHQUFXLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxLQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxtQkFBbUIsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZO0lBQ3ZELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDWCxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUNELEtBQUssR0FBRyxFQUFFLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBQ0QsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUM7UUFDRCxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUNELFNBQVMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0FBQ0wsQ0FBQztBQUVEOztRQUNJLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksR0FBVyxNQUFNLEVBQUUsQ0FBQztZQUM5QixNQUFNLElBQUksR0FBVyxNQUFNLEVBQUUsQ0FBQztZQUM5QixNQUFNLEdBQUcsR0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ3ZELE1BQU0sSUFBSSxHQUFXLE9BQU8sRUFBRSxDQUFDO1lBQy9CLE1BQU0sVUFBVSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQzs7TUFFbEMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sTUFBTSxHQUFXLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUM7WUFDVixDQUFDO1lBQUMsSUFBSTtnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0NBQUE7QUFDRCxJQUFJLEVBQUUsQ0FBQyJ9