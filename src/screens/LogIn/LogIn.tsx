
import { TextInput, PasswordInput, Button, Container, Title } from '@mantine/core';
import { useState } from 'react';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <Container size="lg">
            <Title mb="lg">Log In</Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Email"
                    placeholder="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    required
                    mb="md"
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    required
                    mb="md"
                />
                <Button type="submit" fullWidth mt="md">Log In</Button>
            </form>
        </Container>
    );
};
export default LogIn;