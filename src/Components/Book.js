import './Book.scss';

const Book = ({ bookTitle, bookImage }) => {
    return (
        <div className='book'>
            <img src={bookImage} alt='book' className='book__img'></img>
            <h2 className='book__title'>{bookTitle}</h2>
        </div>
    )
}

export default Book;