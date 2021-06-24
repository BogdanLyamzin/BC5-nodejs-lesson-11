// var year
const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error("Аргумент не передан");
    }
    if(typeof year !== "number") {
        throw new Error("Аргумент должен быть Number и Integer");
    }
    if(!Number.isInteger(year)){
        throw new Error("Число должно быть целым");
    }

    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
}

module.exports = isLeapYear;