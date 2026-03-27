import { Component } from "@angular/core";
import { CurrencyPipe} from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe, RouterOutlet],
  templateUrl: './app.html', 
  styleUrls: ['./app.css']
})
export class App {

    perifericos = [
        { nome: "Teclado Mecânico", descricao: "RGB com switches azuis", preco: 250.00 },
        { nome: "Mouse Gamer", descricao: "1600 DPI e 6 botões", preco: 120.50 },
        { nome: "Monitor 144hz", descricao: "24 polegadas Full HD", preco: 1100.00 },
        { nome: "Headset 7.1", descricao: "Som surround e microfone", preco: 350.00 }
    ];

    comprar(nomeProduto: string) {
        alert("Comprou: " + nomeProduto);
    }
}