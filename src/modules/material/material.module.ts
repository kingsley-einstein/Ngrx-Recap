import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatTableModule, 
  MatInputModule, 
  MatTabsModule, 
  MatCardModule, 
  MatSnackBarModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatToolbarModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule {}
