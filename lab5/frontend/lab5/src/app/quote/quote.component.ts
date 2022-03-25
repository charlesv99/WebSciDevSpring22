import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http : HttpClient,private renderer: Renderer2,private el: ElementRef) { }

  ngOnInit(): void {
    this.quote = "click the button!";
  }

  cycleQuote() {
    this.http.get<any>('/scheme').subscribe(res => {
      this.color1=res.colors[0].hex.value;
      this.el.nativeElement.ownerDocument.body.style.backgroundColor=res.colors[1].hex.value;
    })
    this.http.get<any>('/generate').subscribe(res2 => {
      this.quote = res2.text;
      this.author = '-'+res2.author.name;

    })
  }
}
