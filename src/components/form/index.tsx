import React, { LegacyRef } from "react";

interface Config {
  id:number,
  label: string;
  type: string
  ref: LegacyRef<HTMLInputElement> | undefined;
}

interface FormPorps {
  children: React.ReactNode;
  config: Config[]
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ config, onSubmit, children }: FormPorps) => {
  return (
    <form onSubmit={onSubmit}>
      {config.map(entry => {
        return <label key={entry.id}>
          {entry.label}:
          <input type={entry.type} ref={entry.ref}/>
        </label>
      })}
      {children}
    </form>
  );
};

export default Form;
