//Reversing a string sing two pointer
//if input is "hello world" then output will be "olleh dlrow"

function reverse(str) {
  a = str.split(" ").reverse().join(" ");
  b = a.split("");
  console.log(b);
  let left = 0,
    right = b.length - 1;
  while (left < right) {
    temp = b[left];
    b[left] = b[right];
    b[right] = temp;
    left++;
    right--;
  }
  return console.log("Reversing a string using two pointer " + b.join(""));
}
reverse("hello world");
