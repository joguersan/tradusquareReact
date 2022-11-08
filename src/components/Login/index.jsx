import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const UserLogin = () => (
  <div className="d-lg-flex align-items-center justify-content-center text-center">
    <img className="mx-auto rounded-circle flex-lg-shrink-1" src="images/mascot/mascota-300-206.webp" alt="Eñebot" />
    <div className="w-100">
      <InputGroup className="mb-2">
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-person" />
        </InputGroup.Text>
        <FloatingLabel
          controlId="floatingInput"
          label="Usuario o correo electrónico"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-input-cursor-text"></i>
        </InputGroup.Text>
        <FloatingLabel controlId="floatingPassword" label="Contraseña">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </InputGroup>
    </div>
  </div>
)

export default UserLogin