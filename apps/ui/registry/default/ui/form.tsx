"use client";

import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

type FormErrors = Record<string, string | string[] | undefined>;

type FormContextValue = {
  errors: FormErrors;
};

const FormContext = React.createContext<FormContextValue>({
  errors: {},
});

type FormProps = React.ComponentProps<"form"> & {
  errors?: FormErrors;
};

function Form({ className, errors, ...props }: FormProps) {
  return (
    <FormContext.Provider value={{ errors: errors ?? {} }}>
      <form
        className={cn("flex w-full flex-col gap-4", className)}
        data-slot="form"
        {...props}
      />
    </FormContext.Provider>
  );
}

function useFormContext() {
  return React.useContext(FormContext);
}

export { Form, useFormContext, type FormErrors };
