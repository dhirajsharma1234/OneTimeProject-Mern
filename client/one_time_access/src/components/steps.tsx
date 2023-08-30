import { useState } from "react";

const Step1 = () => <div>Step 1 Content</div>;
const Step2 = () => <div>Step 2 Content</div>;
const Step3 = () => <div>Step 3 Content</div>;

const Steps = () =>{
    const [step,setCurrentStep] = useState(1);
    
    const handleClick = () =>{
        if(step < 3) {
            setCurrentStep(step+1);
        }
    }

    let content;

    switch(step) {
        case 1: content= <Step1/>;
        break;
        case 2: content= <Step2/>;
        break;
        case 3: content= <Step3/>;
        break;
        default:
        content = <div>Invalid Step</div>;
    }

    return (
        <>
            <div>
                <p>{content}</p>
                {
                   <button type="button" onClick={handleClick}>step {step}</button>
                }
            </div>
        </>
    )
}

export default Steps;