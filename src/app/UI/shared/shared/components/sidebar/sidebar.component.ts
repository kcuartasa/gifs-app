import { Component } from '@angular/core';
import { GifsService } from 'src/app/infraestructure/entry-points/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent { 

  constructor(private gifService: GifsService) { }

  get tags(): string [] {
    return this.gifService.tagHistory;
  }

  searchTag(tag: string) : void {
    return this.gifService.searchTag(tag);
  }

}
