import darkLogo from '../assets/images/image.png'
// import lightLogo from '../assets/images/lightMode.png'


const Logo = ({darkTheme}) => {
    return(
        <div className="logo">
            <div className="logo-icon">
                <img 
                // src={darkTheme? darkLogo : lightLogo}
                src={darkLogo}
                alt="Logo"
                style={{ filter: darkTheme ? 'invert(1)' : 'invert(0)' }} 
                />
            </div>
        </div>
    );
}

export default Logo;