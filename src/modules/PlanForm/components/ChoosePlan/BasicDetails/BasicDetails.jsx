import { Grid } from '@material-ui/core'
import React from 'react'

import { Container, BodyCollapse } from '../../../styles'
import Title from '../../Common/Title'
import Address1 from './Address1'
import Address2 from './Address2'
import Email from './Email'
import MobileNumber from './MobileNumber'
import Pincode from './Pincode'
import State from './State'


const BasicDetails = ({formValues, setFormValues}) => {
    const [expanded, setExpanded] = React.useState(true)

    const handleClick = React.useCallback(() => {
        setExpanded(!expanded)
    }, [expanded])

    return (
        <Container>
            <Title
                title={'Basic Details'}
                expanded={expanded}
                handleClick={handleClick} />
            <BodyCollapse in={expanded}>
                <Grid style={{ background: '#FFFFFF' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Email 
                        formValues={formValues}
                        setFormValues={setFormValues}/>
                    <MobileNumber
                        formValues={formValues}
                        setFormValues={setFormValues} />
                    <Address1 
                        formValues={formValues}
                        setFormValues={setFormValues}/>
                    <Address2 
                        formValues={formValues}
                        setFormValues={setFormValues}/>
                    <Pincode 
                        formValues={formValues}
                        setFormValues={setFormValues}/>
                    <State 
                        formValues={formValues}
                        setFormValues={setFormValues}/>
                </Grid>
            </BodyCollapse>
        </Container>
    )
}

export default BasicDetails