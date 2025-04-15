//Reversing a string sing two pointer
//if input is "hello world" then output will be "olleh dlrow"

function reverse(str) {
  a = str.split(" ").reverse().join(" ");
  b = a.split("");
  let left = 0;
  let right = b.length - 1;
  while (left < right) {
    temp = b[left];
    b[left] = b[right];
    b[right] = temp;
  }
  return console.log(b.join(""));
}
reverse("hello world");
