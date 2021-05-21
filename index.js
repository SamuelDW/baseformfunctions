class BaseFormFunctions {
    
    /**
     * Pass an array of form fields to hide
     * @param formFields 
     */
    static hideFormElements(formFields) {
        formFields.forEach(formField => {
            document.querySelector(formField).classList.add('hidden')
        });
    }

    /**
     * Pass an array of form fields to hide
     * @param formFields 
     */
     static showFormElements(formFields) {
        formFields.forEach(formField => {
            document.querySelector(formField).classList.remove('hidden')
        });
    }

    /**
     * Pass an array of form fields to make required
     * @param formFields 
     */
    static setFormElementsAsRequired(formFields) {
        formFields.forEach(formField => {
            document.querySelector(formField).required = true
        })
    }

    /**
     * Pass object of form fields to validate if the submit button can be pressed
     * @param {Object} formFields 
     * @param submitButton 
     */
    static isFormValid(formFields, submitButton) {
        document.querySelector(submitButton).disabled = 
            !Object.values(formFields).every(element => element !== false)
    }
}

export default {BaseFormFunctions}