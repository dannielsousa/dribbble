import { DribbblePage } from './app.po';

describe('dribbble App', () => {
  let page: DribbblePage;

  beforeEach(() => {
    page = new DribbblePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
