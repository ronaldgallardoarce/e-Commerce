import { Component, OnInit } from '@angular/core';
import { TallaService } from 'src/app/Services/talla.service';

@Component({
  selector: 'app-talla-insertar',
  templateUrl: './talla-insertar.component.html',
  styleUrls: ['./talla-insertar.component.css']
})
export class TallaInsertarComponent implements OnInit {
  constructor(private tallaSvs: TallaService) { }
  ngOnInit(): void {
  }

 /* showModal = false;
  nombre = '';
  stock = 0;
  successMessage = '';
  
  constructor(private tallaSvs: TallaService) { }
  openModal() {
    this.showModal = true;
  }
  ngOnInit(): void {
  }

  closeModal() {
    this.showModal = false;
    this.successMessage = ''; // Clear success message when closing modal
  }
  onSubmit() {
    // Call the postTalla service method to insert data
    this.tallaSvs.postTalla(this.nombre, this.stock).subscribe(
      response => {
        // Show success message
        this.successMessage = 'Talla insertada correctamente.';
        // Close modal after 2 seconds
        setTimeout(() => this.closeModal(), 2000);
      },
      error => {
        // Handle error if insertion fails
        console.error(error);
        this.successMessage = 'Error al insertar la talla.';
      }
    );
  
 }*/
}
