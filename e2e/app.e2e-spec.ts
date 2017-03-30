import { MoyorskPage } from './app.po';

describe('moyorsk App', () => {
  let page: MoyorskPage;

  beforeEach(() => {
    page = new MoyorskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
