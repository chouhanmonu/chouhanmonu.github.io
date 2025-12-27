export function getSectionClasses() {
  return "section-container px-4";
}

export function getTechFromList(techName, list) {
  return list.find(
    (tech) => tech.name.toLowerCase() === techName.toLowerCase()
  );
}

export function joinArrayWithAnd(arr) {
  if (!arr?.length) return "";

  return arr.reduce((acc, curr, i, arr) => {
    if (arr.length === 1) {
      return acc;
    } else if (i + 1 === arr.length) {
      return `${acc}, and ${curr}`;
    } else {
      return `${acc}, ${curr}`;
    }
  });
}
