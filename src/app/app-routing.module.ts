import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './main-screen/articles/articles.component';
import { TextEditorComponent } from './main-screen/articles/text-editor/text-editor.component';
import { EventsComponent } from './main-screen/events/events.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProjectsComponent } from './main-screen/projects/projects.component';
import { RecruitmentComponent } from './main-screen/recruitment/recruitment.component';
import { TeamComponent } from './main-screen/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
    children: [
      { path: '', component: ProjectsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'team', component: TeamComponent },
      { path: 'recruitment', component: RecruitmentComponent },
      { path: 'text-editor', component: TextEditorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
