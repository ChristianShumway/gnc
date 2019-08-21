import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from './../services/productos.service';

@Component({
  selector: 'app-slide-productos',
  templateUrl: './slide-productos.component.html',
  styleUrls: ['./slide-productos.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SlideProductosComponent implements OnInit {
  tipoProducto: string;
  productos: any[];
  images: any = [];
  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(
    config: NgbCarouselConfig,
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 2500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.tipoProducto = this.activatedRoute.snapshot.params.pid;
    console.log(this.tipoProducto);
    this.productos = this.slideProductos();
    console.log(this.productos);
    this.productos.map( producto => {
      if (producto.tipo === this.tipoProducto) {
        this.images.push(producto.imagen);
      }
    });
    console.log(this.images);
  }

  slideProductos() {
    return this.productosService.getProductos();
  }

}
