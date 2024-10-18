import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';
import { WishItemComponent } from "../wish-item/wish-item.component";



@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
    WishItemComponent,
    RouterOutlet, 
    RouterLinkActive,
    RouterLink
   ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
  providers: []
})
export class WishListComponent {

  @Input() items: WishItem[] = [];

}
