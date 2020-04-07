import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './admin/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { TableListComponent } from './admin/table-list/table-list.component';
import { TypographyComponent } from './admin/typography/typography.component';
import { IconsComponent } from './admin/icons/icons.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { UpgradeComponent } from './admin/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { MenuComponent } from './principal/components/menu/menu.component';
import { BannerComponent } from './principal/components/banner/banner.component';
import { CardComponent } from './principal/components/card/card.component';
import { CardCountryComponent } from './principal/components/card-country/card-country.component';
import { FooterComponent } from './principal/components/footer/footer.component';
import { LoginComponent } from './principal/components/login/login.component';
import { NavOptionsComponent } from './principal/components/nav-options/nav-options.component';
import { ProductCardComponent } from './principal/components/product-card/product-card.component';
import { RegistrarComponent } from './principal/components/registrar/registrar.component';
import { SearchComponent } from './principal/components/search/search.component';
import { SearchResultsComponent } from './principal/components/search-results/search-results.component';
import { HomeComponent } from './principal/views/home/home/home.component';
import { ReserveComponent } from './principal/views/reserve/reserve/reserve.component';
import { CalendarComponent } from './principal/views/reserve/calendar/calendar.component';
import { CalendarPlanComponent } from './principal/views/reserve/calendar-plan/calendar-plan.component';

// import { modulePrincipal } from './principal/module.component'
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MenuComponent,
    BannerComponent,
    CardComponent,
    CardCountryComponent,
    FooterComponent,
    LoginComponent,
    NavOptionsComponent,
    ProductCardComponent,
    RegistrarComponent,
    SearchComponent,
    SearchResultsComponent,
    HomeComponent,
    ReserveComponent,
    CalendarComponent,
    CalendarPlanComponent
    // modulePrincipal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
