import './button.scss'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classes: string, 
    text: string
}


const Button = ( props: ButtonProps ) => {

    const { type, classes, text } = props

    return (
        <button
            type={type}
            className={classes}
            >{text}
        </button>
    )
}

export default Button;