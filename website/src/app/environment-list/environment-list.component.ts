import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment-list',
  template: `
    <div class="container">

      <h1 class="display-3" style="font-family: Georgia, 'Times New Roman', Times, serif">Environment</h1>
    
      <div class="accordion accordion-page" id="accordionExample">

        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Carbon Emission (kt)
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <iframe src='https://public.flourish.studio/visualisation/1700769/embed' frameborder='0' scrolling='no' style='width:100%;height:600px;'></iframe>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Forested Area (sq. km)
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <iframe src='https://public.flourish.studio/visualisation/1700452/embed' frameborder='0' scrolling='no' style='width:100%;height:600px;'></iframe>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                World Population
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            <iframe src='https://public.flourish.studio/visualisation/1701411/embed' frameborder='0' scrolling='no' style='width:100%;height:600px;'></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class EnvironmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
