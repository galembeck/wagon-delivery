/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, useState } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  error?: string;
  rightText?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ hasError = false, error, rightText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="flex flex-col gap-[0.3rem] relative">
        <div
          className={`flex items-center justify-between h-[2.625rem] rounded bg-base-input transition border-2 ${
            isFocused
              ? "border-brand-yellow-dark"
              : hasError
              ? "border-base-error"
              : "border-transparent"
          }`}
        >
          <input
            type="text"
            ref={ref}
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`flex-1 bg-transparent border-none h-full px-3 text-xs text-base-text font-roboto placeholder:text-base-label`}
          />
          {rightText && (
            <p className="text-xs mr-3 italic text-base-label">{rightText}</p>
          )}
        </div>
        {error && (
          <p className="text-base-error text-regular-sm font-normal font-roboto">
            {error}
          </p>
        )}
      </div>
    );
  }
);
