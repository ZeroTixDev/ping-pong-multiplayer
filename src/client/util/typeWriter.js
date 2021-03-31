const { typingSpeed } = require('../constants.js');

module.exports = async function typeWriter(text, element, elementType = null, styles = null) {
   return new Promise((resolve, _reject) => {
      function type(i = 0) {
         if (i < text.length) {
            if (elementType != null) {
               element.innerHTML += `<${elementType} ${styles == null ? '' : styles}>${text.charAt(
                  i
               )}</${elementType}>`;
            } else {
               element.innerHTML += text.charAt(i);
            }
            setTimeout(() => type(i + 1), 1000 / typingSpeed);
         } else {
            resolve();
         }
      }
      type();
   });
};
