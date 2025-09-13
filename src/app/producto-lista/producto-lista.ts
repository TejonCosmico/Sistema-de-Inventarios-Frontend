import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.html',
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoService);
  private cdRef = inject(ChangeDetectorRef);
  private enrutador = inject(Router);

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe(
        (datos) => {
          this.productos = datos;
          this.cdRef.detectChanges();
        },
        (error) => {
          console.error("Error al obtener productos", error);
        }
    );
  }

  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (errores) => console.log(errores)
    });
  }
}
