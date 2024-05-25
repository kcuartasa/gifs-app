import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/infraestructure/entry-points/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) { };

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    console.log(newTag);
    
    
  }
}
