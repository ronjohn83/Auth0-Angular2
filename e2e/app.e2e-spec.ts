import { MyAuthAppPage } from './app.po';

describe('my-auth-app App', function() {
  let page: MyAuthAppPage;

  beforeEach(() => {
    page = new MyAuthAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
