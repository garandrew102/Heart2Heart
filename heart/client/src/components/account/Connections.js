import React, { useState, useContext } from "react";
import { Card, Button, Table } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import Header from "./Header";

const Connections = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleClick = (id, confirm) => {
    console.log(confirm);
    axios
      .patch(`/api/connect/confirm/${id}/${confirm}`, "", {
        withCredentials: true,
      })
      .then((data) => {
        setCurrentUser(data);
        alert("Connection updated!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };
  return (
    <div>
      <Header />
      <h3 className="mt-4">Connections</h3>

      <Card>
        <Card.Body>
          <p className="mb-3" style={{ fontWeight: "bold" }}>
            Pending Requests:
          </p>
          <Table>
            <tbody>
              {currentUser?.pendingRequests?.map((user) => {
                return (
                  <tr>
                    <td>{user?.name} has requested to connect with you! </td>

                    <td>
                      <Button
                        key={user._id}
                        variant="success"
                        onClick={() => {
                          handleClick(user.connectionId, "true");
                        }}
                      >
                        Accept
                      </Button>
                    </td>
                    <td>
                      <Button
                        key={user._id}
                        style={{ background: "red" }}
                        onClick={() => {
                          handleClick(user.connectionId, "false");
                        }}
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Connections;
