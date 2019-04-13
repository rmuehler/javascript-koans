describe("About Strings", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should use strings", function() {
      var emptyString = '';
      expect(typeof(emptyString)).toBe('string'); //A mistake? - http://javascript.crockford.com/remedial.html
      expect(emptyString.length).toBe(0);
  });

  it("should slice strings", function() {
    var greeting = "hello, world!";
    expect(greeting.slice(0,1)).toBe('h');
    expect(greeting.slice(1,3)).toBe('el');
    expect(greeting.slice(2,-1)).toBe('llo, world');
    expect(greeting.toUpperCase()).toBe('HELLO, WORLD!');

    var hello = "hello";
    var world = "world";
    expect(hello + world).toBe('helloworld');
  });

  it("should understand string literals", function () {
    var name = "Jane";
    var personalGreeting = `How is your day, ${name}?`;
    var wrongGreeting = "How is your day, ${name}?";

    expect(personalGreeting).toBe('How is your day, Jane?');
    expect(wrongGreeting).toBe('How is your day, ${name}?');
  });
});
