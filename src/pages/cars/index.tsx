import { Menu } from "../../components";
import CarForm from "./carsForm/indes";
import CarList from "./carsList";
import CarSearch from "./carsSearch";
import CarsValue from "./carsValue";

const Cars = () => {
  return (
    <div>
      <Menu />
      <hr />
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarsValue/>
    </div>
  );
};

export default Cars;
