import ChoosePlan from "../PlanForm/components/ChoosePlan/ChoosePlan";
import Declaration from "../PlanForm/components/Declaration/Declaration";
import ReviewAndPayment from "../PlanForm/components/ReviewAndPayment/ReviewAndPayment";
import SelectAmount from "../PlanForm/components/SelectAmount/SelectAmount";

export const stepsData = [
    {
        step: 1,
        label: 'Choose your plan',
        description: <div>Hello Anisha,<br></br>Increase yours and your family\'s health insurance cover by <b>₹20 lakhs</b> with Super top-up!</div>,
        component: ChoosePlan,
    },
    {
        step: 2,
        label: 'Select your deductible amount',
        description: <div>Select the deductible amount for the policy (or policies) below.<br></br><a href="/">(what is a deductible?)</a></div>,
        component: SelectAmount,
    },
    {
        step: 3,
        label: 'Declaration',
        component: Declaration,
    },
    {
        step: 4,
        label: 'Review and confirm payment',
        component: ReviewAndPayment,
    },
]

export const amountConsent = 'I understand that this insurance will not be utilized until ₹3,00,000 (deductible) is exhausted.'

export const declarationData = [
    {
        id: 1,
        label: 'I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.' 
    },
    {
        id: 2,
        label: 'I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.'
    },
    {
        id: 3,
        label: 'I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)' 
    },
    {
        id: 4,
        label: 'I understand that this policy doesn\'t cover Pre-existing diseases.'
    },
]

export const planTypes = [
    {
      key: "0",
      value: {
        image: require('../../assets/user.png'),
        label: {
          __html: `<p><a style={{ fontWeight: "bold" }}>One</a> (Individual)</p>`
        },
        title: "Self",
        price: "600",
        curr: "₹"
      }
    },
    {
      key: "1",
      value: {
        image: require('../../assets/two.png'),
        label: {
          __html: `<p><a style={{ fontWeight: "bold" }}>Pro</a> (Individual)</p>`
        },
        title: "Parents",
        price: "0",
        curr: "₹"
      }
    },
    {
        key: "2",
        value: {
          image: require('../../assets/family.png'),
          label: {
            __html: `<p><a style={{ fontWeight: "bold" }}>Plus</a> (Individual + Individual)</p>`
          },
          title: "Self + Parents",
          price: "600",
          curr: "₹"
        }
      },
      {
        key: "3",
        value: {
          image: require('../../assets/group.png'),
          label: {
            __html: `<p><a style={{ fontWeight: "bold" }}>Max</a> (Floater)</p>`
          },
          title: "Self + Spouse + Kids",
          price: "1800",
          curr: "₹"
        }
      }
  ]

export const formData = [
    {
        id: 1,
        label: 'Personal email address'
    },
    {
        id: 1,
        label: 'Mobile number'
    },
    {
        id: 1,
        label: 'Address line 01'
    },
    {
        id: 1,
        label: 'Address line 02'
    },
    {
        id: 1,
        label: 'Pincode'
    },
    {
        id: 1,
        label: 'State'
    },
]