import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Label } from '@/ui/v1/Label/Label';
import { Input } from '@/ui/v1/Input/Input';
import { Button } from '@/ui/v1/Button/Button';
import { InputsWrapper, ButtonsWrapper } from '@/components/v1/layout/AuthLayout/styles';
import { createUser } from '@/api/auth';
import Loader from '@/ui/v1/Loader/Loader';
import userState from '@/store/userState';

export const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passswordError, setPasswordError] = useState(false);
    const [passwordRepeatError, setPasswordRepeatError] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isAwaiting, setIsAwaiting] = useState(false);

    function handleSubmit(event: any) {
        event.preventDefault();

        setIsAwaiting(true);

        if (!email) {
            setEmailError(true);
            setIsAwaiting(false);
        }
        if (!password) {
            setPasswordError(true);
            setIsAwaiting(false);
        }
        if (!passwordRepeat) {
            setPasswordRepeatError(true);
            setIsAwaiting(false);
        }
        if (password !== passwordRepeat) {
            setPasswordError(true);
            setPasswordRepeatError(true);
            setIsAwaiting(false);
        }

        if (email && password && passwordRepeat) {
            createUser(email, password, passwordRepeat)
                .then(response => response.text())
                .then((response: any) => {
                    response = JSON.parse(response);
                    
                    if (response?.status === 'OK') {
                        localStorage.setItem('token', response.data.token);
                        window.location.assign('/');
                    }
                    
                    if (response?.status === 'ERR') {
                        setIsError(true);
                    }
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    setIsAwaiting(false)
                })
        }
    }

    useEffect(() => {
        if (email) {
            setEmailError(false);
        }
        if (password) {
            setPasswordError(false);
        }
        if (passwordRepeat) {
            setPasswordRepeatError(false);
        }
    }, [email, password, passwordRepeat]);

  return (
    <form onSubmit={event => handleSubmit(event)}>
        <h1 style={{ textAlign: "center" }}>Регистрация</h1>
        <InputsWrapper>
            <Label>
                <span>E-mail</span>
                <Input
                    isInvalid={emailError ? true : false}
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {emailError && 
                    <span style={{ color: 'var(--addable-red)' }}>Проверьте правильность заполнения</span>
                }
            </Label>
            <Label>
                <span>Пароль</span>
                <Input
                    isInvalid={passswordError ? true : false}
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {passswordError && 
                    <span style={{ color: 'var(--addable-red)' }}>Проверьте правильность заполнения</span>
                }
            </Label>
            <Label>
                <span>Повторно введите пароль</span>
                <Input
                    isInvalid={passwordRepeatError ? true : false}
                    type='password'
                    value={passwordRepeat}
                    onChange={e => setPasswordRepeat(e.target.value)}
                />
                {passwordRepeatError
                    && <span style={{ color: 'var(--addable-red)' }}>Проверьте правильность заполнения</span>
                }
            </Label>
            <Label>
                {isError && <span style={{ color: 'var(--addable-red)' }}>Пользователь с таким email уже зарегистрирован</span>}
            </Label>
        </InputsWrapper>
        <ButtonsWrapper>
            <Button 
                disabled={emailError || passswordError || passwordRepeatError || isAwaiting ? true : false}
                type='submit'
                styleType='primary'
            >
                {isAwaiting ? <Loader/> : <>Создать аккаунт</>}
            </Button>
            <Link href="/SignIn">
                <Button type='button' styleType='secondary'>Назад</Button>
            </Link>
        </ButtonsWrapper>
    </form>
  )
}

