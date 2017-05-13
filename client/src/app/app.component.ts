import { Component } from '@angular/core';
import { ConfigService } from "app/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public name: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.name = this.configService.settings.name;
  }
}
