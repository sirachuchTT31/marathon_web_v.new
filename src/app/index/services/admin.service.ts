import { Injectable } from "@angular/core";
import { HeaderService } from "./header.service";
import { Observable, of } from "rxjs";
import { IBaseSingleResult } from "../interface/base-result";
import { ConfigurationService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { CreateAdmin, EditAdmin } from "../interface/admin";
@Injectable({
    providedIn: 'root'
})

export class AdminService {
    constructor(private configService: ConfigurationService, private http: HttpClient,
        private headerService: HeaderService,) {
    }
    getallAdmindata(): Observable<IBaseSingleResult<any> | undefined> {
        let baseApi = this.configService.settingConfig.baseApi
        let url = baseApi + 'api/admin/getall'
        let option = this.headerService.BuildRequestHeadersNoAuthen()
        return this.http.get(url, { headers: option })
    }
    postCreateAdmindata(list: CreateAdmin): Observable<IBaseSingleResult<any> | undefined> {
        let baseApi = this.configService.settingConfig.baseApi
        let url = baseApi + 'api/admin/create'
        let option = this.headerService.BuildRequestHeadersNoAuthen()
        return this.http.post(url, list, { headers: option })
    }
    postEditAdmindata(list: EditAdmin): Observable<IBaseSingleResult<any> | undefined> {
        let baseApi = this.configService.settingConfig.baseApi
        let url = baseApi + 'api/admin/update'
        let option = this.headerService.BuildRequestHeadersNoAuthen()
        return this.http.post(url, list, { headers: option })
    }
    postDeleteAdmindata(params: any): Observable<IBaseSingleResult<any> | undefined> {
        let baseApi = this.configService.settingConfig.baseApi
        let url = baseApi + 'api/admin/delete'
        let option = this.headerService.BuildRequestHeadersNoAuthen()
        return this.http.post(url, params, { headers: option })
    }
}