import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    idToken: string;        //	A Firebase Auth ID token for the newly created user.
    email: string;          //  The email for the newly created user.
    refreshToken: string;   //	A Firebase Auth refresh token for the newly created user.
    expiresIn: string;      //	The number of seconds in which the ID token expires.
    localId: string         //  The uid of the newly created use
}

@Injectable({ providedIn:'root'})
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, passowrd: string) {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADY1P8OfM_kDeXGmheKpFLuHaoMN9h7rM",
            {
                email: email,
                password: passowrd,
                returnSecureToken: true
            }
        );
    }
}