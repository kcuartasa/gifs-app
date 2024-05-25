import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/domain/models/gif/gifs.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
