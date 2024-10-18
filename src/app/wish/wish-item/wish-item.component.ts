import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../../shared/services/EventService';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-wish-item',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishItemComponent {

  @Input() item!: WishItem;
  @Input() wishText!: string;
  @Input() isComplete!: boolean;


  toggle(item : WishItem){
    item.isComplete = !item.isComplete;
  }

  constructor(
    private events: EventService, 
    private route: ActivatedRoute
  ) {}

  removeWish(item : WishItem){    
    this.events.emit('removeWish', item);
  }

}
