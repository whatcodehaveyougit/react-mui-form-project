import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import './interventionForm.scss'
import Input from '../../reuseableComponents/input/input'
import Button from '../../reuseableComponents/button/button'
import Textarea from '../../reuseableComponents/textarea/textarea'
import SelectDropdown from '../../reuseableComponents/selectDropdown/selectDropdown'


const validationSchema = Yup.object().shape({
    clientName: Yup.string().min(3, "It's too short").required("Required"),
    dateOfIntervention: Yup.string().required("Required"),
    // timeOfIntervention: Yup.string().required("Required"),
    // nameOfIntervention: Yup.string().required("Required"),
    // clientAddress: Yup.string().required("Required"),
    // appoinmentType: Yup.string().oneOf(["quote", "sav", "intervention", "cancelled"], "Required").required("Required"),
    wasProblemResolved: Yup.string().oneOf(["yes", "noReason1", "noReason2", "noReason3"], "Required").required("Required"),
    // reportPublic: Yup.string().required("Required"),
    // clientPrescence: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required"),
    // clientEmail: Yup.string().email("Enter valid email")
})


const UserForm = () => {

    const navigate = useNavigate();

    const onSubmit = (values, submitProps) => {
        // console.log( "Form Submitted" + JSON.stringify(values) )
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        localStorage.setItem('values', JSON.stringify( values ) );
        navigate('/form-submitted');    
    }

    const formik = useFormik({
        initialValues: {
            clientName: '',
            dateOfIntervention: '',
            timeOfIntervention: '',
            nameOfIntervention: '',
            clientAddress: '',
            photosOfIntervention: [],
            appoinmentType: '',
            wasProblemResolved: '',
            reportPublic: '',
            reportPrivate: '',
            clientPrescence: '',
            clientEmail: '',
        },
        onSubmit,
        validationSchema
    })

    // console.log( formik.values.wasProblemResolved )

    const clientPrescenceOptions = [
        {
            value: "clientPresent",
            text: "Client signed"
        },
        {
            value: "clientNotPresent",
            text: "Nobody was there"
        }
    ]


    const wasProblemResolvedOptions = [
        {
           value: "yes",
           text: "Yes"  
        },
        {
           value: "noReason1",
           text: "No, need to return"  
        },
        {
            value: "noReason2",
            text: "No, order material and return"  
         },
         {
           value: "noReason3",
           text: "No, not sure why"  
        }
    ]

    const appoinmentTypeOptions = [
        {
           value: "quote",
           text: "Quote"  
        },
        {
           value: "sav",
           text: "SAV"  
        },
        {
            value: "intervention",
            text: "Intervention"  
         },
         {
           value: "cancelled",
           text: "Cancelled"  
        },
    ]

    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <Input fieldName="clientName" fieldType="text" fieldLabel="Name of Client: " formik={formik} />
                <Input fieldName="dateOfIntervention" fieldType="date" fieldLabel="Date of Intervention: : " formik={formik} />
                <Input fieldName="timeOfIntervention"  fieldType="time" fieldLabel="Time of Intervention: " formik={formik} />
                <Input fieldName="nameOfIntervention" fieldType="text" fieldLabel="Name of Intervention: " formik={formik} />
                <Input fieldName="clientEmail" fieldType="text" fieldLabel="Email of Client: " formik={formik} />

                <SelectDropdown 
                    fieldName="appoinmentType" 
                    fieldLabel="What type of appointment was it?" 
                    formik={formik} 
                    options={appoinmentTypeOptions}
                />

                { formik.values.appoinmentType == "sav" && (
                <>
                    <SelectDropdown 
                        fieldName="wasProblemResolved" 
                        fieldLabel="Was the problem resolved? " 
                        formik={formik} 
                        options={wasProblemResolvedOptions} />
                    <SelectDropdown 
                        fieldName="clientPrescence" 
                        fieldLabel="Was client present? " 
                        formik={formik} 
                        options={clientPrescenceOptions} />
                </>
            )}
               <Textarea fieldName="reportPublic" fieldLabel="Report (visable by client):  " formik={formik} />
               <Textarea fieldName="reportPrivate" fieldLabel="Remarks for support (invisible to client):  " formik={formik} />

                
                <div className='form-control-wrapper'>
                    <Button
                        type="submit"
                        classes="btn primary-bg"
                        text="Submit Form"
                    ></Button>
                </div> 

            </form>
        </>
    )
}

export default UserForm;