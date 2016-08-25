import { PagesListComponent } from './pages-list/pages-list.component';
import { PageFormComponent } from './page-form/page-form.component';
import { PageViewComponent } from './page-view/page-view.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { LoggedInGuard } from './guard/logged-in';
import { LoggedOutGuard } from './guard/logged-out';
import { provideRouter, RouterConfig } from '@angular/router';
import { UserService } from './user.service';

const routes: RouterConfig = [
    { path: 'list', component: PagesListComponent, },
    { path: 'new', component: PageFormComponent, canActivate: [LoggedInGuard] },
    { path: 'page/:id', component: PageViewComponent },
    { path: 'login', component: AppLoginComponent, canActivate: [LoggedOutGuard] },
    { path: '', redirectTo: '/list', pathMatch: 'full',  },
];

export const appRouterProviders = [
    provideRouter(routes),
    LoggedInGuard,
    LoggedOutGuard,
    UserService
];