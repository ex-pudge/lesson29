function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
        return "Некоректний формат дати";
        }
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}
const date1 = "2023-03-12";
const date2 = "2024-05-30";
console.log(daysBetweenDates(date1, date2));
