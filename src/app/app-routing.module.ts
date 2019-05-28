import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'user/:id', loadChildren: './user/user.module#UserPageModule' },
  { path: 'user-create', loadChildren: './user-create/user-create.module#UserCreatePageModule' },
  { path: 'user-delete/:id', loadChildren: './user-delete/user-delete.module#UserDeletePageModule' },
  { path: 'user-edit/:id', loadChildren: './user-edit/user-edit.module#UserEditPageModule' }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}
