import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatInputModule, MatTabsModule, MatCardModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
