import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">All Categories</h1>
        <p class="lead">Content page featuring all the topics that has its data animated into a racing bar graph.</p>
        <hr class="my-4">
        <p>Choose any of the categories below and select the topic that you are interested in.</p>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#anime" role="button">Anime 🎎</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#economy" role="button">Economy 💰</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#education" role="button">Education 📚</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#environment" role="button">Environment 🌳</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#media" role="button">Media 📱</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#memes" role="button">Memes 🐸</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#population" role="button">Population 👨‍👩‍👧‍👦</a>
      </div>

      
        <div class="card" id="anime">
          <h5 class="card-header">Anime 🎎</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>

        <div class="card" id="economy">
          <h5 class="card-header">Economy 💰</h5>
          <div class="card-body">
            <h5 class="card-title">Curious about this?</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>

        <div class="card" id="education">
          <h5 class="card-header">Education 📚</h5>
          <div class="card-body">
            <h5 class="card-title">Check out how the education system differs for each countries</h5>
            <p class="card-text">Primary-Education</p>
          </div>
        </div>

      <div class="card" id="environment">
        <h5 class="card-header">Environment 🌳</h5>
        <div class="card-body">
          <h5 class="card-title">Find out how mother nature is coping as the years passed</h5>
          <p class="card-text">Carbon-Emission</p>
        </div>
      </div>

      <div class="card" id="media">
        <h5 class="card-header">Media 📱</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card" id="memes">
        <h5 class="card-header">Memes 🐸</h5>
        <div class="card-body">
          <h5 class="card-title">Guarenteed to fill you with sweet sugary goodness</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card" id="population">
          <h5 class="card-header">Population 👨‍👩‍👧‍👦</h5>
          <div class="card-body">
            <h5 class="card-title">Will Earth be able to support the ever increasing world population?</h5>
            <p class="card-text">World-Population</p>
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
