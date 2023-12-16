import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SigninElements'; // Make sure to replace 'YourComponentElements' with the actual file path or component name.

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Poud<span>cast</span></Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Sign In</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
