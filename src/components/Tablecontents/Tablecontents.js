import React, { useEffect, useState } from "react";
import "./Tablecontents.css";
import Display from "../Display/Display";
import Table from "../Table/Table";


const Tablecontents = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://my-json-server.typicode.com/Shresthasajish/avocado/tablecontents")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, layout, capacity, image, status) => {
    await fetch("https://my-json-server.typicode.com/Shresthasajish/avocado/tablecontents", {
      method: "POST",
      body: JSON.stringify({

        name: name,
        capacity: capacity,
        layout: layout,
        image:image,
        status:status
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://my-json-server.typicode.com/Shresthasajish/avocado/tablecontents/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users)

  return (
    <div>
      <Table onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <Display
            id={user.id}
            name={user.name}
            key={user.id}
            capacity={user.capacity}
            status={user.status}
            layout={user.layout}
            image={user.image}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Tablecontents;
