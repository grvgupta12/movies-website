import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { NumberProblemComponent } from './number-problem/number-problem.component';

const routes: Routes = [
  { path: '', redirectTo: '/bookMovies', pathMatch: 'full' },
  { path: 'bookMovies', component: MovieHomeComponent },
  { path: 'numberProblem', component: NumberProblemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
