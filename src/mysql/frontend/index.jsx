import { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table border={1} align="center" style={{ marginTop: "100px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.fullname}</td>
                <td>{value.username}</td>
                <td>{value.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
