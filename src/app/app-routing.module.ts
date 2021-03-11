import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs-page/tabs-page.module').then( m => m.TabsPagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ereport',
    loadChildren: () => import('./ereport/ereport.module').then( m => m.EreportPageModule)
  },
  {
    path: 'statement',
    loadChildren: () => import('./statement/statement.module').then( m => m.StatementPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'sub-register',
    loadChildren: () => import('./sub-register/sub-register.module').then( m => m.SubRegisterPageModule)
  },
  {
    path: 'sub-verify',
    loadChildren: () => import('./sub-verify/sub-verify.module').then( m => m.SubVerifyPageModule)
  },
  {
    path: 'evaluation-subject/:id',
    loadChildren: () => import('./evaluation-subject/evaluation-subject.module').then( m => m.EvaluationSubjectPageModule)
  },
  {
    path: 'evaluation-lecturer/:id/:lecturerid',
    loadChildren: () => import('./evaluation-lecturer/evaluation-lecturer.module').then( m => m.EvaluationLecturerPageModule)
  },
  {
    path: 'sem-result',
    loadChildren: () => import('./sem-result/sem-result.module').then( m => m.SemResultPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'view-report',
    loadChildren: () => import('./view-report/view-report.module').then( m => m.ViewReportPageModule)
  },
  {
    path: 'edit-report/:id',
    loadChildren: () => import('./edit-report/edit-report.module').then( m => m.EditReportPageModule)
  },
  {
    path: 'exam-slip',
    loadChildren: () => import('./exam-slip/exam-slip.module').then( m => m.ExamSlipPageModule)
  },
  {
    path: 'login-issue',
    loadChildren: () => import('./login-issue/login-issue.module').then( m => m.LoginIssuePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
