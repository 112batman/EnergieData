function DaysInFrebuary(year) {
    if(Number.isInteger(year / 4) === true) {
        if(Number.isInteger(year / 100) === true) {
            return 28
        }else if(Number.isInteger(year / 400) === true) {
            return 28
        }else {
            return 29
        }
    }else {
        return 28
    }
}



module.exports = {
    AddDays: function(date, days) {

        var year = date.split('-')[0]
        var month = date.split('-')[1]
        var day = date.split('-')[2]

        const months = [
            31,
            DaysInFrebuary(year),
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ]

        var NewDay = Number(day) + days

        if(NewDay > months[Number(month) - 1]) {
            NewDay -= months[Number(month) - 1]
            var NewMonth = Number(month) + 1
            if(NewMonth > 12) {
                NewMonth -= 12
                var NewYear = Number(year) + 1
                return `${NewYear}-${NewMonth}-${NewDay}`
            }else {
                return `${year}-${NewMonth}-${NewDay}`
            }
        }else {
            return `${year}-${month}-${NewDay}`
        }
    }
}