import './Book.scss';

const Book = ({ bookTitle }) => {
    return (
        <div className='book'>
            <div className='book__fake-img'></div>
            <h2 className='book__title'>{bookTitle}</h2>
            {/* <p className='book__description'>{bookDescription}</p> */}
        </div>
    )
}

export default Book;