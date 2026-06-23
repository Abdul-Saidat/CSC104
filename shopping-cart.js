/*
 * Instruction: Build a dynamic shopping cart page. Display at least 5 products, each with an 'Add to Cart' button. Clicking the
 * button adds the item to a cart section showing the product name, price, and a 'Remove' button. The page should show a running total
 * price that updates automatcally as items are added or removed.
 */
const products = [
  { 'id': 1,
    'name': 'Umbrella',
    'price': 400 },
  { 'id': 2,
    'name': 'LED Sunset Lamp',
    'price': 566 },
  { 'id': 3,
    'name': 'Laptop stand',
    'price': 600 },
  { 'id': 4,
    'name': 'Water heater',
    'price': 700 },
  { 'id': 5,
    'name': 'Joyful Beanie',
    'price': 800 }
]

const cart = []

function removeFromCart (productId) {
  const index = cart.findIndex((item) => item.id === productId)
  console.log(productId)
  if (index === -1) return
  cart.splice(index, 1)
  renderCart()
}

const cartSection = document.getElementById('cart-section')
if (cart.length === 0) {
  cartSection.innerHTML = `<p class='empty'> Cart is empty </p>`
}
function renderCart () {
  cartSection.innerHTML = ''
  const cartContent = cart.forEach((item) => {
    const name = document.createElement('span')
    name.classList.add('product-name')
    name.textContent = item.name
    const price = document.createElement('div')
    price.classList.add('product-price')
    price.textContent = item.price
    const button = document.createElement('button')
    button.classList.add('remove-item')
    button.textContent = 'Remove item'
    button.addEventListener('click', () => {
      removeFromCart(item.id)
    })
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')
    cartItem.textContent = `${name.textContent}: ${price.textContent}`
    cartItem.appendChild(button)
    cartSection.appendChild(cartItem)
  })
  const totalPrice = document.createElement('div')
  const total = cart.reduce((item, total) => item + total.price, 0)
  totalPrice.textContent = `Total price: ${total}`
  console.log(totalPrice)
  cartSection.appendChild(totalPrice)
}


const productSection = document.getElementById('products')
const productDisplay = products.forEach((product) => {
  const prod = document.createElement('div')
  const productName = document.createElement('p')
  prod.classList.add('product-item')
  productName.textContent = product.name
  const button = document.createElement('button')
  button.classList.add('add-item')
  button.textContent = 'Add to Cart'
  button.addEventListener('click', () => {
    cart.push(product)
    renderCart()
  })

  prod.appendChild(productName)
  prod.appendChild(button)
  console.log(prod)
  productSection.appendChild(prod)
})


