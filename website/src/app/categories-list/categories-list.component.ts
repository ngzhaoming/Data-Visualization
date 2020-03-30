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
        <a class="btn btn-cat btn-dark btn-md" href="/categories#games" role="button">Fun and Games 🕹️</a> 
        <a class="btn btn-cat btn-dark btn-md" href="/categories#science" role="button">Sci and Tech 📱</a>
      </div>

      
        <div class="card-cat card" id="anime">
          <a href="/anime"><h5 class="card-header">Anime 🎎</h5></a>
          <div class="card-body">
            <h5 class="card-title">Discover the most anticipated and sought after anime!</h5>
            <p class="card-text">
              Anime as defined on the Internet is a hand-drawn and computer animation originating from
              or associated with Japan. The word anime is the Japanese term for animation, which means all forms 
              of animated media. These animes usually consists of different variations of genres each with a unique 
              storyline which keeps viewers captivated. Anime graphics has evolved over the times with improved graphics
              and technology to design and create better quality art. Today it has been appreciated by many people both 
              young and old alike.
            </p>
            <p>
              Stuck at home feeling bored and not sure what to do? Well find out what is the best anime based on the 
              different genre which suits your taste! We will show you the best sought after anime for each category which will
              satisfy your binge-watching cravings! What are you waiting for? Come and check out all these latest trends about 
              anime today.
            </p>
          </div>
        </div>

        <div class="card-cat card" id="economy">
        <a href="/economy"><h5 class="card-header">Economy 💰</h5></a>
          <div class="card-body">
            <h5 class="card-title">Curious about the economic progression of each country?</h5>
            <p class="card-text">
              A country's growth and development is largely reliant on their strong work force. A good work force 
              is able to use resources more effectively and in turn leads to better progression in the country's economy.
              This resulted in the classification of countries: less developed, developing and developed countries. 
              Nonetheless, it is worthy to note that there are other factors which can affect the economy of a 
              country. This includes, war, deregulation in the financial industry, epidemic/pandemic, etc.
            </p>
            <p>
              Wonder the reason why some countries are able to perform better than other countries?
              Check out the education section in the database to learn about the association between 
              education and labour force. Having a strong labour force can in turn lead to better 
              economic growth to the country.
            </p>
          </div>
        </div>

        <div class="card-cat card" id="education">
          <a href="/education"><h5 class="card-header">Education 📚</h5></a>
          <div class="card-body">
            <h5 class="card-title">Check out how the education system differs for each countries</h5>
            <p class="card-text">
              There are three different categories to classify countries, less developed countries, developing
              countries and developed countries. The most noticable difference between countries from each 
              category is their education system, labour force and lifestyle of their population.
            </p>
            <p>
              As we all know, there is a positive association between adult literacy rate and the number
              of working adults in the workforce. Hence, developed countries with their good education 
              systems are able to provide quality education to their people. This in turn leads to a stronger
              workforce which can help to strengthen their economy. Curious about how the labour force can 
              help improve a country's economy? Do take time to review the topics presented in the Economy
              section to learn about each country's GDP.
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
        <a href="/games"><h5 class="card-header">Fun and Games 🕹️</h5></a>
        <div class="card-body">
          <h5 class="card-title">Recommend me a good game to play!</h5>
          <p class="card-text">
            Games, everyone loves games! Mobile and computer games are filled with mystery and entertainment. Being stuck at home with nothing to 
            do? Well, just grab on to a gaming console and start playing some games to free up your boredom. However, with the ever increasing number
            of games that are made available on the Internet, you might be wondering what are the top games to play? What are some games which 
            is worth your time playing for?  
          </p>
          <p>
            We will also throw in a 2-in-1 for this category! Being a fun and games topic, check out what are the coolest memes in town! Also, 
            come find out more about the most frequently used emoji since the birth of emoji into our keyboards. Excited? Come check out this category
            to learn more about the memes, games and emojis that you encounter in your daily lives.
          </p>
        </div>
      </div>

      <div class="card-cat card" id="science">
        <a href="/science"><h5 class="card-header">Sci and Tech 📱</h5></a>
        <div class="card-body">
          <h5 class="card-title">Everything we do is for SCIENCE!</h5>
          <p class="card-text">
            You might be wondering what is the main driving force for progress in today's world? Yes, the rapid advancement of Science and 
            Technology has allowed mankind to make unprecedented progress and advancement. Over the years, countries have been pouring in resources for 
            research and development in an attempt ot make a breakthrough. But as we all know, the progress of a country is effectively limited 
            to the amount of resources and knowledge that it can expend on. Hence, this resulted in various degree of advancement in various countries.
          </p>
          <p>
            Click on this category to find out more about how each country compete with each other based on technological advancement. 
            Learn why some countries are more well off than others. Besides that, learn more about the giant technological companies and their customer-base.
            How many people are choosing Apple iphone over Samsung Android phones? What about Windows, MAC or Linux systems? All the latest trends with regards 
            to technology can be found here!
          </p>
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
