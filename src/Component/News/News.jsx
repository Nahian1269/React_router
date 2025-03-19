import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const News = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h2>HEllo welcome to Prothom Alo </h2>
      <h1>{users.length}</h1>
      <div>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default News;
