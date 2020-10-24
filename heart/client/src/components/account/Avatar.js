import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Form } from "react-bootstrap";
import axios from "axios";

const Avatar = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setPreview(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append("avatar", image, image.name);
    axios
      .post("/api/users/avatar", avatar, {
        withCredentials: true,
      })
      .then((response) => {
        setCurrentUser({
          ...currentUser,
          avatar: response.data.secure_url,
        });
        setPreview(null);
        alert("Your image was uploaded!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex flex-column mt-5 align-items-center">
      <h2>Upload Avatar</h2>
      <img
        className="mt-2 mb-4"
        src={preview || currentUser?.avatar || "http://placekitten.com/200/200"}
        alt="avatar"
      />
      <Form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="ml-5"
          type="file"
          name="avatar"
        />
      </Form>
    </div>
  );
};

export default Avatar;
