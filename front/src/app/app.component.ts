import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dream';
  posts: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(url).subscribe((data: any) => {
      // console.log(data);
      this.posts = data;
    });
  }
}
