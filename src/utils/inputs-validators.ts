export const wordsListInputValidator = (val: string) => {
  const isNumeric = /^(\d+)?$/.test(val);

  const isNotEmpty = val !== "";

  const number = parseInt(val, 10);
  const isInRange = number >= 1 && number <= 20000;

  const isValid = isNumeric && isNotEmpty && isInRange;

  let errorMessage = "";

  if (!isInRange) errorMessage = "عدد باید بین ۱ تا ۲۰۰۰۰ باشد.";
  if (!isNumeric) errorMessage = "لطفا تنها عدد وارد کنید.";
  if (!isNotEmpty) errorMessage = "ورودی نباید خالی باشد.";

  return {
    isValid,
    errorMessage,
  };
};
