import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  values: any;
  url='http://localhost:5000/api/values';
  constructor(private http: HttpClient, ) { }
  @ViewChild('canvas') 
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
    side: number = 0;
    size = 25;
    x = 25;
    y = 25;
  ngOnInit() {
    this.getValue();
    let a=25;
    let b=25;
    for(let i=0;i<10;i++){
     
      this.createHwxagones(a,b);
      console.log("this.x", a);
      a=a+25;
      b=b+25;
    }
    

  }

  getValue(){
    this.http.get(this.url).subscribe(res => {this.values = res; console.log("values", res)}, error =>{ console.log(error)})
  }
  createHwxagones(x,y){

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.beginPath();
    this.ctx.moveTo(x + this.size * Math.cos(0), y + this.size * Math.sin(0));
    for (this.side; this.side < 7; this.side++) {
    this.ctx.lineTo(x + this.size * Math.cos(this.side * 2 * Math.PI / 6), y + this.size * Math.sin(this.side * 2 * Math.PI / 6));
        }

     this.ctx.fillStyle = "#333333";
     this.ctx.fill();
  } 
    
  animate(): void {}
  
 



}
