import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-viz1',
  templateUrl: './viz1.component.html',
  styleUrls: ['./viz1.component.css']
})
export class Viz1Component implements OnInit {
  private data = [
    {
        "author": "Michael Sinz",
        "num": 8
    },
    {
        "author": "Douglas Adams",
        "num": 4
    },
    {
        "author": "Sam Ewing",
        "num": 6
    },
    {
        "author": "James O. Coplien",
        "num": 3
    },
    {
        "author": "Jon Ribbens",
        "num": 7
    },
    {
        "author": "Hofstadter\u2019s Law",
        "num": 8
    },
    {
        "author": "E. W. Dijkstra",
        "num": 17
    },
    {
        "author": "Phil Karlton",
        "num": 6
    },
    {
        "author": "Bjarne Stroustrup",
        "num": 15
    },
    {
        "author": "Jeremy S. Anderson",
        "num": 3
    },
    {
        "author": "Fred Brooks",
        "num": 6
    },
    {
        "author": "Jamie Zawinski",
        "num": 7
    },
    {
        "author": "Mark Gibbs",
        "num": 4
    },
    {
        "author": "Rick Osborne",
        "num": 4
    },
    {
        "author": "N.J. Rubenking",
        "num": 5
    },
    {
        "author": "Gavin Russell Baker",
        "num": 6
    },
    {
        "author": "Donald Knuth",
        "num": 8
    },
    {
        "author": "Keith Bostic",
        "num": 5
    },
    {
        "author": "Alan Kay",
        "num": 4
    },
    {
        "author": "Rich Cook",
        "num": 11
    },
    {
        "author": "Edward V Berard",
        "num": 8
    },
    {
        "author": "Richard Moore",
        "num": 4
    },
    {
        "author": "Tom Van Vleck",
        "num": 7
    },
    {
        "author": "Charles Babbage",
        "num": 4
    },
    {
        "author": "Bill Sempf",
        "num": 2
    },
    {
        "author": "Albert Einstein",
        "num": 5
    },
    {
        "author": "Stephen Hawking",
        "num": 9
    },
    {
        "author": "C. A. R. Hoare",
        "num": 3
    },
    {
        "author": "Francois de La Rochefoucauld",
        "num": 3
    },
    {
        "author": "Abraham Lincoln",
        "num": 7
    },
    {
        "author": "Voltaire",
        "num": 3
    },
    {
        "author": "Buddha",
        "num": 4
    },
    {
        "author": "Winston Churchill",
        "num": 5
    },
    {
        "author": "Benjamin Franklin",
        "num": 6
    },
    {
        "author": "Napoleon Bonaparte",
        "num": 4
    },
    {
        "author": "Richard Bach",
        "num": 7
    },
    {
        "author": "John D. Rockefeller",
        "num": 2
    },
    {
        "author": "Aristotle",
        "num": 5
    },
    {
        "author": "Ralph Waldo Emerson",
        "num": 4
    },
    {
        "author": "Epictetus",
        "num": 3
    },
    {
        "author": "Marcus Aurelius",
        "num": 3
    },
    {
        "author": "Bruce Lee",
        "num": 3
    },
    {
        "author": "Plato",
        "num": 3
    },
    {
        "author": "Dale Carnegie",
        "num": 2
    },
    {
        "author": "Confucius",
        "num": 5
    },
    {
        "author": "Leonardo da Vinci",
        "num": 2
    },
    {
        "author": "Pythagoras",
        "num": 4
    },
    {
        "author": "Thomas Jefferson",
        "num": 6
    },
    {
        "author": "Dalai Lama",
        "num": 6
    },
    {
        "author": "Dick Brandon",
        "num": 4
    },
    {
        "author": "Henry Petroski",
        "num": 6
    },
    {
        "author": "Unknown",
        "num": 6
    },
    {
        "author": "Bill Gates",
        "num": 3
    },
    {
        "author": "Brian Kernighan",
        "num": 3
    },
    {
        "author": "Ovidiu Platon",
        "num": 4
    },
    {
        "author": "Yogi Berra",
        "num": 4
    },
    {
        "author": "Larry DeLuca",
        "num": 3
    },
    {
        "author": "Oscar Wilde",
        "num": 5
    },
    {
        "author": "Mark Twain",
        "num": 5
    },
    {
        "author": "Immanuel Kant",
        "num": 3
    },
    {
        "author": "William Shakespeare",
        "num": 3
    },
    {
        "author": "Mitch Ratcliffe",
        "num": 3
    },
    {
        "author": "Mahatma Gandhi",
        "num": 2
    },
    {
        "author": "Bernard Shaw",
        "num": 4
    },
    {
        "author": "Robert Sewell",
        "num": 2
    },
    {
        "author": "Ralph Marston",
        "num": 2
    }
  ];
  private svg: any;
  private margin = 125;
  private width = 1100 - (this.margin * 2);
  private height = 500 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
    // Comment out the line above and uncomment the line below when you're
    // ready to try fetching JSON from a REST API endpoint.
    // Comment out the private data [] above too.
    // d3.json('https://api.jsonbin.io/b/5eee6a5397cb753b4d149343').then((data: any) => this.drawBars(data));
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
