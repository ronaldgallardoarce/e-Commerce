import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataService } from './Services/data.service';
import { LocalUser } from './Interfaces/LocalUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Key: string = "SaveAsLocalStorage";

  constructor(private http: HttpClient, private dataService: DataService) {}

  title = 'NuevoEstilo';

  ngOnInit(): void {
    this.evaluteLogged();
  }

  evaluteLogged = async (): Promise<void> => {
    const data: LocalUser = JSON.parse(localStorage.getItem(this.Key) || '{}');
    if (data) {
      // this.dataService.GetClientId(data.Id);
      console.log(data)
      this.dataService.ChargeLocalUser(data);
    } else {
      console.log("usuario no logeado");
    }
  }
}
