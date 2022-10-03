import './button.scss'

const Button = ( props ) => {

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