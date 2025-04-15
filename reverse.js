// reversing a stiring using two pointer
// if input is "hello world" output : dlrow olleh
function reverse(str) {
  a = str.split("");
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    temp = a[left];
    a[left] = a[right];
    a[right] = temp;
  }
  return console.log(b.join(""));
}
reverse("hello world");

// this way we can do it
//reverseStr = str.split(' ').reverse().join(' ');
