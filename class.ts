class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails() {
    console.log("hello", this.name + "I am " + this.age + "old");
  }
}
const obj = new person("asmita", 24);
obj.getDetails;
