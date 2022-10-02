import { Link } from "react-router-dom";

const FormSubmitted = ( props ) => {
    return (
        <div className='form-submitted'>
            <h2>Form Submitted Successfully</h2> 
            <p><Link to="/form">Submit another form</Link></p>

        </div>

    )
}

export default FormSubmitted;