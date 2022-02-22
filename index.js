const foo = () => (iam.textContent = 'I am student');
const foo1 = () => (iam.textContent = 'I am alcohol');

const onEvent = (e) => disp(e);
const clicks = document.querySelectorAll('.click');
const iam = document.querySelector('.iam');

let evHUB = {
  'foo':foo,
  'foo1':foo1,
};

[...clicks].map((el) => el.addEventListener('click', onEvent));

function disp(evt) {
  const target = evt.target;
  evHUB[target.dataset.foo]();
}
