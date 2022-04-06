

const getMonth = () => {
    let monthRes = []
    const now = new Date()
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    now.setDate(1)
    for (let i = 0; i < 4; i++) {
        monthRes.push(now.getTime())
        now.setMonth(now.getMonth() + 1)
    }
    return monthRes
}

const getWeeks = (startTimeInMonth) => {
    const startDay = new Date(startTimeInMonth);
    const currentDay = new Date(startTimeInMonth);

    let days = [];
    while (startDay.getMonth() === currentDay.getMonth()) {
        days.push(currentDay.getTime());
        currentDay.setDate(currentDay.getDate() + 1);
    }
    days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
        .fill(null)
        .concat(days);

    const lastDay = new Date(days[days.length - 1]);
    days = days.concat(
        new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
    );

    let weeks = [];
    for (let i = 0; i < days.length / 7; i++) {
        let week = days.slice(i * 7, (i + 1) * 7);
        weeks.push(week);
    }
    return weeks
}


export {
    getMonth,
    getWeeks
}