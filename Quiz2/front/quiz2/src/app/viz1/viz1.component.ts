import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viz1',
  templateUrl: './viz1.component.html',
  styleUrls: ['./viz1.component.css']
})

export class Viz1Component implements OnInit {
  private data = [];
  private svg: any;
  private margin = 125;
  private width = 1100 - (this.margin * 2);
  private height = 500 - (this.margin * 2);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }
  private countCats(): void {
    this.http.get("http://localhost:3000/mongo").subscribe((data)=> {
      console.log("GET Worked");
      

    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin/2 + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.author))
  .padding(0.2);
  
  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-2,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 30])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.author))
  .attr("y", (d: any) => y(d.num))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) =>  this.height - y(d.num))
  .attr("fill", "#d04a35");
}


}
