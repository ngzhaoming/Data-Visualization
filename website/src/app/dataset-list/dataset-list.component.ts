import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-list',
  template: `
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 database-title">Diabolical Database's Datasets 📚</h1>
          <p class="lead database-title">Contains all the datasets which are obtained and adapted from</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DatasetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
