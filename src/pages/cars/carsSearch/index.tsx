import { MutableRefObject, useRef } from "react";
import { Button, Form } from "../../../components"
import { useAppDispatch, searchCar } from "../../../store";

const CarSearch = () => {
  const dispatch = useAppDispatch();
  const model = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const config = [{ id: 1, label: "Model Search", type: "text", ref: model }];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchCar(model.current.value));
  };

  return (
    <div>
      <Form config={config} onSubmit={handleSubmit}>
        <Button>Search</Button>
      </Form>
    </div>
  );
};

export default CarSearch;
