import { NirmalksPage } from './app.po';

describe('nirmalks App', function() {
  let page: NirmalksPage;

  beforeEach(() => {
    page = new NirmalksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
