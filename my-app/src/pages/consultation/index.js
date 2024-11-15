import React, { useState } from "react";
import Consultation1 from "./steps/Consultation1";
import Consultation2 from "./steps/Consultation2";
import Consultation3 from "./steps/Consultation3";
import Consultation4 from "./steps/Consultation4";
import Consultation5 from "./steps/Consultation5";
import Consultation6 from "./steps/Consultation6";
import Consultation7 from "./steps/Consultation7";
import Consultation8 from "./steps/Consultation8";

function ConsultationMainPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        type_of_project: "",
        type_of_property: "",
        email: "",
        phone: "",
        permission: "",
    });
    const [error, setError] = useState("");

    const nextStep = (newData) => {
        setFormData({ ...formData, ...newData });
        setStep(step + 1);
    };

    return (
        <div>
            {step === 1 && <Consultation1 setStep={setStep} nextStep={nextStep} />}
            {step === 2 && <Consultation2 nextStep={nextStep} />}
            {step === 3 && <Consultation3 nextStep={nextStep} />}
            {step === 4 && <Consultation4 nextStep={nextStep} />}
            {step === 5 && (
                <Consultation5 error={error} setError={setError} nextStep={nextStep} />
            )}
            {step === 6 && <Consultation6 error={error} nextStep={nextStep} />}
            {step === 7 && (
                <Consultation7
                    setError={setError}
                    setStep={setStep}
                    formData={formData}
                    nextStep={nextStep}
                />
            )}
            {step === 8 && <Consultation8 formData={formData} />}
        </div>
    );
}

export default ConsultationMainPage;
