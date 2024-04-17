document.querySelectorAll('.row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      const line = row.querySelector('.line');
      const text = row.querySelector('.text');
      line.style.display = 'block';
      text.style.display = 'block';
    });
  
    row.addEventListener('mouseleave', () => {
      const line = row.querySelector('.line');
      const text = row.querySelector('.text');
      line.style.display = 'none';
      text.style.display = 'none';
    });
  });
  