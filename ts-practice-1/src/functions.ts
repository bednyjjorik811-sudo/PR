// Задание 3.1
function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
    console.log(message);
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}

// Задание 3.2
// Корректные вызовы
console.log(formatPrice(1234.5)); // "1 234,50 ₽"
console.log(clamp(15, 0, 10)); // 10
logMessage("Привет"); // "Привет"
console.log(repeat("abc")); // "abcabc"
console.log(describeUser("Иван")); // "Иван"
console.log(describeUser("Иван", 25)); // "Иван, возраст: 25"

// Некорректные вызовы
// formatPrice("100"); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// clamp(5, 0); // error TS2554: Expected 3 arguments, but got 2.
// logMessage(123); // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// Задание 3.3
// void — функция ничего не возвращает, используется для функций с побочными эффектами (logMessage)
// undefined — конкретное значение, функция возвращает его явно
function returnUndefined(): undefined {
    return undefined;
}
