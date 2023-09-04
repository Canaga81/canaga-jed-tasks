//! 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. 
//! Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv 
//! formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

const userHistory = prompt('Zamani «YYYY.MM.DD» formatında daxil edin: ');

const date = new Date(userHistory);

const day = date.getDate();
const month = getMonthName(date.getMonth() + 1);
const year = yearNumber(date.getFullYear());

console.log(`${day} ${month} ${year}`);

function getMonthName(monthNumber) {
    
    const months = {
        1: 'Yanvar',
        2: 'Fevral',
        3: 'Mart',
        4: 'Aprel',
        5: 'May',
        6: 'Iyun',
        7: 'Iyul',
        8: 'Avqust',
        9: 'Sentyabr',
        10: 'Oktyabr',
        11: 'Noyabr',
        12: 'Dekabr',
    }

    return months[monthNumber];

}

function yearNumber(year) {

    const lastDigit = year.toString()[3];

    switch (+lastDigit) {
        case '1':
            return `${year} - ci il`;
        case '2':
            return `${year} - ci il`;
        case '3':
            return `${year} - cu il`;
        case '4':
            return `${year} - cu il`;
        case '5':
            return `${year} - ci il`;
        case '6':
            return `${year} - ci il`;
        case '7':
            return `${year} - ci il`;
        case '8':
            return `${year} - ci il`;
        case '9':
            return `${year} - cu il`;
        default:
            return `${year}-ci il`;
    }

}