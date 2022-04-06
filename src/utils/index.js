
const h0 = (date = new Date()) => {
    const time = new Date(date)
    time.setHours(0)
    time.setMinutes(0)
    time.setSeconds(0)
    time.setMilliseconds(0)
    return time
}





export { h0 }