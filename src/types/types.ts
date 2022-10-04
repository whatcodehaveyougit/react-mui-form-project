export const initialValuesType = {
    clientName: String,
    dateOfIntervention: Date,
    timeOfIntervention: String,
    nameOfIntervention: String,
    clientAddress: String,
    photosOfIntervention: Array<String>,
    clientEmail: String,
    appointmentType: String,
    reportPublicQuote: String,
    reportPrivateQuote: String,
    arrivalTimeAtClientQuote: String,
    durationOfAppointmentQuote: String,
    wasProblemResolvedSav: String,
    clientPrescenceSav: String,
    clientPrescenceIntervention: String,
    wasClientBilledIntervention: String,
    reasonsForCancellationCancelled: String,
    arrivalTimeAtClientCancelled: String,
    durationOfInterventionCancelled: String
}

export const SubmitPropsType = {
    setSubmitting: function(): void{},
    resetForm: function(): void{}
}