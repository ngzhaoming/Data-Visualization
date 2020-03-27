import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="container">
      <div class="row">
          <div class="col half text-center" style="margin-top: 180px;">
            <h1 style="font-family: Georgia, 'Times New Roman', Times, serif">Welcome to</h1>
            <h1 style="font-family: Georgia, 'Times New Roman', Times, serif">Diabolical Database!</h1>
            <br>
            <h5 style="font-family: Georgia, 'Times New Roman', Times, serif">📊 Animated Bar Graphs</h5>
            <h5 style="font-family: Georgia, 'Times New Roman', Times, serif">🔢 Assorted Categories</h5>
            <h5 style="font-family: Georgia, 'Times New Roman', Times, serif">📁 Available Datasets</h5>
          </div>
          <div class="col half" style="margin-top: 100px;">
            <div class="flourish-embed flourish-bar-chart-race" data-src="visualisation/1635022">
              <iframe src='https://public.flourish.studio/visualisation/1635022/embed' frameborder='0' scrolling='no' style='width:100%;height:400px;'></iframe> 
            </div>
          </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
