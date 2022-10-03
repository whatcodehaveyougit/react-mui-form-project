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
    // dateOfIntervention: Yup.string().required("Required"),
    // timeOfIntervention: Yup.string().required("Required"),
    // nameOfIntervention: Yup.string().required("Required"),
    // clientAddress: Yup.string().required("Required"),
    clientEmail: Yup.string().email("Enter valid email"),
    appoinmentType: Yup.string().oneOf(["quote", "sav", "intervention", "cancelled"], "Required").required("Required"),
    
    // Optional part of form - Devis 
    reportPrivate: Yup.string().required("Required"),
    arrivalTimeAtClient: Yup.string().required("Required"),
    reportPublic: Yup.string().required("Required"),
    durationOfIntervention: Yup.string().required("Required"),

    // Optional part of form - SAV 
    wasProblemResolved: Yup.string().oneOf(["yes", "noReason1", "noReason2", "noReason3"], "Required").required("Required"),
    clientPrescence: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required"),

    // Optional part of form - Intervention     
    wasClientBilled: Yup.string().required("Required"),

    // Optional part of form - RDV cancelled
    reasonsForCancellation: Yup.string().required("Required"),

})


const UserForm = () => {

    const navigate = useNavigate();

    const onSubmit = (values, submitProps) => {
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
            clientEmail: '',
            appoinmentType: '',
            wasProblemResolved: '',
            reportPublic: '',
            reportPrivate: '',
            arrivalTimeAtClient: '',
            durationOfIntervention: '',
            clientPrescence: '',
            reasonsForCancellation: ''
        },
        onSubmit,
        validationSchema
    })

    const clientPrescenceOptions = [
        {
            value: "",
            text: ""  
         },
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
            value: "",
            text: ""  
         },
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
            value: "",
            text: ""  
         },
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

    const durationOfInterventionOptions = [
        {
            value: "",
            text: ""  
        },
        {
           value: "0min",
           text: "0 min"  
        },
        {
           value: "10mins",
           text: "10 mins"  
        },
        {
            value: "20mins",
            text: "20 mins"  
         },
         {
           value: "30mins",
           text: "30 mins"  
        },
        {
            value: "1hour",
            text: "1 hour"  
         },
    ]

    const wasClientBilledOptions = [
        {
            value: "",
            text: ""  
        },
        {
           value: "option1",
           text: "1 - Intervention Finished"  
        },
        {
           value: "option2",
           text: "2 - Intervention finished and new estimate todo"  
        },
        {
            value: "option3",
            text: "3 - Return to finish"  
         },
         {
           value: "option4",
           text: "4 - Other"  
        },
    ]


    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <Input fieldName="clientName" fieldType="text" fieldLabel="Name of Client: " formik={formik} />
                <Input fieldName="dateOfIntervention" fieldType="date" fieldLabel="Date of Intervention: " formik={formik} />
                <Input fieldName="timeOfIntervention"  fieldType="time" fieldLabel="Time of Intervention: " formik={formik} />
                <Input fieldName="nameOfIntervention" fieldType="text" fieldLabel="Name of Intervention: " formik={formik} />
                <Input fieldName="clientAddress" fieldType="text" fieldLabel="Client Address:  " formik={formik} />
                <Input fieldName="photosOfIntervention" fieldType="file" fieldLabel="Photos of intervention  " formik={formik} />

                <Input fieldName="clientEmail" fieldType="text" fieldLabel="Email of Client: " formik={formik} />

                <SelectDropdown 
                    fieldName="appoinmentType" 
                    fieldLabel="What type of appointment was it?" 
                    formik={formik} 
                    options={appoinmentTypeOptions}
                />
                { formik.values.appoinmentType == "quote" && (
                    <>
                        <Textarea fieldName="reportPublic" fieldLabel="Report (visable by client):  " formik={formik} />
                        <Textarea fieldName="reportPrivate" fieldLabel="Remarks for support (invisible to client):  " formik={formik} />
                        <Input fieldName="arrivalTimeAtClient"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <SelectDropdown 
                            fieldName="durationOfIntervention" 
                            fieldLabel="Duration of Intervention? " 
                            formik={formik} 
                            options={durationOfInterventionOptions} />
                    </>
                )}
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

                { formik.values.appoinmentType == "intervention" && (
                <>
                     <SelectDropdown 
                        fieldName="wasClientBilled" 
                        fieldLabel="Was the client billed? " 
                        formik={formik} 
                        options={wasClientBilledOptions} />
                    <SelectDropdown 
                        fieldName="clientPrescence" 
                        fieldLabel="Was client present? " 
                        formik={formik} 
                        options={clientPrescenceOptions} />
                </>
                )}
                { formik.values.appoinmentType == "cancelled" && (
                    <>
                        <Textarea fieldName="reasonsForCancellation" fieldLabel="Reasons for cancellation:  " formik={formik} />
                        <Input fieldName="arrivalTimeAtClient"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <SelectDropdown 
                            fieldName="durationOfIntervention" 
                            fieldLabel="Duration of Intervention? " 
                            formik={formik} 
                            options={durationOfInterventionOptions} />
                    </>
                )}
                
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