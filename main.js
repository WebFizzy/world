
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));


document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
}



// running number
class CountUp {
  constructor(triggerEl, counterEl) {
  const counter = document.querySelector(counterEl)
  const trigger = document.querySelector(triggerEl)
  let num = 199100
  const decimals = counter.dataset.decimals
  const countUp = () => {
    if (num < counter.dataset.stop) {
      num ++
      counter.textContent = num
    } else {
        // No decimals
        num++
        counter.textContent = num
      }
    }
      
    const observer = new IntersectionObserver((el) => {
      if (el[0].isIntersecting) {
        const interval = setInterval(() => {
          (num < counter.dataset.stop) ? countUp() : clearInterval(interval)
        }, counter.dataset.speed)
      }
    }, { threshold: [0] })

    observer.observe(trigger)
    }
  }

  // Initialize any number of counters:
  new CountUp('#start1', '#counter1')
  new CountUp('#start2', '#counter2')
