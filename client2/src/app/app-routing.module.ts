//Angular modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//user modules

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { DonationsComponent } from './components/donations/donations.component';
import { MoneyComponent } from './components/donations/money/money.component';
import { FoodComponent } from './components/donations/food/food.component';
import { ClothesComponent } from './components/donations/clothes/clothes.component';
import { BooksComponent } from './components/donations/books/books.component';
import { ElectronicsComponent } from './components/donations/electronics/electronics.component';
import { OthersComponent } from './components/donations/others/others.component';
import { FormComponent } from './donations/form/form.component';
import { MovementsComponent } from './movements/movements.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DevelopersComponent } from './components/developers/developers.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'developers',
        component: DevelopersComponent,
        // canActivate: [NotAuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: 'donations',
        component: DonationsComponent,
        // canActivate: [NotAuthGuard]
    },
    {
        path: 'movements',
        component: MovementsComponent,
        canActivate: [NotAuthGuard]

    },
    {
        path: 'volunteer',
        component: VolunteerComponent,
        // canActivate: [NotAuthGuard]

    },
    {
        path: 'donations/form',
        component: FormComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/money',
        component: MoneyComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/food',
        component: FoodComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/cloth',
        component: ClothesComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/books',
        component: BooksComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/electronics',
        component: ElectronicsComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'donations/others',
        component: OthersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'donations/form',
        component: FormComponent,
        canActivate: [AuthGuard]


    },


    {
        path: '*',
        component: HomeComponent
    }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
