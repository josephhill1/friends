import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule],
  declarations: [],
  exports: [MatCardModule, MatToolbarModule, MatButtonModule],
})
export class MaterialModule {}
