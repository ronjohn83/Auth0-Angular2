import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


let Auth0Lock: any;

@Injectable()
export class Auth{

    lock = new Auth0Lock('RcsZ8ViNXttArUXwtk8zklUnuDG4ke2a', 'ronjohn83.auth0.com', {});

    constructor(){

        this.lock.on("authenticated", (authResult:any) => {
             this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
                if(error){
                    throw new Error(error);
                }
                // Set Profile
                localStorage.setItem('profile', JSON.stringify(profile));
                // Set Token
                localStorage.setItem('id_token', authResult.idToken);
            })
        });
    }

    public login() {
    // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
    // Remove token from localStorage
        localStorage.removeItem('id_token');
    }
}