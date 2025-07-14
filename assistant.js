
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}

  this.addTask = function(task) {
    this.tasks.push(task);
    console.log(`${this.name} added a new task: "${task}"`);
  };

  this.completeTask = function() {
    if (this.tasks.length > 0) {
      const completed = this.tasks.shift();
      console.log(`${this.name} completed the task: "${completed}"`);
    } else {
      console.log(`${this.name} has no tasks to complete.`);
    }
  };

  this.reportMood = function() {
    console.log(`${this.name}'s current mood is: ${this.mood}`);
  };
}

const myAssistant = new PersonalAssistant("Riley");
  
  console.log(`Hi, I'm your personal assistant ${myAssistant.name}.`);
  
  myAssistant.reportMood();
  
  myAssistant.addTask("Study computer science");
  myAssistant.addTask("Watch YouTube");
  myAssistant.addTask("Play games with friends");
  
  myAssistant.completeTask();
  myAssistant.completeTask();
  
  myAssistant.mood = "productive";
  myAssistant.reportMood();
