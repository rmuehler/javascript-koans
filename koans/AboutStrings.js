describe("About Strings", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should manipulate strings", function() {
    var emptyString = '';
    expect(typeof(emptyString)).toBe(FILL_ME_IN); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyString.length).toBe(FILL_ME_IN);

    var greeting = "hello, world!";
    expect(greeting.slice(0,1)).toBe(FILL_ME_IN);
    expect(greeting.slice(1,3)).toBe(FILL_ME_IN);
    expect(greeting.slice(2,-1)).toBe(FILL_ME_IN);
    expect(greeting.toUpperCase()).toBe(FILL_ME_IN);

    var hello = "hello";
    var world = "world";
    expect(hello + world).toBe(FILL_ME_IN);

  });

  it("should understand string literals", function () {
    var name = "Jane";
    var personalGreeting = `How is your day, ${name}?`;
    var wrongGreeting = "How is your day, ${name}?";

    expect(personalGreeting).toBe(FILL_ME_IN);
    expect(wrongGreeting).toBe(FILL_ME_IN);
  });
});
