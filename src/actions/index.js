export function selectBook(book) {
    //selectBook is an ActionCreator and will return an action/object with type property
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}