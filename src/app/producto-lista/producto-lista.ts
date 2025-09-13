import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';


@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.html',
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoService);
  private cdRef = inject(ChangeDetectorRef);

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
}
