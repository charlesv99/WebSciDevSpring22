import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-viz2',
  templateUrl: './viz2.component.html',
  styleUrls: ['./viz2.component.css']
})
export class Viz2Component implements OnInit {

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
  private margin = 75;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg(): void {
      this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
      this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.num.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
      // Compute the position of each group on the pie:
      const pie = d3.pie<any>().value((d: any) => Number(d.num));

      // Build the pie chart
      this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

      // Add labels
      const labelLocation = d3.arc()
      .innerRadius(400)
      .outerRadius(this.radius);

      this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.author)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }
}
