import { Angular2BugTestingPage } from './app.po';

describe('angular2-bug-testing App', () => {
  let page: Angular2BugTestingPage;

  beforeEach(() => {
    page = new Angular2BugTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
