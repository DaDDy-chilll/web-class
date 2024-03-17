const menuToggle = (lines, side) => {
  lines.forEach((line, i) => {
    const isOpen = line.className.includes("_active");
    if (isOpen) {
      line.classList.remove(`line${i + 1}_active`);
      side.classList.add('close');
    } else {
      line.classList.add(`line${i + 1}_active`);
      side.classList.remove('close');
    }
  });
};

export { menuToggle };
