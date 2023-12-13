import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email};
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newUser = [...users, data]
      setUsers(newUser)
    })
    .then(err => console.error(err))

    e.target.reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="write your name" />
        <br />
        <input type="email" name="email" placeholder="your email" />
        <br />
        <button type="submit">Add User </button>
      </form>
      <h2>User: {users.length}</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>No: {user.id}</h2>
          <p>
            {" "}
            <strong>name:</strong> {user.name}
          </p>
          <p>
            {" "}
            <strong>email:</strong> {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
