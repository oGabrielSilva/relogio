const generalDate = new Date()
const container = document.querySelector('.container')

function myScope() {
    const date = new Date()
    const day = date.getDate()
    const week = getWeek()
    const month = getMonth()
    const year = date.getFullYear()
    
    function getWeek(index) {
        index = date.getDay()

        switch (index) {
            case 0:
                return 'Domingo' 
            case 1: 
                return 'Segunda-feira' 
            case 2:
                return 'Terça-feira' 
            case 3:
                return 'Quarta-feira' 
            case 4:
                return 'Quinta-feira' 
            case 5:
                return 'Sexta-feira' 
            case 6:
                return 'Sábado' 
            default: 
                return 'Dps (não obtivemos o dia da semana)'
        }
    }

    function getMonth(index) {
        index = date.getMonth()

        switch (index) {
            case 0: return 'Janeiro'
            case 1: return 'Fevereiro' 
            case 2: return 'Março' 
            case 3: return 'Abril' 
            case 4: return 'Maio' 
            case 5: return 'Junho' 
            case 6: return 'Julho' 
            case 7: return 'Agosto' 
            case 8: return 'Setembro' 
            case 9: return 'Outubro' 
            case 10: return 'Novembro' 
            case 11: return 'Dezembro' 
        }
    }

    container.innerHTML = `<h3>${week}, ${day} de ${month} de ${year}</h3><h3 id='outHour'></h3>`
    getHour()
}

function getHour() {
    const newDate = new Date()
    const outHour = container.querySelector('#outHour')
    const hour = getHours()
    const minutes = getMinutes()
    const secondes = getSecondes()
    
    function getHours(index) {
        index = newDate.getHours()

        if (index <= 9) return `0${index}`

        return index
    }

    function getMinutes(index) {
        index = newDate.getMinutes()

        if (index <= 9) return `0${index}`

        return index
    }

    function getSecondes(index) {
        index = newDate.getSeconds()

        if (index <= 9) return `0${index}`

        return index
    }

    outHour.innerHTML = `${hour}:${minutes}:${secondes}`

    const newDay = newDate.getDate()
    if (newDay !== generalDate.getDate()) {
        myScope()
    }
}

setInterval(() => {
    getHour()
},1000)

myScope()