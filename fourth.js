function calculateTimeToFutureDate(dateString) {
    const futureDate = new Date(dateString);
    const nowTime = Date.now();
    const timeSubtracting = futureDate - nowTime;
    const days = Math.floor(timeSubtracting  / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeSubtracting  %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeSubtracting  %  (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeSubtracting  % (1000 * 60)) / 1000);
    return {
        дні: days,
        години: hours,
        мінути: minutes,
        секунди: seconds
    };
}
const futureDate = '2040-12-02T12:00:00'; 
const resultTime = calculateTimeToFutureDate(futureDate);
console.log(resultTime);
