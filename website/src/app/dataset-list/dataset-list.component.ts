import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-list',
  template: `
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 database-title">Diabolical Database's Datasets 📚</h1>
          <p class="lead database-title">Contains all the datasets which are obtained and adapted from various websites.</p>
        </div>
      </div>

    <div class="card">
      <div class="card-header">
        All featured databases:
      </div>
      <div class="card-body">
        <h5 class="card-title">Click on the link to be directed to the various datasets</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
