import { useEffect, useState } from "react";
import pool from "./db";

const Base = () => {
  let [data, setData] = useState();
  useEffect(() => {
    pool.query("SELECT * FROM users", (err, res) => {
      if (err) console.log(err);
      else setData(res);
    });
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default Base;
