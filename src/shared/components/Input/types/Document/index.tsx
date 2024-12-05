import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Input } from "../..";

interface InputDocumentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputDocument: React.FC<InputDocumentProps> = ({
  label,
  error,
  onChange,
  value,
  ...props
}) => {
  const [mask, setMask] = useState<string>("999.999.999-999");

  const handleMaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) {
      setMask("99.999.999/9999-99");
    } else {
      setMask("999.999.999-999");
    }
  };

  return (
    <div className="relative">
      <InputMask
        mask={mask}
        maskChar=" "
        defaultValue={value}
        onChange={(e) => {
          handleMaskChange(e);
          onChange?.(e);
        }}
        {...props}
      >
        {(inputProps) => (
          <Input {...inputProps} {...props} label={label} error={error} />
        )}
      </InputMask>
    </div>
  );
};

export default InputDocument;
