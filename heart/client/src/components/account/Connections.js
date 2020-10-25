import React, { useEffect, useState } from "react";
import { Card, Button, Table } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import Header from "./Header";

const Connections = () => {
  // const { currentUser, setCurrentUser } = useContext(AppContext);
  const [connections, setConnections] = useState();
  const [accept, setAccept] = useState();
  const [reject, setReject] = useState();

  useEffect(() => {
    axios
      .patch("/api/connect/confirm/:id/:confirm", { withCredentials: true })
      .then(({ data }) => {
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
