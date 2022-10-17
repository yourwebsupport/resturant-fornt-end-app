import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LinkItem} from './link-item';
import {map, shareReplay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../../../modules/auth";
import {environment} from "../../../../environments/environment";
import {isEmpty} from "../../../helper/string-util";

@Injectable({
    providedIn: 'root'
})
export class FeatureLinkService {
    readonly ROOT_URL = environment.apiUrl + '/config/key/feature.links';

    private cache$: Observable<LinkItem[]>;
      constructor(private auth: AuthService, private http: HttpClient) {
    }

    getAll(): Observable<LinkItem[]> {
        if (!this.cache$) {
            this.cache$ = this.requestFeatureLinks().pipe(
                shareReplay(1)
            );
        }

        return this.cache$;
    }

    private requestFeatureLinks(): Observable<LinkItem[]> {
        return this.http.get<LinkItem[]>(this.ROOT_URL)
            .pipe(map(l => l.filter(i => isEmpty(i.role) || this.auth.isGranted(i.role))));
    }


}
