import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onSubmit = () => {
        // call ur api here bitch i dont wanna implement redux bc fk u
        console.log(props);
        axios.post('http://localhost:8000/api/auth/signup',
            {
                name: name,
                email: username,
                password: password
            })
            .then(response => {
                history.replace('/login');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div style={{ height: '100vh' }}>
            <Card style={{ width: 500, margin: 40 }}>
                <CardBody>
                    <CardTitle tag='h5'>Sign Up</CardTitle>
                </CardBody>

                <CardBody>
                    <Label>Name</Label>
                    <Input
                        onChange={e => setName(e.target.value)}
                        style={{ marginBottom: 10 }}
                        value={name}
                        type='name'
                        placeholder='Your name'
                    />
                    <Label>Email</Label>
                    <Input
                        onChange={e => setUsername(e.target.value)}
                        style={{ marginBottom: 10 }}
                        value={username}
                        type='email'
                        placeholder='Your email (This will be your username)'
                    />
                    <Label>Password</Label>
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        placeholder='Password'
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

export default SignUp;
