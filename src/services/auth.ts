import { uuid } from "uuidv4"

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750 ) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest({email, password} : SignInRequestData) {
 
    await delay();

    return {
        token: uuid(),
        user: {
            name: 'Danielle Melo',
            email: 'danielleesilva.4@gmail.com',
        }
    }
}

export async function recoverUserInformation(){
    await delay();

    return {
        token: uuid(),
        user: {
            name: 'Danielle Melo',
            email: 'danielleesilva.4@gmail.com',
        }
    }
}