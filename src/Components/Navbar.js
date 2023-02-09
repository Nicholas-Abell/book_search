import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li className='list__item'>Stores & Events</li>
                <li className='list__item'>Blog & Podcast</li>
                <li className='list__item'>Membership</li>
                <li className='list__item'>Coupons & Deals</li>
                <li className='list__item'>Best Sellers</li>
                <li className='list__item'>Gift Cards</li>
            </ul>
        </nav>
    )
}

export default Navbar;
