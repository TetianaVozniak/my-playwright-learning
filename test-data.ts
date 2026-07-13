type Credentials = {
    email: string;
    password: string;
    role?: string;
}

export const validUser: Credentials = {
email: "standard_user",
password: "secret_sauce"
}

export function getLoginUrl(env: string): string {
    return `https://${env}.example.com/login`}
