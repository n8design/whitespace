## Whitepace - Regain distraction-free working in SharePoint 

This application customiser removes "Mobile App" and "Teams" information from any Team and communication iste in SharePoint.

![Whitespace Logo](docs/assets/whitespace.jpg)

### ⚠️ Disclaimer ⚠️

This solution uses CSS injection on modern experience pages and hide elements from Communication and Teamsite. The CSS provided by this solution are served via this GitHub page and will be directly injected from the web using the following URL: https://n8design.github.io/whitespace/blacklist.css

This demo extension should not be used under any cerciumstanced in any production enviroment.

### Elements remove by this solution

#### Teams Notification

![Teams notification](docs/assets/teams-notification.png)

#### Mobile App Notification

![Mobile app](docs/assets/mobile-app-notification.png)

#### Mobile App Secondary Footer

![Mobile app](docs/assets/mobile-app-bold-footer.png)


### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
