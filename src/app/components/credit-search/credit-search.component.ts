import { Component } from '@angular/core';
import { Credito, CreditoService } from '../../services/credit.service';

@Component({
  selector: 'app-credit-search',
  templateUrl: './credit-search.component.html',
  styleUrls: ['./credit-search.component.scss'],
  standalone: false,
})
export class CreditSearchComponent {
  numeroNfse: string = '';
  numeroCredito: string = '';
  creditos: Credito[] = [];
  erro: string = '';

  constructor(private creditoService: CreditoService) { }

  buscarPorNumeroNfse() {
    this.erro = '';
    this.creditoService.getByNumeroNfse(this.numeroNfse).subscribe({
      next: (data) => this.creditos = data,
      error: () => this.erro = 'NFS-e não encontrada.'
    });
  }
}
