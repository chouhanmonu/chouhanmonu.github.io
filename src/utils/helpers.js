export function getSectionClasses() {
  return "section-container px-4";
}

export function getTechFromList(techName, list) {
  return list.find(
    (tech) => tech.name.toLowerCase() === techName.toLowerCase()
  );
}
