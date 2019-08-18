import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  values: any;
  url='http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }

  getValue(){
    this.http.get(this.url).subscribe(res => {this.values = res; console.log("values", res)}, error =>{ console.log(error)})
  }

}
