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
    updateCurrentUser(firstName:string,lastName:string)
    {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}