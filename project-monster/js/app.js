new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    usersHealth: 100,
    usersMana: 5,
    monsterHealth: 100
  },
  methods: {
    damage() {
      return Math.floor(Math.random() * 10) + 1
    },
    attack() {
      this.usersHealth = this.usersHealth - this.damage();
      this.monsterHealth = this.monsterHealth - this.damage();
    },
    specialAttack() {
      this.monsterHealth = this.monsterHealth - (3 * this.damage());
      this.usersMana--;
    },
    heal() {
      this.usersHealth = this.usersHealth + this.damage();
      this.usersMana--;
    }
  }
});


// SUDO CODE
