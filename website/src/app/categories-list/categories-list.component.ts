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
        <a class="btn btn-cat btn-dark btn-md" href="/categories#games" role="button">Games 🕹️</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#memes" role="button">Memes 🐸</a>
        <a class="btn btn-cat btn-dark btn-md" href="/categories#science" role="button">Sci and Tech 📱</a>
      </div>

      
        <div class="card-cat card" id="anime">
          <h5 class="card-header">Anime 🎎</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>

        <div class="card-cat card" id="economy">
          <h5 class="card-header">Economy 💰</h5>
          <div class="card-body">
            <h5 class="card-title">Curious about this?</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>

        <div class="card-cat card" id="education">
          <a href="/education"><h5 class="card-header">Education 📚</h5></a>
          <div class="card-body">
            <h5 class="card-title">Check out how the education system differs for each countries</h5>
            <p class="card-text">

            </p>
            <p>

            </p>
          </div>
        </div>

      <div class="card-cat card" id="environment">
        <a href="/environment"><h5 class="card-header">Environment 🌳</h5></a>
        <div class="card-body">
          <h5 class="card-title">Find out how mother nature is coping as the years passed</h5>
          <p class="card-text">
            With the ever increasing world population, there is a need for more resources to support the increasing 
            demand of a larger global population. Moreover, the thrist for progress and advancement depletes Earth's 
            resources at an unprecedented rate. Over the years, humans continue to use up Earth's finite resources and 
            contributes to climate change. Climate change are evident as time progresses, such as the rising of temperature 
            and melting of polar caps leading to an increase in water levels.
          </p>
          <p>
            Therefore, ever wonder how mother nature is coping with the increasing world population? In this section, 
            you can get to know about. What is the current world population now? What are some of the factors contributing to climate changes? Or 
            even the amount of forested area left in the world.
          </p>
        </div>
      </div>

      <div class="card-cat card" id="games">
        <h5 class="card-header">Games 🕹️</h5>
        <div class="card-body">
          <h5 class="card-title">Recommend me a good game to play!</h5>
          <p class="card-text">Steam-Games</p>
          <p class="card-text">Twitch-Games</p>
        </div>
      </div>

      <div class="card-cat card" id="memes">
        <h5 class="card-header">Memes 🐸</h5>
        <div class="card-body">
          <h5 class="card-title">Guarenteed to fill you with sweet sugary goodness</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card-cat card" id="science">
        <h5 class="card-header">Media 📱</h5>
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
