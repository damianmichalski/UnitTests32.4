const dayInSeconds = 86400;
const dayInHours = 3600;
const minutes = 60;

const formatDate = (timeInSeconds) => {
    const day = Math.floor(timeInSeconds / dayInSeconds);
    let rest = timeInSeconds % dayInSeconds;
    const hours = Math.floor(rest / dayInHours);
    rest = rest % dayInHours;
    const min =  Math.floor(rest / minutes);
    const sec = Math.floor(rest % minutes);
    let time = '';
    if (!timeInSeconds) {
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
