import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credito, CreditoService } from '../../services/credit.service';

@Component({
  selector: 'app-credito-table',
  templateUrl: './credito-table.component.html',
  styleUrls: ['./credito-table.component.scss'],
  standalone: false,
})
export class CreditoTableComponent implements OnInit {
  creditos: Credito[] = [];
  displayedColumns = [
    'numeroCredito', 'numeroNfse', 'dataConstituicao', 'valorIssqn', 'detalhes'
  ];

  constructor(private creditoService: CreditoService, private router: Router) { }

  ngOnInit(): void {
    this.creditoService.getAll().subscribe(data => {
      this.creditos = data;
    });
  }

  verDetalhes(id: number) {
    this.router.navigate(['/creditos', id]);
  }
}
