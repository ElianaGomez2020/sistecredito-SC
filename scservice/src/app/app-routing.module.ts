import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'vod', loadChildren: () => import('./creditos/vod/vod.module').then(m => m.VodModule) },{ path: 'list', loadChildren: () => import('./creditos/list/list.module').then(m => m.ListModule) }, { path: 'new', loadChildren: () => import('./creditos/new/new.module').then(m => m.NewModule) }, { path: 'details', loadChildren: () => import('./creditos/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./creditos/edit/edit.module').then(m => m.EditModule) }, { path: 'list', loadChildren: () => import('./creditos/vod/vod.module').then(m => m.VodModule) }, { path: 'vod', loadChildren: () => import('./creditos/vod/vod.module').then(m => m.VodModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
