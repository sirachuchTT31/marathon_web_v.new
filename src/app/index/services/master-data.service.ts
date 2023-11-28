import { Injectable } from "@angular/core";
import { HeaderService } from "./header.service";
import { Observable, of } from "rxjs";
import { IBaseSingleResult } from "../interface/base-result";
import { ConfigurationService } from "./config.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})

export class MasterdataService {
    constructor(private configService: ConfigurationService, private http: HttpClient,
        private headerService: HeaderService,) {
    }
    getallAdmindata(): Observable<IBaseSingleResult<any> | undefined> {
        let baseApi = this.configService.settingConfig.baseApi
        let url = baseApi + 'api/admin/getall'
        let option = this.headerService.BuildRequestHeadersNoAuthen()
        return this.http.get(url, { headers: option })
    }
}