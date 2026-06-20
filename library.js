class Book {
  constructor (title, author, year, available = true) {
    this.title = title
    this.author = author
    this.year = year
    this.available = available
  }
}

class Library {
  constructor () {
    this.books = []
  }

  add_a_book (title, author, year) {
    const book = new Book(title, author, year)
    this.books.push(book)
    console.log(`New book added to the library: ${book.title}, written by: ${book.author} in the year: ${book.year} ${book.available}`)
  }

  borrow_a_book (title) {
    let borrowBook = this.books.find((book) => book.title === title)
    // console.log(borrowBook)
    if (!borrowBook) {
      console.log('wrong book, not available')
      return
    }
    if (borrowBook.available) {
      borrowBook.available = false
      console.log('Successful borrowing')
      console.log(`Book borrowed: ${borrowBook.title}, written by: ${borrowBook.author}, in the year: ${borrowBook.year}`)
    } else {
      console.log('Book is not available')
    }
  }

  return_a_book (title) {
    let returnBook = this.books.find((book) => book.title === title)
    if (!returnBook) {
      return
    }
    if (!returnBook.available) {
      returnBook.available = true
      console.log('Thanks for returning the book you borrowed!')
      console.log(`Book returned: ${returnBook.title}`)
    } else {
      console.log('Book was not borrowed')
    }
  }

  get_all_books () {
    return this.books
  }

  get_all_available_books () {
    let allAvailableBooks = this.books.filter((book) => book.available === true)
    return allAvailableBooks
  }
}

const library = new Library()
library.add_a_book('Hafsatu Bebi', 'Fatima Bala', '2023')
library.add_a_book('percy jackson', 'percy', '2021')

library.borrow_a_book('percy jackson')
library.return_a_book('percy jackson')
console.log(library.get_all_books())
console.log(library.get_all_available_books())
