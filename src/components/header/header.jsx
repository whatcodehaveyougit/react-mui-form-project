import { Box } from "@mui/system";

const Header = ( props ) => {
    return (
        <Box mt={2}>
            <img 
            src="https://www.selfcity.fr/wp-content/uploads/2021/10/logo-MENU.svg" 
            alt="self-city-logo"
            />
            <h1>{ props.title }</h1>
        </Box>

    )
}

export default Header;