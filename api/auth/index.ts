import type { TUser } from '@/domain/types/types';

export const createUser = (email: string, password1: string, password2: string) => {
    const API = process.env.API_URL_V1 || 'https://afisha.ledokol.it/api/v1';

    const newUser: TUser = {
        email: email,
        name: '',
        surname: '',
        password1: password1,
        password2: password2,
    }

    return fetch(`${API}/users/create`, {
        method : 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
}

export const getUser = (email: string, password: string) => {
    const API = process.env.API_URL_V1 || 'https://afisha.ledokol.it/api/v1';

    return fetch(`${API}/users/create/me?email=${email}`, {
        method : 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
}
