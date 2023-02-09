import './Header.scss';
import Navbar from './Navbar.js';

const Header = ({ search, setSearch, pullData }) => {

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    }

    return (
        <header>
            <div className='banner'></div>
            <div className='flex'>
                <Navbar />
                <div className="searchBar">
                    <input
                        onChange={onChangeHandler}
                        className='searchBar__input'
                        type='text'
                        placeholder="...Pride & Prejudice">
                    </input>
                    <button
                        onClick={pullData}
                        className='searchBar__button'>
                        search
                    </button>
                </div>
            </div>
            <div className='banner'></div>
            <div className='banner'></div>
        </header>
    )
}

export default Header;