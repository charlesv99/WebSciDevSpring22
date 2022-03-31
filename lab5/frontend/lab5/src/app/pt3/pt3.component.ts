import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pt3',
  templateUrl: './pt3.component.html',
  styleUrls: ['./pt3.component.css']
})
export class Pt3Component implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public get(num : string) {
    var url = "http://localhost:3000/db";
    if(num!="")
      url+="/"+num;
    this.http.get(url).subscribe((data)=> {
      console.log("GET Worked");

    });
  }

  public put(num : string, txt : string) {
    var url = "http://localhost:3000/db";
    var text = JSON.parse(txt);
    text["_id"] =num;
    this.http.put(url+'/'+num, text, {observe: 'response'}).subscribe(res => {
      if(res["status"]==200) {
        console.log("PUT Worked");
      }else {
        console.log("PUT Failed1");
      }
    }, err => {
        console.log("PUT Failed");
    });
  }

  public post(num : string, txt : string){
    var url = "http://localhost:3000/db";
    var text = JSON.parse(txt);
    text["_id"] =num;
    this.http.post(url,text).subscribe((res)=> {
      console.log("POST Worked");
    })
  }

  public delete(num : string) {
    console.log("DELETE called");
    var url = "http://localhost:3000/db/"+num;
    this.http.delete(url).subscribe((data)=> {
      console.log("DELETE Worked");
    });
  }
}
