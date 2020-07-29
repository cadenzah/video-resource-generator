describe('Practice', () => {
  it('Scenario #1', () => {
    const num: number = 1;
    expect(num).toBe(1);
  })

  it('Scenario #2', () => {
    let str: string = "Hello World!";
    str = "Hi, World!";
    expect(str).toBe("Hi, World!");
  })
})
