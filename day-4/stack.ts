type PushFunction = (a: any) => void;

interface MyStackInterface {
  data: Array<any>;
  push: PushFunction;
  pop: (a: any) => any;
}

// We can use interfaces with objects
// Doesnt work but matches the interface
const BadStack: MyStackInterface = {
  data: [],
  push: (item) => null,
  pop: (item) => null,
};

// We can implement interfaces on classes
// Matches the interface and works
class MyStack implements MyStackInterface {
  data: Array<any>;

  constructor() {}

  push(item) {
    this.data.push(item);
  }

  pop(item) {
    return this.data.pop;
  }

  size() {
    return this.data.length;
  }
}

const stack = new MyStack();