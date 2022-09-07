class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    let randomPull = Math.floor(Math.random()*3)
    return acceptedValues[randomPull];
  }

  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    const acceptedResults = [ `win`, `lose`, `tie` ];
    let result;
    if (userSelection === cpuSelection)
      result = acceptedResults[2];
    
    if (userSelection == 'rock' && cpuSelection == 'scissors') {
      result = acceptedResults[0];
    } else if (userSelection == 'paper' && cpuSelection == 'rock') {
      result = acceptedResults[0];
    } else if (userSelection == 'scissors' && cpuSelection == 'paper') {
      result = acceptedResults[0];
    } else {
      result = acceptedResults[1];
    }
    return result;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuSelection = this.generateCPUResponse();
    let winner = this.determineWinner(userSelection, cpuSelection);

    //if the user wins the round w log entry
    if (winner == 'win') {
      this.score.user++;
      winner = this.username;
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuSelection + ': ' + winner + ' wins!');
    }
    
    //if the CPU wins the round w log entry
    if (winner == 'lose') {
      this.score.cpu++;
      winner = 'CPU';
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuSelection + ': CPU wins!');
    }

    //adding log entry for tie
    if (winner == 'tie') {
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuSelection + ': it is a tie!');
    }
    
  }

}