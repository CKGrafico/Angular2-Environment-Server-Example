import { Component } from '@angular/core';
import { ConfigService } from "app/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    console.log(this.configService.get());
  }
}
