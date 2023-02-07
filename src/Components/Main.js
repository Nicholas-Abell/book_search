import './Main.scss';
import Book from "./Book";
const Main = () => {

    let bookImg;
    let bookTitle = 'Art of War';
    let bookDescription = 'Description';

    return (
        <main>
            <Book
                bookImg={bookImg}
                bookTitle={bookTitle}
                bookDescription={bookDescription}
            />
            <Book />
            <Book />
        </main>
    )
}

export default Main;