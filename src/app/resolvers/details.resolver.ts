import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DetailsserviceService } from '../services/details-services/detailsservice.service';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DetailsResolver implements Resolve<any> {
    constructor(private details: DetailsserviceService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
        return this.details.getDetails().pipe(
            map((data: any) => {
              // console.log(data);
              return data;
            }),
            catchError((err) => {
              return of(err);
            })
          );
    }
}

