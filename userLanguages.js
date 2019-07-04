function userLanguages(users){
  str = "";
  
  for(var i=0;i<users.length;i++){
    str += users[i].fname + " " + users[i].lname;
    str += " knows ";
    for(var j=0;j<users[i].languages.length;j++){
      str+= users[i].languages[j];
      if(j==users[i].languages.length-1){
        str += ".\n";
      }else{
        str += ", ";
      }
    }
  }
  
  return str;
}

users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]


console.log(userLanguages(users));