import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

function Registration() {
  let [counter, setCounter] = useState(0);
  let [users, setUser] = useState([{ name: "Deepak" }]);
  let getData = async () => {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser([...users, ...data]); //[user,user]
    } catch (error) {
      // error
    }
  };
  let inc = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    getData();
    console.log("Mounting");

    let interval = setInterval(() => {
      console.log("Interval");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("update");
  }, [counter]);

  return (
    <div>
      Registration <button onClick={inc}>inc {counter}</button>
      <p>{users.length === 0 ? "Loading ..." : "Here is the list"}</p>
      <ul>
        {users.map((user, index) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Registration;

// [] => mounting phase
// [props/state variables] => updating phase
