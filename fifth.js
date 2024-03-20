function workingDaysUntilDeadline(deadline) {
    let nowDate = new Date();
    let workingDays = 0;
    while (nowDate < deadline) {
        if (nowDate.getDay() !== 0 && nowDate.getDay() !== 6) {
            workingDays++;
        }
        nowDate.setDate(nowDate.getDate() + 1);
    }
    return workingDays;
}
const projectDeadline = new Date('2024-04-30'); 
const workingDays = workingDaysUntilDeadline(projectDeadline);
console.log('Кількість робочих днів до дєдлайна:', workingDays);
