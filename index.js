const onEvent = (e) => disp(e);
const clicks = document.querySelectorAll('.click');
const foo = () => console.log('I am foo');
const foo1 = () => console.log('I am foo1');

let evHUB = {
  foo,
  foo1,
};

[...clicks].map((el) => el.addEventListener('click', onEvent));

function disp(evt) {
  const target = evt.target;
  evHUB[target.dataset.foo]();
}
