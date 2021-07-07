category_choices = [
    ("1", "Fun"),
    ("2", "Geography"),
    ("3", "Language"),
    ("4", "Literature"),
    ("5", "Math"),
    ("6", "Miscellaneous"),
    ("7", "Science"),
    ("8", "Social Studies")
]

for (var i = 0; i < category_choices.length; i++) {
    console.log(category_choices[i])
}

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }                
  
                     
