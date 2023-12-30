import { useState } from "react";

type UseInputConfig = {
  initialInputValue?: string;

  valueValidator: (val: string) => {
    isValid: boolean;
    errorMessage: string;
  };
  valueModifier?: (val: string) => string;
  /* If it is needed to change the input value 
      (such as converting Persian numbers to English in numerical inputs) */

  isMutableIfHasError?: boolean;

  /* If the input value is managed by external state management,
    these two lines are used */
  isUsingInternalState?: boolean;

  externalState?: { extValue: string; extValueUpdateFn: () => void };
};

export default function useInput({
  initialInputValue = "",
  valueValidator,
  valueModifier = (val) => {
    return val;
  },
  isMutableIfHasError = true,
  isUsingInternalState = true,
  externalState = { extValue: "", extValueUpdateFn: () => {} },
}: UseInputConfig) {
  const [enteredValue, setEnteredValue] = useState(initialInputValue);
  const [isTouched, setIsTouched] = useState(false);

  const inputValue = isUsingInternalState
    ? enteredValue
    : externalState.extValue;

  const inputValueUpdater = isUsingInternalState
    ? setEnteredValue
    : externalState.extValueUpdateFn;

  const modifiedValue = valueModifier(inputValue);
  const valueIsValid = valueValidator(modifiedValue).isValid;

  const errorMessage =
    !valueIsValid && isTouched
      ? valueValidator(modifiedValue).errorMessage
      : "";

  const inputHasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const modifiedValue = valueModifier(event.target.value);
    const newValueIsValid = valueValidator(modifiedValue).isValid;
    if (isMutableIfHasError) {
      inputValueUpdater(modifiedValue);
    } else {
      if (newValueIsValid) {
        inputValueUpdater(modifiedValue);
      } else if (modifiedValue === "") {
        inputValueUpdater(modifiedValue);
      }
    }
  };

  const inputblurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    inputValueUpdater("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    errorMessage,
    valueChangeHandler,
    inputblurHandler,
    isTouched,
    reset,
  };
}
