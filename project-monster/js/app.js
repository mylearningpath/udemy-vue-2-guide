new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
    playerMana: 5,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack() {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage;
      this.turns.push({
        isPlayer: true,
        log: 'Player hits monster for ' + damage
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();

    },
    specialAttack() {
      let damage = this.calculateDamage(5, 20);
      this.monsterHealth -= damage;
      this.turns.push({
        isPlayer: true,
        log: 'Player SUPER hits monster for ' + damage
      });
      this.playerMana--;

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    heal() {
      if (this.playerHealth <= 85) {
        this.playerHealth += 15;
      } else {
        this.playerHealth = 100;
      }

      this.turns.push({
        isPlayer: true,
        log: 'Player heals for 15'
      });

      this.playerMana--;

      this.monsterAttacks();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttacks() {
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.push({
        isPlayer: false,
        log: 'Monster hits player for ' + damage
      });
      this.checkWin();
    },
    calculateDamage(min, max) {
      return Math.max((Math.floor(Math.random() * max) + 1), min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame();
        } else {
            this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Try again?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
