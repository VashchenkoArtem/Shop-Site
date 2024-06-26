const buttonsBuy = document.querySelectorAll(selectors = ".buy")

for (let count = 0; count < buttonsBuy.length; count++){
    let button = buttonsBuy[count]
    button.addEventListener(
        type = "click",
        listener = function(event) {
            if (document.cookie != ""){
                let current_product = document.cookie.split("=")[1]
                let id_product = current_product + " " + button.id
                document.cookie = `product = ${id_product}; path = /`
                window.location.reload()
            }

            else{
                document.cookie = `product = ${button.id}; path = /`
            }
        }
    )
}


const classProduct = document.querySelectorAll(".product")
for(let count = 0; count< classProduct.length; count++){
    let price = classProduct[count].querySelector(".price")
    let price1 = price.innerHTML.split(" ")[0]
    let discount = classProduct[count].querySelector(".discount")
    let discount1 = discount.innerHTML.split(" ")[1].split("%")[0]

    price.innerHTML = Math.floor(Number(price1 - price1 * discount1 / 100)) + " грн"
}
let clickCount = 0; 
       
function incrementCounter() { 
    clickCount++; 
    document.getElementById('counter').innerHTML = clickCount; 
    let header = document.getElementById('counter'); 
    console.log(header.innerHTML) 
 
    const counterElement = document.getElementById('counter'); 
    counterElement.style.position = 'absolute'; 
    counterElement.style.top = '15px'; 
    counterElement.style.left = '475px'; 
    counterElement.style.width = '35px'; 
    counterElement.style.height = '35px'; 
    counterElement.style.borderRadius = '50%'; 
    counterElement.style.border = '1px solid #000'; 
    counterElement.style.textAlign = 'center'; 
    counterElement.style.display = 'flex'; 
    counterElement.style.justifyContent = 'center'; 
    counterElement.style.alignItems = 'center'; 
    counterElement.style.backgroundColor = '#EFCB4A'; 
    counterElement.style.fontSize = '20px'; 
    counterElement.style.color = "black"; 
}
cookie = document.cookie

for (let count = 0; count < cookie.split(" ").length; count ++){
    if (cookie.split(" ") != 'product='){
        document.querySelector('.count_product').innerHTML = cookie.split(" ").length
        const counterElement = document.querySelector('.count_product') 
        counterElement.style.position = 'absolute'; 
        counterElement.style.top = '15px'; 
        counterElement.style.left = '475px'; 
        counterElement.style.width = '35px'; 
        counterElement.style.height = '35px'; 
        counterElement.style.borderRadius = '50%'; 
        counterElement.style.border = '1px solid #000'; 
        counterElement.style.textAlign = 'center'; 
        counterElement.style.display = 'flex'; 
        counterElement.style.justifyContent = 'center'; 
        counterElement.style.alignItems = 'center'; 
        counterElement.style.backgroundColor = '#EFCB4A'; 
        counterElement.style.fontSize = '20px'; 
        counterElement.style.color = "black"; 
    }

}
// Знаходимо об'єкт за класом
const buttonsImage = document.querySelectorAll(".pensilForImage")
// Перебираємо масив
for (let count = 0; count < buttonsImage.length; count++){
    // Знаходимо певну кнопку
    let button = buttonsImage[count]
    // Створюємо функцію
    button.addEventListener(
        // Додаємо подію
        type = "click",
        // Створюємо функцію
        listener = (event) => {
            // Знаходимо об'єкт по класу
            let input = document.querySelector(selectors = ".input-data")
            // Змінюємо display модального вікна на flex
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            // Змінюємо текст 
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE IMAGE: "
            // Задаємо стилі
            input.style.border = "white"
            input.style.borderRadius = "0px"
            // Змінюємо тип input на file
            input.type = "file"
            // Записуємо id
            input.id = button.id
            // Кажемо, що це image і можуть бути всі типи (png,jpg...)
            input.accept = "image/*"
            // Змінюємо ім'я
            input.name = "image"
            // Змінюємо value
            document.querySelector('.submit-change').value = `image-${button.id}`
        }
    )
}
// Створюємо об'єкт за класом
const buttonsSumbit = document.querySelectorAll(".pensilFor")
// Перебираємо кожен об'єкт
for (let count = 0; count < buttonsSumbit.length; count++){
    // Дізнаємось певну кнопку
    let button = buttonsSumbit[count]
    // Створюємо функцію
    button.addEventListener(
        // Задаємо подію
        type = "click",
        // Створюємо функцію
        listener = (event) => {
            // Знаходимо об'єкт модального вікна
            let input = document.querySelector(selectors = ".input-data")
            // Змінюємо текст
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            // Змінюємо display модального вікна на flex
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            // Змінюємо тип 
            input.type = "text"
            // Задаємо id
            input.id = button.id
            // Змінюємо ім'я
            input.name = "text"
            // Задаємо value
            document.querySelector('.submit-change').value = `price-${button.id}`
        }
    )
}
const buttonsName = document.querySelectorAll(".pensilForName")

for (let count = 0; count < buttonsName.length; count++){
    let button = buttonsName[count]
    button.addEventListener(
        type = "click",
        listener = (event) => {
            console.log('ok')
            let input = document.querySelector(selectors = ".input-data")
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            
            input.type = "text"
            input.id = button.id
            input.name = "text"
            document.querySelector('.submit-change').value = `name-${button.id}`
        }
    )
}
const buttonsDiscount = document.querySelectorAll(".pensilForDiscount")

for (let count = 0; count < buttonsDiscount.length; count++){
    let button = buttonsDiscount[count]
    button.addEventListener(
        type = "click",
        listener = (event) => {
            console.log('ok')
            let input = document.querySelector(selectors = ".input-data")
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            
            input.type = "text"
            input.id = button.id
            input.name = "text"
            document.querySelector('.submit-change').value = `discount-${button.id}`
        }
    )
}
const buttonsGb = document.querySelectorAll(".pensilForGb")

for (let count = 0; count < buttonsGb.length; count++){
    let button = buttonsGb[count]
    button.addEventListener(
        type = "click",
        listener = (event) => {
            console.log('ok')
            let input = document.querySelector(selectors = ".input-data")
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            
            input.type = "text"
            input.id = button.id
            input.name = "text"
            document.querySelector('.submit-change').value = `gb-${button.id}`
        }
    )
}
const buttonsGb1 = document.querySelectorAll(".pensilForGb1")

for (let count = 0; count < buttonsGb1.length; count++){
    let button = buttonsGb1[count]
    button.addEventListener(
        type = "click",
        listener = (event) => {
            console.log('ok')
            let input = document.querySelector(selectors = ".input-data")
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            
            input.type = "text"
            input.id = button.id
            input.name = "text"
            document.querySelector('.submit-change').value = `gb1-${button.id}`
        }
    )
}

const buttonsGb2 = document.querySelectorAll(".pensilForGb2")

for (let count = 0; count < buttonsGb2.length; count++){
    let button = buttonsGb2[count]
    button.addEventListener(
        type = "click",
        listener = (event) => {
            console.log('ok')
            let input = document.querySelector(selectors = ".input-data")
            let h1 = document.querySelector(selectors = ".changeH1").innerHTML = "CHANGE TEXT: "
            document.querySelector(selectors = ".frame-modal").style.display = "flex"
            
            input.type = "text"
            input.id = button.id
            input.name = "text"
            document.querySelector('.submit-change').value = `gb2-${button.id}`
        }
    )
}

const buttonPlus = document.querySelector("#plus")

buttonPlus.addEventListener(
    type = "click",
    listener = (event) => {
        document.querySelector(".frame-form").style.display = "flex"

    }   
)
