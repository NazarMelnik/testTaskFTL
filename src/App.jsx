import { useEffect, useState } from "react";
import Loader from "./component/Loader/Loader";
import TaskList from "./component/TaskList/TaskList";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1500);
    setLoader(true);

    fetch("/fakeFetch.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!loader) {
    return (
      <>
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <TaskList data={data} />
          </>
        )}
      </>
    );
  } else {
    return <Loader show={loader} />;
  }
}

export default App;
