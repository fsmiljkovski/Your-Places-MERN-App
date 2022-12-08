import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "Input_change":
      let formisValid = true;
      for (const inputID in state.inputs) {
        if (!state.inputs[inputID]) {
          continue;
        }
        if (inputID === action.inputID) {
          formisValid = formisValid && action.isValid;
        } else {
          formisValid = formisValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formisValid,
      };
    case "Set_Data":
      return {
        inputs: action.inputs,
        isValid: action.formisValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "Input_change",
      value: value,
      isValid: isValid,
      inputID: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "Set_Data",
      inputs: inputData,
      formisValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
