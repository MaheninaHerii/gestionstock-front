import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {

  listCategories: Array<any> = [];
  selectedCatIdToDelete ? = -1;
  errorMsgs = '';

  constructor(
    private router: Router,
    //private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories(): void {
    /*this.categoryService.findAll()
    .subscribe(res => {
      this.listCategories = res;
    });*/
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

  modifierCategory(id?: number): void {
    this.router.navigate(['nouvellecategorie', id]);
  }

  confirmerEtSupprimerCat(): void {
    /*if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete)
      .subscribe(res => {
        this.findAllCategories();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }*/
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }
}
