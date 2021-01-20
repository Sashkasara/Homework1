let tellStory = ["mood", "name", "activity"];
    tellStory[1] = "excited";
    tellStory[2] = "Dame";
    tellStory[3] = "playing chess";
    function story () {
    result = (`This is ${(tellStory[2])}. ${tellStory[2]} is a nice person. Today they are ${tellStory[1]}. They are ${tellStory[3]} all day. The end.` )
    console.log (result);
}
story ("super excited", "Dame", "playing chess");




//  Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments