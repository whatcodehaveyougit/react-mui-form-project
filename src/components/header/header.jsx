import './header.scss'

const Header = ( props ) => {
    return (
        <div className='header'>
            <img 
            src="https://www.selfcity.fr/wp-content/uploads/2021/10/logo-MENU.svg" 
            alt="self-city-logo"
            />
            <h1 className="primary">{ props.title }</h1>
        </div>

    )
}

export default Header;