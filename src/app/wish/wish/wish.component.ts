import { Component } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { WishListComponent } from '../wish-list/wish-list.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../wish-filter/wish-filter.component';
import { WishService } from '../wish.service';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [ WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
  providers: [WishService]
})
export class WishComponent {

  items: WishItem[]=[];

  filter: any = () => {};

  constructor(events: EventService, private wishService: WishService){
    events.listen('removeWish', (wish: any) => {
      this.items.splice(this.items.indexOf(wish), 1);
      // console.log(wish);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any)=>{
        for (let i = 0; i < data.length; i++) {
          this.items.push({
            wishText: data[i].title,
            isComplete: data[i].completed
          });
        }
      },
      (err: any) =>{
        alert(err.message);
      }
    );
  }

  getWishesFromLocalFile(){
    this.wishService.getLocalWishes().subscribe(
      (data: any)=>{
        this.items = data;  
      },
      (err: any) =>{
        alert(err.message);
      }
    );
  }

}
