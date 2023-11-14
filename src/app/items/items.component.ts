import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja adicionar o item ao carrinho?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Adicionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho!", "", "info");
      }
    });
  }
}
