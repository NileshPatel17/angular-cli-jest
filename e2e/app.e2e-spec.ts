import { NgTest1Page } from './app.po';

describe('ng-test1 App', () => {
  let page: NgTest1Page;

  beforeEach(() => {
    page = new NgTest1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
