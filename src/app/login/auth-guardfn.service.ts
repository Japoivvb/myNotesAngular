import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable, inject, Injector } from "@angular/core";

Injectable()

export const LoginGuardian:CanActivateFn=(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=> 
  {
    const _loginService = inject(LoginService);
    const _router = inject(Router);

    if(_loginService.islogged()){
        return true;
    }else{
        _router.navigate(['login']);
        return false;
    }
};