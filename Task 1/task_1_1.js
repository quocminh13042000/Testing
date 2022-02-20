   function sortString(str) {

       let charCount = new Array(26);
       charCount.fill(0);
       let text = '';

       for (let i = 0; i < str.length; i++) {
           charCount[str[i].charCodeAt() - 'a'.charCodeAt()]++;
       }

       for (let i = 0; i < 26; i++) {
           for (let j = 0; j < charCount[i]; j++) {
               text += String.fromCharCode('a'.charCodeAt() + i);
           }
       }
       return text;
   }



   console.log(sortString('webmaster'));