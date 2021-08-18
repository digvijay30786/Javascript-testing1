function test(description,fn)
{
    console.log(description)
    fn();
}

function expect(input)
{
     function toBe(expect)
     {

         if (Number.isInteger(input) && Number.isInteger(expect)) {
             
             if (input === expect) {
                 console.log("Test Case Passed");
             }
             else {
                 console.log("Test Case Failed");
                 console.log("Output : ", input);
                 console.log("Expected : ", expect);
             }
         }
         else {
             console.log("Error : Invalid Arguments passed in params Please check and fix it.");
         }
     }

      function toNotBe(expect)
      {
          if (Number.isInteger(input) && Number.isInteger(expect)) {
            
              if (input !== expect) {
                  console.log("Test Case Passed");
                  console.log("Output : ", input);
                  console.log("Expected : ", expect);
              }
              else {
                  console.log("Test Case Failed");
                    
              }
          }
          else
          {
            console.log("Error : Invalid Arguments passed in params Please check and fix it.");
          }
      }

    return { toBe,toNotBe };
}

test("Find the difrence Output1  : ", () => {
    expect(Math.abs(-15-12)).toBe(27);
});


test("Find the difrence Output2 : ", () => {
    expect(2-2).toBe(0);
});


test("Find the difrence Output3 : ", () => {
    expect("a"+"b").toBe("ab");
});


test("Find the difrence code Output4 : ", () => {
    expect(Math.abs(1 - 2)).toNotBe(6);
});


test("Find the difrence Output5 : ", () => {
    expect(Math.abs(1 - 91)).toNotBe(3);
});
