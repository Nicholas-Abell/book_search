import './Main.scss';
import Book from "./Book";

const Main = ({ bookData }) => {
    console.log('Book Data: ' + bookData)
    return (
        <main>
            {
                bookData?.map((item) => {
                    console.log('single book: ' + item)
                    // let title = item.volumeInfo.title;
                    if (bookData !== undefined) {
                        return (
                            <Book
                                bookTitle={item.volumeInfo.title}
                            />
                        )
                    }
                })
            }
            <Book
                bookTitle={'Test'} />
        </main>
    )
}

export default Main;
