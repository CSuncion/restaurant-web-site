import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor(private settingSerivces: SettingsService) { }

  ngOnInit(): void {
    this.settingSerivces.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    this.settingSerivces.changeTheme(theme);
  }
}
