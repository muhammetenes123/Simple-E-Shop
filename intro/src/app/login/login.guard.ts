import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private accountService: AccountService, private router:Router,private route:ActivatedRoute){};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
        let logged = this.accountService.isLoggedIn();
        if(logged) {
            return true
        }
    this.router.navigate(['login'],{relativeTo: this.route});
    return false;
}
}