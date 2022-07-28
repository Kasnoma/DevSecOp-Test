import * as React from "react";
import { TRootState } from "../../../store";

import { useAppSelector, useAppDispatch } from "../../../hooks";

import { CorporateDetails } from "./CorporateDetails";
import { CorporateVerifyAccount } from "./VerifyCorporate";
import { CorporatePassword } from "./PasswordCorporate";

import { RegistrationSuccess } from "../RegistrationSuccess";

import {
  corporateNextStep,
  corporatePreviousStep,
} from "../../../store/rootSlice";

export const CorporateLadder = () => {
  const currentStage = useAppSelector(
    (state: TRootState) => state.FormCorporateStep
  );

  const user = useAppSelector((state: TRootState) => state.FormCorporateSignup);

  const dispatch = useAppDispatch();

  const nextStep = () => {
    dispatch(corporateNextStep());
  };
  const previousStep = () => {
    dispatch(corporatePreviousStep());
  };

  switch (currentStage) {
    case 1:
      return <CorporateDetails nextStep={nextStep} />;
    case 2:
      return <CorporatePassword nextStep={nextStep} />;
    case 3:
      return (
        <CorporateVerifyAccount nextStep={nextStep} prevStep={previousStep} />
      );
    default:
      return (
        <RegistrationSuccess
          nextStep={nextStep}
          prevStep={previousStep}
          user={user.companyName}
        />
      );
  }
};

