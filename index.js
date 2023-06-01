const header = (text)=> {
    const header = document.createElement('h1')
    header.textContent = text
    document.body.prepend(header)
}
header('Работа с DOM')

const  addInMainLink = (linkWebsite, text)=> {
   const main = document.getElementById('main')
   const link = document.createElement('a')
   link.href = linkWebsite
   link.textContent = text
   main.append(link)
   return main
}
addInMainLink('https://ru.hexlet.io/courses/js-dom/lessons/dom/theory_unit', 'статья о DOM API')

const fonColor = (color) => document.body.style.backgroundColor = color
fonColor('white')

const addTextInList = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    document.getElementById('list').append(li)
}
addTextInList('js')

const deleteElement =(id)=> {
    const element = document.getElementById(id)
    element.remove()
}
deleteElement('copyright')