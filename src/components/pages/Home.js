import React, { useState, useEffect } from "react";
//For calling API
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  //To maintain the state of data
  const [users, setUser] = useState([]);

  //After page refresh load users from api
  useEffect(() => {
    loadUsers();
  }, []);

  //await will wait till data is received and will not proceed to next line execution
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={'/users/' + user.id}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={'/users/edit/' + user.id}
                  >
                    Edit
                  </Link>
                  <Link
                     to={``}
                     className="btn btn-danger"
                     onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
