function capitalizeFirstLetters(input) {
  if (input === "") {
    return "";
  } else {
    const words = input.split(" ");
    const CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    return CapitalizedWords.join(" ");
  }
}

module.exports = capitalizeFirstLetters;
