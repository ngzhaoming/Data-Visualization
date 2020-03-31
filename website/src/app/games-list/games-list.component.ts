import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  template: `
    <div class="container">

      <h1 class="display-3" style="font-family: Georgia, 'Times New Roman', Times, serif">Fun and Games</h1>

      <div class="accordion accordion-page" id="accordionExample">

        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseThree">
                Current Account Balance (BoP, current US$)
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <iframe src='https://public.flourish.studio/visualisation/1708617/embed' frameborder='0' scrolling='no' style='width:100%;height:600px;'></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class GamesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
