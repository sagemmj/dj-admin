import type { FormEvent } from "react";
import { useState } from "react";

interface UseFormProps {
  additionalData?: { [key: string]: any };
}

interface FormData {
  [key: string]: string;
}

interface UseFormReturn {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  status: string;
  message: string;
}

function useForm({ additionalData }: UseFormProps): UseFormReturn {
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const finalFormEndpoint = e.currentTarget.action;
    const data: FormData = Array.from(e.currentTarget.elements)
      .filter((input: any) => input.name)
      .reduce(
        (obj: FormData, input: any) =>
          Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    if (additionalData) {
      Object.assign(data, additionalData);
    }

    fetch(finalFormEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus("success");
      })
      .catch((err: Error) => {
        setMessage(err.toString());
        setStatus("error");
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;
