import React from 'react'
import { FormPreviewDetails, PreviewContainer, PreviewTitle, PreviewTitleContainer } from '../../styles'
import FormPreviewText from '../Common/FormPreviewText'

const FormPreview = ({formValues}) => {
    return (
        <PreviewContainer>
            <PreviewTitleContainer>
                <PreviewTitle>
                    Form Preview
                </PreviewTitle>
            </PreviewTitleContainer>
            <FormPreviewDetails>
                <FormPreviewText label={'Personal email address'} value={formValues.email}/>
                <FormPreviewText label={'Mobile Number'} value={formValues.mobileNumber}/>
                <FormPreviewText label={'Address line 01'} value={formValues.address1}/>
                <FormPreviewText label={'Address line 02'} value={formValues.address2}/>
                <FormPreviewText label={'Pincode'} value={formValues.pinCode}/>
                <FormPreviewText label={'State'} value={formValues.state}/>
            </FormPreviewDetails>
        </PreviewContainer>
    )
}

export default FormPreview