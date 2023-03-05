import { useAppSelector, selectCars } from "../../../store";

const CarsValue = () => {
  const { cars, searchTerm } = useAppSelector(selectCars);

  const totalValue = cars.filter(car => car.model.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                         .reduce((acc, curr) => acc + curr.price, 0);

  return <>{totalValue > 0 && <h2>Total Value: ${totalValue}</h2>}</>;
};

export default CarsValue;
