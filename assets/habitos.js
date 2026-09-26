(() => {
  const habits = [...document.querySelectorAll('.habit')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.getElementById('count');
  let previous = -1;
  function filter(category) {
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    document.querySelectorAll('.dimension').forEach(section => {section.hidden = category !== 'todos' && section.dataset.dimension !== category;});
    const total = category === 'todos' ? habits.length : habits.filter(habit => habit.dataset.category === category).length;
    count.textContent = `${total} hábitos para explorar`;
  }
  filters.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  document.getElementById('filters').hidden = false;
  const random = document.getElementById('random');
  random.hidden = false;
  random.addEventListener('click', () => {
    // Each of the 20 habits is eligible initially; avoid consecutive repetition.
    const pool = habits.map((_, index) => index).filter(index => index !== previous);
    const index = pool[Math.floor(Math.random() * pool.length)];
    previous = index;
    const habit = habits[index];
    filter('todos');
    const title = document.getElementById('seleccion-titulo');
    title.textContent = habit.querySelector('h3').textContent;
    title.tabIndex = -1;
    document.getElementById('seleccion-practica').textContent = habit.querySelector('.practice-preview').textContent;
    document.getElementById('seleccion-enlace').href = `#${habit.id}`;
    const selection = document.getElementById('seleccion');
    selection.hidden = false;
    title.focus({preventScroll:true});
    selection.scrollIntoView({block:'start'});
  });
  function revealHash() {
    const habit = habits.find(item => `#${item.id}` === location.hash);
    if (!habit) return;
    filter('todos');
    habit.querySelector('details').open = true;
    habit.focus({preventScroll:true});
    habit.scrollIntoView({block:'start'});
  }
  window.addEventListener('hashchange', revealHash);
  document.getElementById('seleccion-enlace').addEventListener('click', event => {
    if (event.currentTarget.hash === location.hash) revealHash();
  });
  revealHash();
})();
