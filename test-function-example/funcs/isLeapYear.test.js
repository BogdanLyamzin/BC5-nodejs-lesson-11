const isLeapYear = require("./isLeapYear")

/*
1. В качестве аргумента функция требует целое число. 
2. Мы ожидаем ответ true или false.

2008 -> true
2003 -> false
2000 -> true
1900 -> false
-28 -> true

Проброс ошибки:
() -> "Аргумент не передан"
2008.4 -> "Число должно быть целым"
"2008" -> "Аргумент должен быть Number и Integer"
null -> "Аргумент должен быть Number и Integer"
false -> "Аргумент должен быть Number и Integer"
true -> "Аргумент должен быть Number и Integer"
{} -> "Аргумент должен быть Number и Integer"
[] -> "Аргумент должен быть Number и Integer"
*/

describe("test isLeapYear function", ()=> {
    test("2008 - is leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true);
    });

    test("2003 - is not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("1900 - is not leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });
    
    test("2000 - is leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    test("-28 - is leap year", ()=>{
        expect(isLeapYear(-28)).toBe(true);
    });

    test("() - error 'Аргумент не передан'", ()=>{
        expect(()=>isLeapYear()).toThrow("Аргумент не передан");
    });

    test("2008.4 - error 'Число должно быть целым'", ()=>{
        expect(()=>isLeapYear(2008.4)).toThrow("Число должно быть целым");
    });

    test("null - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear(null)).toThrow("Аргумент должен быть Number и Integer");
    });

    test("'2008' - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear('2008')).toThrow("Аргумент должен быть Number и Integer");
    });

    test("false - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear(false)).toThrow("Аргумент должен быть Number и Integer");
    });

    test("true - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear(true)).toThrow("Аргумент должен быть Number и Integer");
    });

    test("{} - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear({})).toThrow("Аргумент должен быть Number и Integer");
    });

    test("[] - error 'Аргумент должен быть Number и Integer'", ()=>{
        expect(()=>isLeapYear([])).toThrow("Аргумент должен быть Number и Integer");
    });
})