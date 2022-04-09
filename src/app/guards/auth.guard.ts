import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad() {
    // route: Route,
    // segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const isAuthenticated = !!(+localStorage.getItem('authenticated'));

    if (isAuthenticated) {
      return true;
    } else {
      const navigation = this.router.getCurrentNavigation();
      console.log('nav: ', navigation);

      let url = '/';
      if (navigation) {
        url = navigation.extractedUrl.toString();
      }

      console.log('got url: ', url);


      this.router.navigate(['/'], { queryParams: { returnto: url }});
      return false;
    }
  }
}
