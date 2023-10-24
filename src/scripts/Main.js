import Icons from './utils/Icons';

/** Classe principale du projet */
class Main {
  /**
   * Méthode constructeur
   */
  constructor() {
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    Icons.load();
  }
}

new Main();
