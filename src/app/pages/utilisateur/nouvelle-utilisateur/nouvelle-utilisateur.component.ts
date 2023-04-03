import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-utilisateur',
  templateUrl: './nouvelle-utilisateur.component.html',
  styleUrls: ['./nouvelle-utilisateur.component.scss']
})
export class NouvelleUtilisateurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }
}
