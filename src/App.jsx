import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "./store/stuSlice";
import {
  setName as setSchoolName,
  setAddress as setSchoolAddress,
} from "./store/schoolSlice";

function App() {
  const student = useSelector((state) => state.student);
  const school = useSelector((state) => state.school);
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
      <hr />
      <div>
        {school.name} -- {school.address}
      </div>
      <button onClick={() => dispatch(setSchoolName("复旦大学"))}>
        更换 school name
      </button>
      <button onClick={() => dispatch(setSchoolAddress("上海"))}>
        更换 school address
      </button>
    </div>
  );
}

export default App;
