import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  getWishes(){
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
    /*
      return an observable (the request hasn't been sent yet) we need to use .subscribe to do the request
      When HttpClient.get() returns an Observable, the actual HTTP request is not sent immediately.
      It's only sent when you subscribe to the observable. This allows you to control when the request happens
      Observables can emit multiple values over time. While HTTP requests generally emit one response (success or error),
      observables are used because they allow you to handle asynchronous events in a flexible and powerful way
    */
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`There is an issue with client or network: `, error.error);                
    }
    else{
      console.error(`Server-side error: `, error.error)
    }

    return throwError(() => new Error('cannot retrieve wishes from the server. Please try again.'))
  }


  private addWish(wish: WishItem){
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    // first retrieves the standard headers, then sets an additional Authorization header with dummy value

    this.http.post('assets/wishes.json', wish, options);
    

  }
}
