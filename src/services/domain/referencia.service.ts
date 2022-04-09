import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ReferenciaDTO } from "../../models/referencia.dto";

@Injectable()
export class ReferenciaService {

    constructor(public http: HttpClient) {

    }

    findReferenciaCodigo() : Observable<ReferenciaDTO> {
        return this.http.get<ReferenciaDTO>(`${API_CONFIG.baseUrl}/referencias`);

    }

}