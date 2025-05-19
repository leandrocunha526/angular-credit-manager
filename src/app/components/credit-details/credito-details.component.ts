import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credito, CreditoService } from '../../services/credit.service';

@Component({
  selector: 'app-credito-details',
  templateUrl: './credito-details.component.html',
  styleUrls: ['./credito-details.component.scss'],
  standalone: false,
})
export class CreditoDetailsComponent implements OnInit {

  credito?: Credito;

  constructor(
    private route: ActivatedRoute,
    private creditoService: CreditoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.creditoService.getById(+id).subscribe(credito => {
        this.credito = credito;
      });
    }
  }

}
