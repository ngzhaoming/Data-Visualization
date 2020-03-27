import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Categories</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-dark btn-md" href="#" role="button">Anime</a>
      </div>

      
      <div class="card">
        <h5 class="card-header">Anime 🎎</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Economy 💰</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Memes 🐸</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>


  `,
  styles: []
})
export class CategoriesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
