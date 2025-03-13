import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [validationStates, setValidationStates] = useState({ usernameValid: true, passwordValid: true });

    const validatePassword = (password) => {
        return password.length>=5 & password.length<=8;
    };

    const handleusernameChange = (e) => {
        setFormValues({ ...formValues, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
        setValidationStates({ ...validationStates, passwordValid: validatePassword(e.target.value) });
    };

    const isFormValid = validationStates.passwordValid && formValues.username && formValues.password;

    return (
        <div>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicusername">
                    <Form.Label>username address</Form.Label>
                    <Form.Control 
                        type="username" 
                        placeholder="Enter username" 
                        onChange={handleusernameChange} 
                        value={formValues.username} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={handlePasswordChange} 
                        value={formValues.password} 
                        isInvalid={!validationStates.passwordValid} 
                    />
                    {!validationStates.passwordValid && <Form.Text className="text-muted">Password should be between 5 and 8 characters long</Form.Text>}
                </Form.Group>

                <Link to={isFormValid ? "/home" : "#"} style={{ pointerEvents: isFormValid ? "auto" : "none" }}>
                    <Button variant="primary" disabled={!isFormValid}>
                        Log In
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Login;