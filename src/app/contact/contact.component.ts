import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://facebook.com/obed.jonathan.3',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/objlynks',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/objlynks/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/obed-jonathan',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/objlynks',
        iconUrl: './assets/icons/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://hackerrank.com/ritwickdey',
        iconUrl: './assets/icons/hackerrank.svg'
      },
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/story/ritwickdey',
        iconUrl: './assets/icons/stackoverflow.svg'
      },
      {
        name: 'Pluralsight',
        url: 'https://www.pluralsight.com/profile/ritwickdey',
        iconUrl: './assets/icons/pluralsight.svg'
      }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:obedjonathan26@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: 'https://marketplace.visualstudio.com/publishers/ritwickdey',
    iconUrl: './assets/icons/vscode.svg'
  };
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
