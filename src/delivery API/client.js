import Stack from "../sdk/entry"

const getBook = async (title) => {
    const book = await Stack.getBook("book", "en-us", title)
    return book[0][0]
}

export default getBook