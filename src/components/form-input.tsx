/* eslint-disable react/display-name */

import { forwardRef, InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  error?: string;
  rightText?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ hasError = "false", error, rightText, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[0.3rem] relative">
        <div
          className={`flex items-center justify-between h-[2.625rem] rounded border-base-button bg-base-input transition overflow-hidden focus-within:border-brand-yellow-dark ${
            hasError === true ? "base-base-error" : "bg-brand-yellow-dark"
          }`}
        >
          <input
            type="text"
            ref={ref}
            {...props}
            className="flex-1 bg-transparent border-none h-full px-3 text-xs text-base-text font-roboto placeholder:text-base-label"
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
