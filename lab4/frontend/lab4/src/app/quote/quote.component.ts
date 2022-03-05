import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { Directive, Renderer2, ElementRef} from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote='';
  author='';
  color1='';
  color2='';
  constructor(private httpClient: HttpClient, private renderer: Renderer2,private el: ElementRef){

  }
  ngOnInit(): any {
    this.quote = "click the button!";
  }

  getQuote(){
    this.httpClient.get<any>('https://cors-anywhere.herokuapp.com/https://api.fisenko.net/v1/quotes/en/random').subscribe(
      response=>{
        this.quote = response;
        console.log(response);
        this.quote = response.text;
        this.author = '-'+response.author.name;
      }
    );
    this.httpClient.get<any>('https://cors-anywhere.herokuapp.com/http://palett.es/API/v1/palette').subscribe(
      res => {
        this.color1 = res[1];
        this.el.nativeElement.ownerDocument.body.style.backgroundColor=res[3];
      }
    )
  }
}
