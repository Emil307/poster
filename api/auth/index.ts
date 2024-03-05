import type { TUser } from '@/domain/types/types';

const API = process.env.API_URL_V1 || 'http://afisha.ledokol.it/api/v1';
const token = '2c91daf72cbee860cb1b28ad29069f54a944110d'

// export const createUser = async (email: string, password1: string, password2: string) => {
//     const newUser: TUser = {
//         email: email,
//         name: '',
//         password: password1,
//     }

//     const res = await axios({
//         method : 'POST',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         data: JSON.stringify(newUser),
//     })

//     return res;
// }

export const createUser = async (email: string, password1: string, password2: string) => {
    const newUser: TUser = {
        email: email,
        name: 'вфыв',
        password: password2,
    }

    const res = await fetch(`${API}/register`, {
        method : 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })

    return res;
}

export const login = (email: string, password: string) => {
    const res = fetch(`${API}/login`, {
        method : 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })

    console.log(res);

    return res;
}

export const getUser = () => {
    return fetch(`${API}/user/`, {
        method : 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Token ${token}`,
        },
    })
}
