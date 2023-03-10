import ReactTypingEffect from "react-typing-effect";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Register({ title, description }) {
  const [NIP, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handleNama = (inputNama) => {
    setNama(inputNama);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userRegister = () => {
    console.log("user register ready!");
    const requestingData = {
      nip: NIP,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3200/users",
      data: requestingData,
    })
      .then((result) => {
        console.log(result.data);
        if (result.data.registered) {
          alert("Pendaftaran berhasil");
          window.location.replace("/login");
        } else {
          alert("Gagal mendaftar, coba dengan NIP lain");
        }
      })
      .catch((e) => alert("e"));
  };

  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="masukkan NIP anda"
            required
            onChange={(event) => handleNIP(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Nama</Form.Label>
          <Form.Control
            type="string"
            placeholder="masukkan nama anda"
            required
            onChange={(event) => handleNama(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="masukkan password anda"
            required
            onChange={(event) => handlePassword(event.target.value)}
          />
        </Form.Group>
        <Button className="mt-4 w-100" onClick={() => userRegister()}>
          Daftar Sekarang
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
