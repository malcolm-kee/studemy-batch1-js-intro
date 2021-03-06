/* eslint-disable */

(function initGuide() {
  const questionDemoBtn = document.querySelector('#question-demo-btn');

  function prompt(options) {
    return new Promise((resolve) => {
      helpers.prompt(options, (ans) => resolve(ans));
    });
  }

  questionDemoBtn.addEventListener('click', () => {
    prompt({
      type: 'question',
      label: 'What is your favourite animal?'
    }).then((answer) => {
      console.log('Answer is ', answer);
    });
  });

  const confirmationDemoBtn = document.querySelector('#confirmation-demo-btn');
  confirmationDemoBtn.addEventListener('click', () => {
    prompt({
      type: 'confirmation',
      label: 'Are you sure you want to proceed?'
    }).then((answer) => {
      console.log('Answer is', answer);
    });
  });

  // TODO: write code so that when user click "Age" button, prompt them with the
  // question "What is your age?" and the log the result as "The age is <provided age>."
  // E.g. when user enter 21, you should log "The age is 21."
  const askAgeBtn = document.querySelector('#ask-age-btn');
  askAgeBtn.addEventListener('click', () => {
    prompt({
      type: 'question',
      label: 'What is your age?'
    }).then((answer) => {
      console.log('The age is ', answer);
    });
  });

  // TODO: write code so that when user click "NSFW Content" button, prompt them with
  // the question "The following content is NSFW. Are you sure you want to proceed?",
  // and allow them to respond by clicking Yes or No.
  // - If user click Yes, prompt them with the question "What is your age?", and
  // finally log the message "User choose to proceed with age <provided age>.".
  // - If user click No, log the message "User choose to not proceed."
  const nsfwBtn = document.querySelector('#nsfw-btn');

  nsfwBtn.addEventListener('click', () => {
    helpers.prompt(
      {
        type: 'confirmation',
        label:
          'The following content is NSFW. Are you sure you want to proceed?'
      },
      (toProceed) => {
        if (toProceed) {
          prompt({
            type: 'question',
            label: 'What is your age?'
          }).then((providedAge) => {
            console.log('User choose to proceed with age ', providedAge);
          });
        } else {
          console.log('User choose to not proceed.');
        }
      }
    );
  });
})();
