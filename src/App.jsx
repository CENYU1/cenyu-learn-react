import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "./store";

function App() {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  function handleChangeName() {
    dispatch(setName("岑昱"));
  }

  function handleChangeAge() {
    dispatch(setAge(18));
  }

  return (
    <div>
      <h1>Hello React</h1>
      <div>
        {student.name} -- {student.age} -- {student.address}
      </div>
      <button onClick={handleChangeName}>更换name</button>
      <button onClick={handleChangeAge}>更换age</button>
    </div>
  );
}

export default App;
