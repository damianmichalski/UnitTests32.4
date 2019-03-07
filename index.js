const formatDate = (timeInSeconds) => {
    const dayInSeconds = 86400;
    const day = Math.floor(timeInSeconds / dayInSeconds);
    let rest = timeInSeconds % dayInSeconds;
    const dayInHours = 3600;
    const hours = Math.floor(rest / dayInHours);
    rest = rest % dayInHours;
    const dayInMinutes = 60;
    const min =  Math.floor(rest / dayInMinutes);
    const sec = Math.floor(rest % dayInMinutes);
    let time = '';
    if (!time.length) {
        return '0s';
    }
    if (day > 0) {
        time = day + 'd ';
    }
    if (hours > 0) {
        time += hours + 'h ';
    }
    if (min > 0) {
        time += min + 'm ';
    } 
    if (sec > 0) {
        time += sec + 's';
    } 

    return time.trim();
}
    
module.exports = formatDate;