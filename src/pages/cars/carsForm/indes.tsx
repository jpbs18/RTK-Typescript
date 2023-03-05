import { MutableRefObject, useRef } from "react";
import { Button, Form } from "../../../components";
import { useAppDispatch, addCar } from "../../../store";

const CarForm = () => {
  const dispatch = useAppDispatch();
  const model = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const price = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const config = [
    { id: 1, label: "Model", type: "text", ref: model },
    { id: 2, label: "Price", type: "number", ref: price },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addCar({
        model: model.current.value,
        price: parseInt(price.current.value),
      })
    );

    model.current.value = "";
    price.current.value = "";
  };

  return (
    <Form config={config} onSubmit={handleSubmit}>
      <Button>Add Car</Button>
    </Form>
  );
};

export default CarForm;
