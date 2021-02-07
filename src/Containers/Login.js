import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onSubmit = () => {
        // call ur api here bitch i dont wanna implement redux bc fk u
        console.log(props);
        axios.post('http://localhost:8000/api/auth/login',
        {
            email: username,
            password: password
        })
        .then(response => {
            localStorage.setItem('authToken', response.data.token);
            history.replace('/');
        })
        .catch(error => {
            
        });
    }

    return (
        <div style={{ height: '100vh' }}>
            <Card style={{ width: 500, margin: 40 }}>
                <CardBody>
                    <CardTitle tag='h5'>Login</CardTitle>
                </CardBody>

                <CardBody>
                    <Label>Email</Label>
                    <Input
                        onChange={e => setUsername(e.target.value)}
                        style={{ marginBottom: 10 }}
                        value={username}
                        type='email'
                        placeholder='is gme going to the moon?'
                    />
                    <Label>Password</Label>
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        placeholder='10,000 or bust'
                    />

                    <Button
                        color='primary'
                        style={{ marginTop: 20 }}
                        onClick={onSubmit}
                    >
                        Login
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;
