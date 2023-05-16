import { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
