import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable()
export class SnackBarUtil {
  constructor(private snackbar: MatSnackBar) {}
  open(message: string, duration: number = 3) {
    this.snackbar.open(message, null, {
      duration: duration * 1000
    });
  }
}
