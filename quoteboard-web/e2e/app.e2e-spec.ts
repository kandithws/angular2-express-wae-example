import { QuoteboardWebPage } from './app.po';

describe('quoteboard-web App', () => {
  let page: QuoteboardWebPage;

  beforeEach(() => {
    page = new QuoteboardWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
