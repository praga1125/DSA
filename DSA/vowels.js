s = "hello praga"
let vowels = 'aeiou'
   let temp = ''
   for (let i=0;i<s.length;i++){
           if(vowels.includes(s[i])) {
               console.log(s[i]); 
           }
           else{
               temp += s[i]+"\n"
            }
      }
    console.log(temp.trim())

