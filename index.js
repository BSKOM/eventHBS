const onEvent = (e) => disp(e);
const clicks = document.querySelectorAll('.click');
const iam = document.querySelector('.iam');
const foo = () => (iam.textContent = 'I am student');
const foo1 = () =>(iam.textContent = 'I am alcohol');

let evHUB = {
  foo,
  foo1,
};

[...clicks].map((el) => el.addEventListener('click', onEvent));

function disp(evt) {
  const target = evt.target;
  evHUB[target.dataset.foo]();
}
