import React, { useEffect, useState } from "react";
import { Card, Button, Table } from "react-bootstrap";
import axios from "axios";

import Header from "./Header";


const Connections = () => {
  const [connections, setConnections] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setConnections(data);
    });
  }, []);

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
              {connections?.map((user) => {
                return (
                  <tr>
                    <td>
                      {user?.username} has requested to connect with you!{" "}
                    </td>

                    <td>
                      <Button variant="success">Accept</Button>
                    </td>
                    <td>

                      <Button style={{ background: "red" }}>Reject</Button>

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
