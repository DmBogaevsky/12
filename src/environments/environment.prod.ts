export const environment = {
    production: false,
    endpoints: {
        identity: "https://localhost:9001",
        api: "https://localhost:50001"
    },
    auth: {
        authorizeEndpoint: "https://localhost:9001/connect/authorize",
        tokenEndpoint: "https://localhost:9001/connect/token",
        logoutEndpoint: "https://localhost:9001/connect/revocation",
        clientId: "WebApp",
        scope: "user",
        redirectUri: "http://localhost:4200"
    }
};
