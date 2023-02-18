const OPEN_BRACKETS = ['(','{','[','|'];
const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
};

module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for(let i=0; i<str.length;i++) {
      let currBracket = str[i];

      if (OPEN_BRACKETS.includes(currBracket)) {
          stack.push(currBracket);
      } else {
          if (stack.length === 0) {
              return false;
          }
          let top = stack[stack.length -1];

          if (BRACKETS_PAIR[currBracket] === top) {
            stack.pop();
          } else {
            return false;
          }
        }
  }

  return stack.length === 0;
}
