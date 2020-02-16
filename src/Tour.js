class Checkpoint {

  constructor(name, location, question, answers, answer, description) {
    this.name = name
    this.location = location
    this.question = question
    this.answers = answers
    this.answer = answer
    this.description = description
  }
  
}

class Tour {

  constructor(startingCheckpoint) {
    this.checkpoints = [startingCheckpoint]
    this.length = 1
    this.currentCheckpointIndex = -1;
  }
  
  addCheckpoint(checkpoint) {
    this.checkpoints.push(checkpoint)
    this.length++
  }

  nextCheckpoint() {  
    this.currentCheckpointIndex += 1
    if (this.currentCheckpointIndex === this.length) {
      return "OVER"
    } else {
      return this.checkpoints[this.currentCheckpointIndex]
    }
  }

}

export default Tour;