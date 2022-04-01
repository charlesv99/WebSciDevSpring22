import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Directive, Renderer2, ElementRef} from '@angular/core';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quote='click the button!';
  author='';
  color1='';
  color2='';

  constructor(private http : HttpClient,private renderer: Renderer2,private el: ElementRef) { }

  ngOnInit(): void {
  }

  public cycleQuote() {
    this.http.get<any>('http://localhost:3000/scheme').subscribe(res => {
      this.http.get<any>('http://localhost:3000/generate').subscribe(res2 => {
        this.color1=res.colors[0].hex.value;
        this.el.nativeElement.ownerDocument.body.style.backgroundColor =res.colors[1].hex.value;
        this.quote = res2.text;
        this.author = '-'+res2.author.name;
      })
    })  
  }

}
