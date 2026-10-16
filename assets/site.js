
const q = document.getElementById('q');
const turns = Array.from(document.querySelectorAll('.turn'));
if (q) {
  q.addEventListener('input', () => {
    const needle = q.value.trim().toLowerCase();
    turns.forEach(t => {
      const hit = !needle || t.innerText.toLowerCase().includes(needle);
      t.classList.toggle('hidden', !hit);
    });
  });
}
const btn = document.getElementById('toggle-tools');
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('hide-tools');
    btn.textContent = document.body.classList.contains('hide-tools') ? 'แสดงเครื่องมือ' : 'ซ่อนเครื่องมือ';
  });
}
document.querySelectorAll('.tool').forEach(d => {
  if (d.querySelector('.exit.bad')) d.open = false;
});
