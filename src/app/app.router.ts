import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ServicesComponent } from './services/services.component';

import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';

import { TestComponent } from './test/test.component';


export const router: Routes = [
     { path: '', component: HomeComponent },

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'test', component: TestComponent }



];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
