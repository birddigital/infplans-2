import React from 'react'

import { Steps, Step } from 'react-step-builder'
import Step1 from 'components/multi-step-form/Step1'
import Step2 from 'components/multi-step-form/Step2'
import FinalStep from 'components/multi-step-form/FinalStep'

const Navigation = (props) => {
  {
    /*  console.log({ props }); */
  }
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12 bmi-form-navigation-container">
          <button
            id="btn-multistep-prev"
            onClick={props.prev}
            style={{ marginRight: 10 }}
          >
            Previous
          </button>
          <button id="btn-multistep-next" onClick={props.next}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: 'after', // or before
    },
  }

  return (
    <div className="bmi-apply-form-container">
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  )
}

export default App
