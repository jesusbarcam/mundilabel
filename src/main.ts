import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MundilabelModule } from './app/mundilabel.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}// If

platformBrowserDynamic()
.bootstrapModule( MundilabelModule )
.catch(err => console.log(err));
