import { Injectable } from "@angular/core";
import { IUser } from "./user.modu";

@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName:string, password:string)
    {
        this.currentUser = 
        {
            id: 1,
            firstName: "veera",
            lastName: "Empire"

        }
    }
    isAuthenticated()
    {
        return !!this.currentUser;
    }
}