import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStore(title: string, content: string) {
        const postData: Post = { title: title, content: content };

        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-c1ec4.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response'
                }
            )
            .subscribe(responseData => {
                console.log(responseData);
            }, errorResponse => {
                this.error.next(errorResponse.message);
            });

    }

    fetchPosts() {
        let searchParams = new HttpParams();

        searchParams = searchParams.append('print','pretty').
                                    append('custom','key');

        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-c1ec4.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({ "Accept-Version": "1.0.0" }),
                params: searchParams,
                responseType:'json'
            }
        )
            .pipe(
                map((responseData) => {
                    const postsArray: Post[] = [];

                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key })
                        }
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            );
    }

    deleteAllPosts() {
        return this.http.delete('https://ng-complete-guide-c1ec4.firebaseio.com/posts.json',
        {
           observe:'events',
           responseType:'text' 
        })
        .pipe(tap(event=>{
            console.log(event);

            if(event.type == HttpEventType.Sent)
                console.log("sent");
            if(event.type == HttpEventType.Response)
                console.log("body = ",event.body);
                
        }));
    }
}