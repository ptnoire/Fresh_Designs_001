const ls1 = document.querySelector('.leftSideh1');
const rs1 = document.querySelector('.rightSideh1');
const targets = document.querySelectorAll('.target');

ls1.dataset.text = ls1.textContent;
rs1.dataset.text = rs1.textContent;

const obsCallBack = function(entries, obs) {
    const [entry] = entries;
    console.log(entry);
    const target = entry.target;
    if(!entry.isIntersecting) return
    target.classList.remove('hidden');
    obs.unobserve(target);
}

const options = {
    root: null,
    threshold: 1,
};
  

const observer = new IntersectionObserver(obsCallBack, options);
  

targets.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el)
});
  