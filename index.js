const formatDate = (timeInSeconds) => {
    const day = timeInSeconds / 86400;
    let rest = timeInSeconds % 86400;
    const h = rest / 3600;
    rest = rest % 3600;
    const min =  rest / 60;
    const sec = rest % 60;
    let time = '';
    if (Math.floor(day) > 0) {
        time = Math.floor(day) + 'd ';
    }
    if (Math.floor(h) > 0) {
        time += Math.floor(h) + 'h ';
    }
    if (Math.floor(min) > 0) {
        time += Math.floor(min) + 'm ';
    } 
    if (Math.floor(sec) > 0) {
        time += Math.floor(sec) + 's';
    } 
    if (!time.length)
        time = `0s`;
    return time.trim();
}
    
module.exports = formatDate;