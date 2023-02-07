import './Main.scss';
import Book from "./Book";
const Main = ({ bookTitle, bookImg, bookDescription }) => {

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
