let props = {
  name: "Max Mustermann",
  age: 29,
  occupation: "Software Developer",
};

let { name, age } = props;

console.log(name);
Button(props);

function Button({ name, age }) {}
