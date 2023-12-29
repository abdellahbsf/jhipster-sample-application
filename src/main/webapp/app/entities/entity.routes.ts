import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    data: { pageTitle: 'jhipsterSampleApplicationApp.a.home.title' },
    loadChildren: () => import('./a/a.routes'),
  },
  {
    path: 'b',
    data: { pageTitle: 'jhipsterSampleApplicationApp.b.home.title' },
    loadChildren: () => import('./b/b.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
