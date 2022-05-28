import { StocksPipe } from './stocks.pipe';

describe('StocksPipe', () => {
  it('create an instance', () => {
    const pipe = new StocksPipe();
    expect(pipe).toBeTruthy();
  });
});
