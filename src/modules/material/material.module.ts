import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
