const d = document;

const focusElement = (id) => {
   const elem = d.getElementById(id); 
   setTimeout(() => elem.focus(), 150);
} 

const subStringLength = (str, num = 100, tooltip = false) => {
   if (str.length > num) {
      const nsubstr = str.substring(0, num) + ' ...';
      return tooltip ? <span className="custom-tooltip" data-tooltip={str}>
                { nsubstr }
              </span> : nsubstr;
   }
   return str;
};

const parsedNumberId = (str, size = 5) => {
   const count = String(str).length;
   return (count < size) ? '0'.repeat(size - count) + str : str; 
}

const createPagination = (data = [], num = 5) => {
   const count = data.length;
   let dataArray = [], dataPags = [];

   if(count > num) {
      let pags = 0;
      for (let ini = 0; count > ini; ini++) {
         if (ini % num === 0) { //devide array
            pags++;
            const diff = count - ini;
            const plus = (diff > num) ? num : diff;
            dataArray.push(data.slice(ini, ini + plus));
         }
      }
      dataPags =  [ ...Array(pags).keys() ];
   } else dataArray = [data];

   return { dataArray, dataPags }; 
};

export { focusElement, subStringLength, parsedNumberId, createPagination }