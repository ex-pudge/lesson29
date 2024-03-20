function calculateAge(birthday) {
    const parts = birthday.split('-');
    const birthYear = parseInt(parts[0]);
    const birthMonth = parseInt(parts[1]) - 1; 
    const birthDay = parseInt(parts[2]);
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        age--; 
    }

    return age;
}
const birthday = "1999-01-01";
const age = calculateAge(birthday);
console.log("Ваш вік: " + age);
