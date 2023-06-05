import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './dashboard/components/chart/chart.component';
import { StockInfoComponent } from './dashboard/components/stock-info/stock-info.component';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from './dashboard/components/drawer/drawer.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    ChartComponent,
    StockInfoComponent,
    DrawerComponent,
    FavoritesComponent,
    UserPreviewComponent,
    CustomSearchComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
