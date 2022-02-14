const regexVal = {
   StringNormal: ([min,max]) => new RegExp(`^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.#-\\s]{${min},${max}}$`,'g'),
   StringEmail: () => new RegExp(`^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$`,'g')
};

const valString = (flag, {value, range}) => {
   value = value.trim();
   const expresion = regexVal[flag](range);
   return expresion.test(value);
};

export { valString };