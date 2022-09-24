import React from 'react'
import { FormPreviewDetails, PreviewContainer, PreviewTitle, PreviewTitleContainer } from '../../styles'
import FormPreviewText from '../Common/FormPreviewText'

const FormPreview = () => {
    return (
        <PreviewContainer>
            <PreviewTitleContainer>
                <PreviewTitle>
                    Form Preview
                </PreviewTitle>
            </PreviewTitleContainer>
            <FormPreviewDetails>
                <FormPreviewText label={'Personal email address'} />
                <FormPreviewText label={'Mobile Number'} />
                <FormPreviewText label={'Address line 01'} />
                <FormPreviewText label={'Address line 02'} />
                <FormPreviewText label={'Pincode'} />
                <FormPreviewText label={'State'} />
            </FormPreviewDetails>
        </PreviewContainer>
    )
}

export default FormPreview