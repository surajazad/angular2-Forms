import {Component} from 'angular2/core'
import {WelcomeComponent} from './home/welcome.component'
@Component({
    selector:'pm-app',
    template:`<div><h1>Angular 2 Application</h1>
                  <welcome-app></welcome-app>
                  </div>`,
     directives:[WelcomeComponent]

})

export class AppComponent{


}