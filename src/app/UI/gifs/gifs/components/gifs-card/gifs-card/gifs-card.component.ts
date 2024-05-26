import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/domain/models/gif/gifs.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.scss']
})
export class GifsCardComponent implements OnInit{
  
  @Input()
  public gif!: Gif;
  
  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
  }
}
