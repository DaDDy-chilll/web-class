const menuToggle = (lines) => {
  lines.forEach((line, i) => {
    const isOpen = line.className.includes("_active");
    if(isOpen) line.classList.remove(`line${i + 1}_active`);
    else line.classList.add(`line${i + 1}_active`)
  });
};

export { menuToggle };
