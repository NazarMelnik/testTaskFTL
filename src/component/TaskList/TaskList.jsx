import { useEffect, useState } from "react";
import objCreator from "./validation";
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
    const numbOfUser = Object.values(result.assigneeStats).length;
    setUsersNumber(numbOfUser);
  }, [data]);
  return (
    <section className="title-section">
      {tasksObj.taskStatus && tasksObj.taskStatus.completed !== undefined ? (
        <div className="title-section__content">
          <h2 className="title-section__completed-tasks">
            Ми виконали понад {tasksObj.taskStatus.completed} замовлень
          </h2>
          <h1 className="title-section__total-tasks">
            НАС УЖЕ понад {counter}
          </h1>
          <div className="title-section__button-wrapper">
            <button className="title-section__button">Замовити</button>
          </div>
        </div>
      ) : (
        <div className="title-section__no-data">
          No task status data available
        </div>
      )}
    </section>
  );
}
