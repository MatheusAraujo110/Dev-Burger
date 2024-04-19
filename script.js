const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const filterVegan = document.querySelector(".filter-vegan")

function formatCurrency(value) {
    const newValue = Intl.NumberFormat('pt-br', 
    { style: 'currency',
     currency: 'BRL' 
    }).format(value)
    return newValue
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach((product) => {
        myLi += `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,   //Vai dar 10% de desconto.

    }))
    showAll(newPrices)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
            <p> O valor total dos itens é ${formatCurrency(totalValue)}</p>
        </li>
    `
    console.log(totalValue)
}

function filterVeganItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
filterVegan.addEventListener('click', filterVeganItens)