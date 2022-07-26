import * as React from "react";
import { TRootState } from "../../../store";

import { IndividualPassword } from "./PasswordIndividual";
import { IndividualDetails } from "./UserDetails";
import { IndividualVerifyAccount } from "./VerifyIndividual";

import { RegistrationSuccess } from "../RegistrationSuccess";

import { useAppSelector, useAppDispatch } from "../../../hooks";

import {
  individualNextStep,
  individualPreviousStep,
  formIndividualSignup,
} from "../../../store/rootSlice";

export const IndividualLadder = () => {
  const currentStage = useAppSelector(
    (state: TRootState) => state.FormIndividualStep
  );

  const dispatch = useAppDispatch();

  const nextStep = () => {
    dispatch(individualNextStep());
  };

  const previousStep = () => {
    dispatch(individualPreviousStep());
  };

  const fillForm = (values: any) => {
    dispatch(formIndividualSignup(values));
  };

  switch (currentStage) {
    case 1:
      return <IndividualDetails nextStep={nextStep} fillForm={fillForm} />;
    case 2:
      return <IndividualPassword nextStep={nextStep} fillForm={fillForm} />;
    case 3:
      return (
        <IndividualVerifyAccount nextStep={nextStep} prevStep={previousStep} />
      );
    default:
      return (
        <RegistrationSuccess nextStep={nextStep} prevStep={previousStep} />
      );
  }
};

