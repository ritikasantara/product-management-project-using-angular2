import { PmAngular2Page } from './app.po';

describe('pm-angular2 App', () => {
  let page: PmAngular2Page;

  beforeEach(() => {
    page = new PmAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
