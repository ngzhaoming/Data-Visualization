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
              <iframe src='https://public.flourish.studio/visualisation/1635022/embed' frameborder='0' scrolling='no' style='width:100%;height:400px;'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/1635022/?utm_source=embed&utm_campaign=visualisation/1635022' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
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
