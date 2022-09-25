import styled, { keyframes } from 'styled-components'
import Collapse from '@material-ui/core/Collapse'
import { Grid, Select } from '@material-ui/core'

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
    position: absolute;
    height: 727px;
    left: 160px;
    right: 160px;
    top: 140px;
    padding-bottom: 120px;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 736px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 736px;
    height: 64px;
`

export const BackBtn = styled.img`
    width: 64px;
    height: 64px;
`

export const Heading = styled.div`
    height: 38px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #182639;
    flex: none;
    order: 0;
    flex-grow: 1;
`
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    width: 736px;
    height: 84px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const Description = styled.text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #2D3D54;
    flex: none;
    order: 0;
    flex-grow: 1;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    position: absolute;
    height: 8px;
    left: 0px;
    right: 0px;
    top: 80px;

    background: #F2F0ED;
`
export const StepsContainerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const StepsContainer = styled.div`
    width: 100%;
    padding: 24px 0;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    row-gap: 0px;
    column-gap: 0px;
`

export const StepLabel = styled.div`
    margin-left: 6px;
    color: rgba(0, 0, 0, 0.5);
    color: ${props => props.selected && '#202124'};
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
`
export const StepContainer = styled.div`
    cursor: pointer;
    padding: 10px 16px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    position: absolute;
    height: 8px;
    left: 0px;
    right: 0px;
    top: 80px;
    background: #F2F0ED;
`
const progressAnimation = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -35px -35px;
    }
`

export const ProgressBar = styled.div`
    width: 0;
    width: ${props => props.value === 1 && '25%'};
    width: ${props => props.value === 2 && '50%'};
    width: ${props => props.value === 3 && '75%'};
    width: ${props => props.value === 4 && '100%'};
    height: 10px;
    background-color: #E06358;
    background-image: linear-gradient(-45deg, rgba(255,255,255,0.125) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.125) 50%, rgba(255,255,255,0.125) 75%, transparent 75%, transparent);
    box-shadow: rgb(0 0 0 / 10%) 0px -1px 2px inset;
    background-size: 35px 35px;
    transition: width .6s ease;
    animation: ${progressAnimation} 2s linear infinite;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    width: 736px;
    height: 727px;
    flex: none;
    order: 0;
    flex-grow: 1;
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 736px;
    height: 557px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 736px;
    min-height: 174px;
    background: #FFFFFF;
    border-radius: 10px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const BodyCollapse = styled(Collapse)`
    width: 704px;
    height: 44px;
    margin: 12px;
    background: #FFFFFF;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px #E1E5EB;
    border-radius: 10px 10px 0px 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledTitle = styled.div`
    height: 23px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    color: #182639;
    flex: none;
    order: 0;
    flex-grow: 0;
    background: #FFFFFF;
`
// const TitleChevronIconContainer = styled.div`
//     transform: ${props => !props.expanded && 'rotate(-180deg)'};
//     transition: transform 0.25s ease-in-out;
// `

// export const TitleChevronIcon = ({ expanded }) => (
//     <TitleChevronIconContainer expanded={expanded}>
//         <svg data-test-id='KeyboardArrowUpIcon' />
//     </TitleChevronIconContainer>
// )

export const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 352px;
    height: 275px;
    background: #FFFFFF;
    border-radius: 10px;
    flex: none;
    order: 1;
    flex-grow: 0;
`

export const PreviewTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    flex: none;
    background: #FFFFFF;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    box-shadow: inset 0px -1px 0px #E1E5EB;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
`
export const PreviewTitle = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #55657D;
    background: #FFFFFF;
`

export const FormPreviewDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    background: #FFFFFF;
    width: 352px;
    border-top-left-radius: 10px;
`

export const StyledPreviewText = styled.div`
    width: 153px;
    height: 18px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #2D3D54;
    background: #FFFFFF;
`

export const StyledPreviewContainer = styled.div`
    padding: 8px 16px;
    display:flex;
    align-items: center:
    justify-content: space-between;
    height: 18px;
    background:#FFFFFF;
    border-top-left-radius: 10px;
`

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 736px;
    height: 50px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledCheckboxLabel = styled.div`
    width: 700px;
    height: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #2D3D54;
    flex: none;
    order: 1;
    flex-grow: 1;
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width:24px;
    height:24px;
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0px;
    position: fixed;
    height: 85px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #FFFFFF;
    box-shadow: 0px -4px 8px rgba(45, 61, 84, 0.06);
`

export const FooterBtn = styled.button`
    background-color:  #E06358;
    width: 220px;
    height: 37px;
    cursor:pointer;
    color: #FFFFFF;
    border-radius: 6px;
    padding: 12px 20px;
    margin: 24px;
    border-width: inherit;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
`

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 60px;
    width: 864px;
    height: 22px;
`

export const ContainerItemLabel = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 132%;
    display: flex;
    align-items: center;
    color: #55657D;
`

const DropdownFormControl = styled.form`
    width: 250px;

    .MuiSelect-select {
        padding: 4px 8px;
        color: #202124;
        font-size: 14px;
        line-height: 18px;
        text-transform: unset;
    }
    .MuiSelect-icon {
        right: -2px;
    }
    fieldset {
        border-radius: 2px;

        legend {
            width: 0;
        }
    }
`

export const StyledDropdown = ({ value, handleChange, children, ...props }) => (
    <DropdownFormControl
        variant='outlined'>
        <Select
            value={value}
            onChange={handleChange}
            label='plan types'
            {...props}>
            {children}
        </Select>
    </DropdownFormControl>
)

export const StyledMenuItem = styled.menuitem`
    color: #202124;
    font-size: 14px;
    line-height: 18px;
    text-transform: unset;
`

export const SliderContainer = styled.div`
    width:100%;
`

export const SliderLabel = styled.div`
    width: 704px;
    height: 22px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 132%;
    color: #2D3D54;
    background: #FFFFFF;
`
export const StyledInputContainer = styled.div`
    width: 336px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
`

export const StyledInputLabel = styled.div`
    height: 18px;
    left: 0px;
    top: calc(50% - 18px/2 - 27px);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    margin-bottom: 8px;
`

export const Input = styled.input`
    box-sizing: border-box;
    left: 0%;
    right: 0%;
    top: 35.14%;
    bottom: 0%;
    background: #FFFFFF;
    border: 1px solid #8C98AB;
    border-radius: 6px;
    background: #FFFFFF;
    min-height:60px;
    margin-bottom: 8px;
    padding: 14px;
`

export const StyledGrid = styled(Grid)`
    background: '#FFFFFF'
`

export const ErrorText = styled.div`
    height: 18px;
    left: 0px;
    top: calc(50% - 18px/2 - 27px);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    margin-bottom: 8px;
    color: red;
`