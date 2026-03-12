interface Env {
    API_BASE_URL: string;
    SERVER_ASSET: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    GRANT_TYPE: string;
    PAYMENT_PUBLIC_KEY: string;
}

function getEnvVariable(name: keyof Env): string {
    const value = import.meta.env[`VITE_${name}`];
    if (!value) {
        throw new Error(`Variable d'environnement manquante : ${name}`);
    }
    return value;
}

export const env: Env = {
    API_BASE_URL: getEnvVariable("API_BASE_URL"),
    SERVER_ASSET: getEnvVariable("SERVER_ASSET"),
    CLIENT_ID: getEnvVariable("CLIENT_ID"),
    CLIENT_SECRET: getEnvVariable("CLIENT_SECRET"),
    GRANT_TYPE: getEnvVariable("GRANT_TYPE"),
    PAYMENT_PUBLIC_KEY: getEnvVariable("PAYMENT_PUBLIC_KEY")
};
