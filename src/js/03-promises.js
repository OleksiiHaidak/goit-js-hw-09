import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDelay = document.querySelector("input[name='delay']");
const inputStep = document.querySelector("input[name='step']");
const inputAmount = document.querySelector("input[name='amount']");
const btnCreatePromises = document.querySelector('button');


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
};


btnCreatePromises.addEventListener("click", (e) => {
  e.preventDefault();

  const delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notify.failure('Invalid input values. All values must be positive');
    return;
  };

  for (let position = 1; position <= amount; position++) {
    const newDelay = delay + (position - 1) * step;
    createPromise(position, newDelay).then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({position, delay}) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
});

