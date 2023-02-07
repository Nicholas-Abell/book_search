import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="searchBar">
                <input
                    className='searchBar__input'
                    type='text'
                    placeholder="...Pride & Prejudice">
                </input>
                <button className='searchBar__button'>search</button>
            </div>
        </header>
    )
}

export default Header;