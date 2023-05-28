import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  const postPurch = async () => {
    try {
      const data = {
        purchases: [
          {
            MovieId: 1,
            quantity: 1,
          },
          {
            MovieId: 2,
            quantity: 1,
          },
        ],
        name: "sdsadasdas",
        phoneNumber: "sasdasdasd",
        street: "sadasdasdasd",
        email: "aaaa@gmail.com",
        city: "asadasd",
        state: "sadsad",
        postalCode: "65454654",
        country: "asdsadasd",
      };
      const resp = await axios.post(
        `http://localhost:3001/purchase/guest`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getMovies = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/purchases`);
      console.log(data);
      setPurchases(data.data);
      console.log(purchases);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // postPurch();
    getMovies();
  }, []);

  return (
    <div className="bg-white" style={{ width: "80%", marginLeft: "auto" }}>
      {" "}
      <Table striped hover>
        <thead>
          <tr>
            <th>Id Compra</th>
            <th>User</th>
            <th>Movie Id</th>
            <th>Status</th>

            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {purchases &&
            purchases.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.User.name}</td>
                <td>
                  {e.Movies.map((x) => {
                    return x.id;
                  }).join(", ")}
                </td>
                <td>{e.status}</td>
                <td>
                  {e.Movies.reduce((accumulator, movie) => {
                    return (
                      accumulator + movie.PurchaseMovie.quantity * movie.price
                    );
                  }, 0).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Purchases;
