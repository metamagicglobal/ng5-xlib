import { Ng5XlibDemoPage } from './app.po';

describe('ng5-xlib-demo App', () => {
  let page: Ng5XlibDemoPage;

  beforeEach(() => {
    page = new Ng5XlibDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
