import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule,MatExpansionModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {
  displayedColumns: string[] = ['id', 'name', 'status'];
  gridData = [
    { id: 1, name: 'Item 1', status: 'Active' },
    { id: 2, name: 'Item 2', status: 'Inactive' },
    { id: 3, name: 'Item 3', status: 'Active' },
    { id: 4, name: 'Item 4', status: 'Pending' }
  ];

}
