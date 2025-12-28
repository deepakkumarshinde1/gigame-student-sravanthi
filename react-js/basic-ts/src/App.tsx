import { useState } from "react";
import type { User } from "./types/common.types";

function App() {
  let [user, setUser] = useState<User>({
    name: "",
    password: "",
  });
  return <div>App</div>;
}

export default App;
