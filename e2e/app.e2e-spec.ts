import { WebberPage } from './app.po';

describe('webber App', function() {
  let page: WebberPage;

  beforeEach(() => {
    page = new WebberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
