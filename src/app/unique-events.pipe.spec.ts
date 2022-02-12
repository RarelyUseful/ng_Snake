import { UniqueEventsPipe } from './unique-events.pipe';

describe('UniqueEventsPipe', () => {
  it('create an instance', () => {
    const pipe = new UniqueEventsPipe();
    expect(pipe).toBeTruthy();
  });
});
