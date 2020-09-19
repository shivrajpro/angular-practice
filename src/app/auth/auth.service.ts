import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
    idToken: string;        //	A Firebase Auth ID token for the newly created user.
    email: string;          //  The email for the newly created user.
    refreshToken: string;   //	A Firebase Auth refresh token for the newly created user.
    expiresIn: string;      //	The number of seconds in which the ID token expires.
    localId: string;        //  The uid of the newly created use
    registered?: boolean;   //  Whether the email is for an existing account.
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    webApiKey = "AIzaSyADY1P8OfM_kDeXGmheKpFLuHaoMN9h7rM";

    signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

    loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(this.signUpUrl+this.webApiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }


    login(email: string, password: string){
        return this.http.post<AuthResponseData>(this.loginUrl+this.webApiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));        
    }
    
    private handleError(errorRes: HttpErrorResponse){
        console.log("Error", errorRes);

        let errorMessage = "An Unknown Error Occurred!";
    
        if (!errorRes.error || !errorRes.error.error)
            return throwError(errorMessage);
    
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email Id already exists!';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Incorrect Password! Try Again';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email Id not registered. Please try to sign up!';
        }
    
        return throwError(errorMessage);
    }
}