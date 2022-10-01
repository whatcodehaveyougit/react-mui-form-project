import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    clientName: Yup.string().min(3, "It's too short").required("Required"),
    // dateOfIntervention: Yup.string().required("Required"),
    // timeOfIntervention: Yup.string().required("Required"),
    // clientAddress: Yup.string().required("Required"),
    // photosOfIntervention: Yup.string().required("Required"),
    // appoinmentType: Yup.string().oneOf(["", ""], "Required").required("Required"),
    clientEmail: Yup.string().email("Enter valid email").required("Required"),
})

const initialValues = {
    clientName: '',
    dateOfIntervention: '',
    timeOfIntervention: '',
    clientAddress: '',
    photosOfIntervention: [],
    appoinmentType: '',
    clientEmail: ''

}

const UserForm = () => {

    // const [ values, setValues ] = useState( initialValues );

    // const handleInputChange = ( event ) => {
    //     const { name, value } = event.target;
    //     console.log( name );
    //     console.log( value );
    //     setValues({
    //         ...values, 
    //         [name]: value
    //     })
    // }

    const onSubmit = (values, props) => {
        console.log( 'hello')

        console.log(values)
        console.log(props)

        // setTimeout(() => {

        //     props.resetForm()
        //     props.setSubmitting(false)
        // }, 2000)
    }

    console.log( initialValues );

    return (
        <div>

            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}>
                <Form>
                    <Field as="input" fullWidth name="clientName" label='Client Name'
                        placeholder="Enter your name" helperText={<ErrorMessage name="clientName" />} />
                    <Field as="input" fullWidth name="clientEmail" label='Client Email'
                        placeholder="Enter your email" helperText={<ErrorMessage name="clientEmail" />} />
                    {/* <Field as={DateTimePicker} fullWidth name="dateTime" label='Client Email'
                        placeholder="Enter your email" helperText={<ErrorMessage name="clientEmail" />} /> */}

                    <button
                        size="large"
                        type="submit"
                        color="primary"
                        variant="contained"
                        >Button
                    </button>
                </Form>


                

            </Formik>

        </div>
    )
}

export default UserForm;