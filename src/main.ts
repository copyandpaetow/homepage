const checkboxes = Array.from(
  document.querySelectorAll("main input[type='checkbox']")
) as HTMLInputElement[];

const dispatchChangeEvent = (checkbox: HTMLInputElement, newState: boolean) => {
  checkbox.checked = newState;
  checkbox?.dispatchEvent(
    new Event("change", {
      bubbles: true,
      cancelable: true,
    })
  );
};

const toggleCheckboxes = (checkbox: HTMLInputElement) => {
  if (checkbox.checked) {
    return;
  }

  const index = checkboxes.findIndex((entry) => entry.isSameNode(checkbox));
  checkbox.checked = false;

  checkboxes.slice(index + 1)?.forEach((entry) => {
    dispatchChangeEvent(entry, false);
  });
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    toggleCheckboxes(checkbox);
  });
});
