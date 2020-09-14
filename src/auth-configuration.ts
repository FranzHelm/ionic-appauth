export enum AuthenticationType {
    Token = "token",
    AuthorizationCode = "code",
    IdToken = "id_token"
}

export interface IAuthConfig {
    client_id: string,
    server_host: string,
    redirect_url: string, 
    end_session_redirect_url: string, 
    scopes: string,
    pkce : boolean,
    // If identity provider does not return a refresh token on refresh (GRANT_TYPE_REFRESH_TOKEN), 
    // set this option to true to keep the current refreshtoken.
    keep_refreshtoken_on_refresh: boolean,
}