import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import AppForm from "../Form";
import Thanks from "../Thanks";
import SelectPlan from "../SelectPlan";
import PickAdds from "../PickAdds";
import Finishing from "../Finishing";
import "./Stepper.css";

const steps = [
    `Step 1 Your info`,
    "Step 2 Select plan",
    "Step 3 Add-ons",
    "Step 4 Summary",
];

function MulitStepper() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
    return steps.length;
    };

    const completedSteps = () => {
    return Object.keys(completed).length;
    };

    const isLastStep = () => {
    return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
    };

    const handleNext = () => {
    const newActiveStep =
    isLastStep() && !allStepsCompleted()
    ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
    : activeStep + 1;
    setActiveStep(newActiveStep);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
    setActiveStep(step);
    };

    const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    };

    const handleReset = () => {
    setActiveStep(0);
    // setCompleted({});
    window.location.reload();
    };

    const renderComponents = () => {
    switch (activeStep) {
    case 0:
    return <AppForm />;

    case 1:
    return <SelectPlan />;

    case 2:
    return <PickAdds />;

    case 3:
    return <Finishing />;

    default:
    return null;
    }
    };

return (
<div className='MulitStepper'>
<Box sx={{ width: "100%" }}>
    <Grid container spacing={2} pb={0} pt={2} px={1}>

        <Grid item xs={12} md={4} className="parentItem">
        <div className="item">
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                </StepButton>
                </Step>
            ))}
            </Stepper>
        </div>
        </Grid>

        <Grid item xs={12} md={8}>
        <div className="item">
            <div>
            {allStepsCompleted() ? (
                <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    <Thanks />
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
                </>
            ) : (
                <>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    {renderComponents(activeStep)}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    >
                    Go Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />

                    <Button className="Next_Step" onClick={handleNext} sx={{ mr: 1 }}>
                    Next Step
                    </Button>
                    {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                        <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                        >
                        Step {activeStep + 1} already completed
                        </Typography>
                    ) : (
                        <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                            ? "Confirm"
                            : "Complete Step"}
                        </Button>
                    ))}
                </Box>
                </>
            )}
            </div>
        </div>
        </Grid>

    </Grid>
</Box>
</div>
);
}

export default MulitStepper;
