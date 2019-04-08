import { TransformAppPage } from './app.po';

describe('transform-app App', () => {
  let page: TransformAppPage;

  beforeEach(() => {
    page = new TransformAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
