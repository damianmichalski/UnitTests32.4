const minuteInSeconds = 60;
const hourInSeconds = minuteInSeconds * 60;
const dayInSeconds = hourInSeconds * 24;

const formatDate = (timeInSeconds) => {
  if (!timeInSeconds) {
    return '0s';
  }
    const day = Math.floor(timeInSeconds / dayInSeconds);
    let rest = timeInSeconds % dayInSeconds;
    const hours = Math.floor(rest / minuteInSeconds);
    rest = rest % minuteInSeconds;
    const min =  Math.floor(rest / minuteInSeconds);
    const sec = Math.floor(rest % minuteInSeconds);
    let time = '';

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
