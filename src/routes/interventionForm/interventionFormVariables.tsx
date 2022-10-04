type OptionItem = {
   value: String, 
   text: String
}

export const clientPrescenceOptions: Array<OptionItem> = [
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

export const wasProblemResolvedOptions: Array<OptionItem> = [
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

export const appointmentTypeOptions: Array<OptionItem> = [
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

export const durationOfAppointmentOptions: Array<OptionItem> = [
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

export const wasClientBilledOptions: Array<OptionItem> = [
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
