import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit{
  errorMsg: Array<string> = [];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
