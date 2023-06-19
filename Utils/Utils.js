export const shortenNumber = (number) => {
    if (number < 10000) {
      return number.toString();
    }
  
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    let shortNumber = number;
  
    while (shortNumber >= 1000 && suffixNum < suffixes.length - 1) {
      shortNumber /= 1000;
      suffixNum++;
    }
  
    const roundedNumber = Math.floor(shortNumber * 100) / 100;
    return number ? roundedNumber + suffixes[suffixNum] : "NA";
  };