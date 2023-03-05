import { Button } from "../../../components";
import { useAppDispatch, useAppSelector, removeCar, selectCars } from "../../../store";

const CarList = () => {
  const dispatch = useAppDispatch();
  const { cars, searchTerm } = useAppSelector(selectCars);

  const carsListFiltered = cars.filter(car =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => dispatch(removeCar(id));

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {carsListFiltered.map((car) => {
          const bold = car.model.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== "";

          return (
            <li key={car.id}>
              <p style={{ fontWeight: bold ? "bold" : "normal" }}>
                {car.model}
              </p>
              <p>{car.price}</p>
              <Button handleClick={() => handleDelete(car.id as string)}>X</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarList;
