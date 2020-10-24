import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Header from "./Header";

const Avatar = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append("avatar", image, image?.name);
    setLoading(true);
    axios
      .post("/api/users/avatar", avatar, {
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log(data);
        setCurrentUser(data);
        setPreview(null);
        setImage(data.avatar);
        alert("Your image was uploaded!");
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column mt-5 align-items-center">
        <h2>Upload Avatar</h2>
        <img
          className="mt-2 mb-4"
          src={
            preview || currentUser?.avatar || "http://placekitten.com/200/200"
          }
          alt="avatar"
          style={{ height: "200px", width: "200px" }}
        />
        <Form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            style={{ marginLeft: "100px" }}
            type="file"
            name="avatar"
          />
          <Button type="submit" className="mt-3" style={{ width: "150px" }}>
            Upload Avatar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Avatar;
