import './Header.scss';

const Header = ({ search, setSearch, pullData }) => {

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    return (
        <header>
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
        </header>
    )
}

export default Header;