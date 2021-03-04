
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const content = document.getElementById('content');
const bullets = [...document.querySelectorAll('.bullet')];

var industriInputs = document.querySelectorAll("#industri-form label")

const MAX_STEPS = 5;
let currentStep = 1;



nextBtn.addEventListener('click', () =>{
  const currentBullet = bullets[currentStep -1]
  currentBullet.classList.add('completed');
  currentStep++;
  previousBtn.disabled = false;
  if(currentStep == MAX_STEPS){
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
});

previousBtn.addEventListener('click', () =>{
  const previousBullet = bullets[currentStep - 2];
  previousBullet.classList.remove('completed');
  currentStep--;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if(currentStep == 1){
    previous.disabled = true;
  }
})

finishBtn.addEventListener('click', () =>{
  location.reload();
})
