import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WishComponent } from './wish/wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WishItemComponent } from './wish/wish-item/wish-item.component';

export const routes: Routes = [
    {path:'', component: WishComponent},
    {path:'wishlist', component: WishComponent},
    {path:'wishlist/:wishText', component: WishItemComponent},
    {path: 'contact', component: ContactComponent},
    {path:'**', component: NotFoundComponent}
];
