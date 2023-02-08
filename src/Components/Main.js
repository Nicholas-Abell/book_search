import './Main.scss';
import Book from "./Book";

const Main = ({ bookData }) => {
    return (
        <main>
            {
                bookData?.map((item) => {
                    let bookTitle = item.volumeInfo.title;
                    let bookImage = item.volumeInfo.imageLinks.smallThumbnail !== undefined
                        ? item.volumeInfo.imageLinks.smallThumbnail
                        : '';
                    if (bookData !== undefined) {
                        return (
                            <Book
                                key={item.id}
                                bookImage={bookImage}
                                bookTitle={bookTitle}
                            />
                        )
                    }
                })
            }
        </main>
    )
}

export default Main;
