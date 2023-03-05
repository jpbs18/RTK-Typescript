import { Button, Menu } from "../../components" 
import Movies from "./movies";
import Songs from "./songs";
import { useAppDispatch, reset } from "../../store";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => dispatch(reset(""));

  return (
    <div className="App">
      <Menu />
      <hr />
      <Button handleClick={handleReset}>Reset all lists</Button>
      <hr />
      <Movies />
      <hr />
      <Songs />
    </div>
  );
};

export default Home;
