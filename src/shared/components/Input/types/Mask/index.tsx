import React, { useState } from "react";
import InputMask from "react-input-mask";
//
import { Input } from "../..";

interface InputDocumentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputDocument: React.FC<InputDocumentProps> = ({ label, ...props }) => {
  const [mask, setMask] = useState<string>("999.999.999-99");

  const handleMaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) {
      setMask("99.999.999/9999-99");
    } else {
      setMask("999.999.999-99");
    }
  };

  return (
    <InputMask
      mask={mask}
      onChange={(e) => {
        handleMaskChange(e);
        props.onChange?.(e);
      }}
    >
      {(inputProps) => <Input {...inputProps} {...props} label={label} />}
    </InputMask>
  );
};

export default InputDocument;
