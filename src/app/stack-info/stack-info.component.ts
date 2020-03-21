import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-info',
  templateUrl: './stack-info.component.html',
  styleUrls: ['./stack-info.component.scss']
})
export class StackInfoComponent implements OnInit {
  technologies = [
    {
      name: 'Nodejs',
      img: 'nodejs.png',
      description: 'Nodejs is an quick-to-write, high throughput server implementation of JavaScript. It\'s non-blocking IO makes it a great choice for speedy apps with heavy input/output (such as chat or REST APIs).'
    },
    {
      name: 'Typescript',
      img: 'typescript.png',
      description: 'Typescript is a tool that enables safer, stricter JavaScript. It takes advantage of compilation like many heavier languages, but benefits from the speedy development of pure JavaScript.'
    },
    {
      name: 'Spring Boot',
      img: 'springboot.png',
      description: 'Spring Boot is the quintessential Java framework that enables rapid development, consistent and maintainable APIs, and high scalability; a great choice for enterprise applications.'
    },
    {
      name: 'Angular',
      img: 'angular.png',
      description: 'Angular is an opinionated, highly-scalable JavaScript framework that shines with large or constantly evolving applications. Backed by Google, this is the most modern, out-of-the-box front-end solution.'
    },
    {
      name: 'React',
      img: 'react.png',
      description: 'React is the brainchild of Facebook and is one of the most widely used front-end libraries available. It is highly compatible with other solutions as it is non-opinionated and allows for fine-grained tuning of front-end solutions.'
    },
    {
      name: 'MongoDB',
      img: 'mongodb.png',
      description: 'MongoDB is the most popular no-sql database in the world, and with good reason: it scales well, performs search and indexing operations well, and has a great query interface.'
    },
    {
      name: 'Elasticsearch',
      img: 'elasticsearch.png',
      description: 'Elasticsearch is an extremely fast and powerful search database; used by companies like Ebay and Uber, it is a proven product for applications like search engines and matching systems.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
