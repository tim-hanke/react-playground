export default function leapYear(year) {
    if (year < 1582) {
        throw new Error('Leap years started with year 1582')
    }
    if (year % 4 === 0 && !(year % 100 === 0)) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    }
    return false;
}