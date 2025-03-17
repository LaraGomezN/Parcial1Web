import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

function Login() {
    const intl = useIntl(); // Hook para obtener los mensajes de internacionalización

    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [validationStates, setValidationStates] = useState({ usernameValid: true, passwordValid: true });

    const validatePassword = (password) => {
        return password.length >= 5 && password.length <= 8;
    };

    const handleUsernameChange = (e) => {
        setFormValues({ ...formValues, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
        setValidationStates({ ...validationStates, passwordValid: validatePassword(e.target.value) });
    };

    const isFormValid = validationStates.passwordValid && formValues.username && formValues.password;

    return (
        <div>
            <h1><FormattedMessage id="login" defaultMessage="Login" /></h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label><FormattedMessage id="username" defaultMessage="Username" /></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder={intl.formatMessage({ id: "placeholder.username", defaultMessage: "Enter your username" })} 
                        onChange={handleUsernameChange} 
                        value={formValues.username} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><FormattedMessage id="password" defaultMessage="Password" /></Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder={intl.formatMessage({ id: "placeholder.password", defaultMessage: "Enter your password" })} 
                        onChange={handlePasswordChange} 
                        value={formValues.password} 
                        isInvalid={!validationStates.passwordValid} 
                    />
                    {!validationStates.passwordValid && (
                        <Form.Text className="text-muted">
                            <FormattedMessage id="error.password" defaultMessage="Password must be between 5 and 8 characters" />
                        </Form.Text>
                    )}
                </Form.Group>

                <Link to={isFormValid ? "/home" : "#"} style={{ pointerEvents: isFormValid ? "auto" : "none" }}>
                    <Button variant="primary" disabled={!isFormValid}>
                        <FormattedMessage id="login" defaultMessage="Login" />
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Login;
