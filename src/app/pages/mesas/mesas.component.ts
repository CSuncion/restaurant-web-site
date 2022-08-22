import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/mesa.interface';
import { MesasService } from 'src/app/services/mesas.service';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto.interface';
import Pedidos from 'src/app/models/pedidos.interface';
import { SistemaService } from 'src/app/services/sistema.service';
import { Sistema } from 'src/app/models/sistema.interface';
import { SuperCategoriaCartaService } from 'src/app/services/supercategoriacarta.service';
import { SuperCategoriaCarta } from 'src/app/models/supercategoriacarta.interface';
import { CategoriaCartaService } from 'src/app/services/categoriacarta.service';
import { CategoriaCarta } from 'src/app/models/categoriacarta.interface';
import { GrupoCartaService } from 'src/app/services/grupocarta.service';
import { GrupoCarta } from 'src/app/models/grupocarta.interface';
import { CartaService } from 'src/app/services/carta.service';
import { Carta } from 'src/app/models/carta.interface';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  mesas: Mesa;
  superCategoriaCarta: SuperCategoriaCarta;
  categoriaCarta: CategoriaCarta;
  grupoCarta: GrupoCarta;
  carta: Carta;
  productos: Producto;
  sistemas: Sistema;
  pedidoSeleccionado: Pedidos[] = [];
  pedido: Pedidos;
  isMenus: boolean = false;
  progress: number = 1;
  mesaSel: number = 0;
  isCobrar: boolean = false;
  isAgregarCliente: boolean = false;
  selectTipo: string = "1";
  selectSuperCategoriaCarta: number = 1;
  selectCategoriaCarta: number = 0;
  selectGrupoCarta: number = 0;
  selectCarta: number = 0;

  constructor(private mesasServices: MesasService,
    private productosServices: ProductosService,
    private sistemaServices: SistemaService,
    private superCategoriaCartaService: SuperCategoriaCartaService,
    private categoriaCartaService: CategoriaCartaService,
    private grupoCartaService: GrupoCartaService,
    private cartaService: CartaService) { }

  ngOnInit() {
    this.inicializaPedidosSeleccionado();
    this.listarProductos();
    this.listarSistemasPorNroTablaInMesa();
    this.listarMesasPorTipo(this.selectTipo);
    this.listarSuperCategoriaCarta();
    this.listarCategoriaCarta(this.selectSuperCategoriaCarta);
  }
  inicializaPedidosSeleccionado() {
    this.pedido = {
      IdFam020: 0,
      Codemp: '',
      Codpro: '',
      Nompro: '',
      Marcom: 0,
      Prevta: 0,
      Prevts: 0,
      Estpro: '',
      Codusu: '',
      Fecreg: null,
      Unimed: '',
      Codmon: '',
      Progress: 1,
    }
  }
  listarMesasPorTipo(tipo: string) {
    this.mesasServices.listarMesasPorTipo(tipo)
      .subscribe(mesas => { this.mesas = mesas });
  }

  listarProductos() {
    this.productosServices.listarProductos()
      .subscribe(productos => { this.productos = productos });
  }

  listarSistemasPorNroTablaInMesa() {
    let nroTabla: string = "24";
    this.sistemaServices.listarSistemasPorNroTabla(nroTabla)
      .subscribe(sistemas => { this.sistemas = sistemas });
  }

  listarSuperCategoriaCarta() {
    this.superCategoriaCartaService.listarSuperCategoriaCarta()
      .subscribe(superCategoriaCarta => { this.superCategoriaCarta = superCategoriaCarta });
  }

  listarCategoriaCarta(codSuperCategoriaCarta: number) {
    this.categoriaCartaService.listarCategoriaCarta(codSuperCategoriaCarta)
      .subscribe(categoriaCarta => { this.categoriaCarta = categoriaCarta });
  }

  listarGrupoCarta(codCategoriaCarta: number) {
    this.grupoCartaService.listarGrupoCarta(codCategoriaCarta)
      .subscribe(grupoCarta => { this.grupoCarta = grupoCarta });
  }


  listarCarta(codCategoriaCarta: number, codGrupoCarta: number) {
    this.cartaService.listarCarta(codCategoriaCarta, codGrupoCarta)
      .subscribe(carta => { this.carta = carta });
  }

  productoSeleccionado(carta: Carta) {

    this.pedido.Codpro = carta.CodCarta.toString();
    this.pedido.Nompro = carta.NombreCarta;
    if (!this.pedidoSeleccionado.find(x => x.Codpro === this.pedido.Codpro))
      this.pedidoSeleccionado.push({ ...this.pedido });

    this.pedido.Progress = 1;

  }
  eliminarPedidos(pedido: Pedidos) {
    this.pedidoSeleccionado = this.pedidoSeleccionado.filter(x => x.Codpro !== pedido.Codpro)
  }
  cancelarPedido() {
    this.pedidoSeleccionado = [];
    this.isMenus = false;
  }
  mesaSeleccionado(codMesa: number) {
    this.mesaSel = codMesa;
  }
  mostrarComanda() {
    if (this.mesaSel !== 0)
      this.isMenus = true;

  }
  mostrarCobroCaja() {
    if (this.mesaSel !== 0)
      this.isCobrar = true;

  }
}

