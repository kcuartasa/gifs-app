import { Component } from '@angular/core';
import { Gif } from 'src/app/domain/models/gif/gifs.interface';
import { GifsService } from 'src/app/infraestructure/entry-points/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  constructor(private gifService: GifsService) {

  }

  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }
}
