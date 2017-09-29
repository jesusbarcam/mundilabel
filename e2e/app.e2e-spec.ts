import { MundilabelPage } from './app.po';

describe('mundilabel App', function() {
  let page: MundilabelPage;

  beforeEach(() => {
    page = new MundilabelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
