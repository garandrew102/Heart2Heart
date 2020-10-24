import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron, Card } from "react-bootstrap";

const Profile = ({ match }) => {
  const { id } = match.params;
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => {
        setProfile(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Jumbotron
        className="d-flex justify-content-around mb-5"
        style={{ width: "100%" }}
      >
        <div id="user-avatar">image</div>
        <div id="user-info" className="mx-5 text-center">
          <h1>{profile?.username}</h1>
          <h5>Connection</h5>
        </div>
      </Jumbotron>
      <Card>
        <Card.Header>
          <Card.Title>My Donor Story:</Card.Title>
        </Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
          odio aenean sed adipiscing diam. Faucibus turpis in eu mi bibendum
          neque egestas congue. Integer vitae justo eget magna fermentum iaculis
          eu non diam. Dolor sit amet consectetur adipiscing elit duis tristique
          sollicitudin nibh. Bibendum ut tristique et egestas quis ipsum
          suspendisse ultrices gravida. Pulvinar etiam non quam lacus
          suspendisse faucibus interdum. Tincidunt id aliquet risus feugiat in
          ante metus. Duis convallis convallis tellus id interdum velit. Mattis
          ullamcorper velit sed ullamcorper morbi. Nisl vel pretium lectus quam
          id leo. Justo laoreet sit amet cursus sit amet dictum sit amet.
          Tincidunt vitae semper quis lectus nulla. Consequat ac felis donec et
          odio pellentesque diam volutpat commodo. Orci dapibus ultrices in
          iaculis. Tincidunt vitae semper quis lectus nulla at volutpat diam.
          Parturient montes nascetur ridiculus mus mauris vitae ultricies.
          Auctor urna nunc id cursus metus aliquam. Pellentesque elit
          ullamcorper dignissim cras. Porttitor rhoncus dolor purus non enim
          praesent elementum facilisis leo. Euismod elementum nisi quis eleifend
          quam adipiscing. Malesuada nunc vel risus commodo. Quam vulputate
          dignissim suspendisse in est ante in nibh. Tincidunt lobortis feugiat
          vivamus at augue eget arcu dictum varius. Rhoncus mattis rhoncus urna
          neque viverra. Rutrum quisque non tellus orci ac. Ullamcorper morbi
          tincidunt ornare massa eget egestas purus. Aenean et tortor at risus
          viverra adipiscing at. Faucibus turpis in eu mi bibendum. Sapien eget
          mi proin sed libero enim sed. At urna condimentum mattis pellentesque
          id nibh tortor id aliquet. Commodo elit at imperdiet dui accumsan sit
          amet. Tortor at auctor urna nunc id cursus metus. At imperdiet dui
          accumsan sit amet nulla. At quis risus sed vulputate odio. Lorem ipsum
          dolor sit amet. Viverra tellus in hac habitasse platea dictumst
          vestibulum. Ultricies integer quis auctor elit sed vulputate mi sit.
          Tristique nulla aliquet enim tortor at auctor. Viverra ipsum nunc
          aliquet bibendum enim facilisis. Adipiscing vitae proin sagittis nisl
          rhoncus mattis rhoncus urna. Erat velit scelerisque in dictum non. Sit
          amet nulla facilisi morbi. Vestibulum lectus mauris ultrices eros in.
          Purus in mollis nunc sed id semper risus. Vitae aliquet nec
          ullamcorper sit amet risus. Amet tellus cras adipiscing enim eu
          turpis. Condimentum vitae sapien pellentesque habitant morbi. Viverra
          aliquet eget sit amet tellus cras adipiscing. Suspendisse faucibus
          interdum posuere lorem ipsum. Molestie at elementum eu facilisis sed
          odio morbi quis commodo. Blandit aliquam etiam erat velit scelerisque
          in dictum. Suscipit tellus mauris a diam. Sed sed risus pretium quam
          vulputate dignissim. Etiam erat velit scelerisque in dictum non
          consectetur a. Proin fermentum leo vel orci porta non pulvinar neque.
          Purus sit amet volutpat consequat mauris. A iaculis at erat
          pellentesque adipiscing. Quis viverra nibh cras pulvinar mattis. Proin
          sed libero enim sed faucibus turpis. Ut pharetra sit amet aliquam id
          diam maecenas. Et egestas quis ipsum suspendisse. Lectus proin nibh
          nisl condimentum id venenatis a condimentum vitae. Sed arcu non odio
          euismod lacinia at. Mauris augue neque gravida in fermentum et. Justo
          nec ultrices dui sapien eget mi proin. Sed elementum tempus egestas
          sed sed risus pretium quam. Egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. Sit amet mauris commodo quis.
          Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Diam
          sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Praesent
          elementum facilisis leo vel fringilla.
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
