import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(private http: HttpClient) { }

  public host = "http://23.101.22.93/MediTestMobileAPI";
  private url: string = '';

  public GetMyOrdersMapsForPhelboMob(cid: any,date:any) {
    debugger
    return this.http.get<any[]>(this.host + "/Diagnostic/GetMyOrdersMapsForPhelboMob?PhebloID=" + cid+'&Date='+date);
  }

  public GetUserOrdersMapsForPatientApp(userid: any, OrderID: any) {
    debugger
    return this.http.get<any[]>(this.host + "/Diagnostic/GetUserOrdersMapsForPatientApp?UserID=" + userid + '&OrderID=' + OrderID);
  }
}
