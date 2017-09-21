new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    usersHealth: 100,
    usersMana: 5,
    monsterHealth: 100,
    battleRegistry: []
  },
  methods: {
    randomPoints() {
      return (Math.floor(Math.random() * 10) + 1)
    },
    usersDamage() {
      let damage = this.randomPoints();
      this.usersHealth -= damage;
      this.battleRegistry.push({ monsterAttack: damage });
    },
    monsterDamage(multiplier = 1) {
      let damage = this.randomPoints() * multiplier;
      this.monsterHealth -= damage;
      this.battleRegistry.push({ userAttack: damage });
    },
    attack() {
      this.usersDamage();
      this.monsterDamage();
    },
    specialAttack() {
      this.usersDamage();
      this.monsterDamage(3);
      this.usersMana--;
    },
    heal() {
      this.usersHealth += this.randomPoints();
      this.usersMana--;
    }
  }
});
