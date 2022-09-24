import { Grid } from '@material-ui/core'
import React from 'react'
import { formData } from '../../../../constants/data'

import { Container, BodyCollapse } from '../../../styles'
import StyledInput from '../../Common/StyledInput'
import Title from '../../Common/Title'


const BasicDetails = () => {
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
                <Grid style={{background: '#FFFFFF'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {formData.map((item,index) => (
                        <Grid style={{background: '#FFFFFF'}} item xs={6}>
                        <StyledInput label={item.label}/>
                    </Grid>
                    ))}
                </Grid>
            </BodyCollapse>
        </Container>
    )
}

export default BasicDetails