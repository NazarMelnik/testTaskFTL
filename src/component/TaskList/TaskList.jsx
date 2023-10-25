import { useEffect, useState } from "react";
import objCreator from "./validation";
import countUsers from "./countUser";
export default function TaskList({ data }) {
  const [tasksObj, setTasksObj] = useState({});
  const [usersNumber, setUsersNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => (counter <= usersNumber ? setCounter(counter + 1) : false),
      50
    );
    return () => clearInterval(interval);
  }, [counter]);
  useEffect(() => {
    const result = objCreator(data);
    setTasksObj(result);
    setUsersNumber(countUsers(result.assigneeStats));
  }, [data]);
  return (
    <section className="title-section">
      {tasksObj.taskStatus && tasksObj.taskStatus.completed !== undefined ? (
        <div className="title-content__wrapper">
          <h2>Ми виконали понад {tasksObj.taskStatus.completed} замовлень</h2>
          <h1>НАС УЖЕ понад {counter} </h1>
          <div className="title-btn__wrapper">
            <button className="title-btn">Замовити</button>
          </div>
        </div>
      ) : (
        <div>No task status data available</div>
      )}
    </section>
  );
}
