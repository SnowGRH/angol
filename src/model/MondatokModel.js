import { szenvedoMondatok } from "./angol";
export default class MondatokModel {
  #mondatok = [];
  #cim = {};
  #valaszok = [];
  #megoldas = "";
  #mondat = "";
  constructor(index) {
    this.#mondatok = szenvedoMondatok;
    this.#cim = this.#mondatok[0];
    this.#megoldas = this.#mondatok[index].alap;
    this.#valaszok = this.#mondatok[index].valasztas;
    this.#mondat = this.#mondatok[index].mondat;
  }
  sugo() {
    let txt = this.#mondatok[0];
    return txt;
  }
  getvalaszok() {
    return this.#valaszok;
  }
  getAlap(){
    return this.#megoldas;
  }
  mondatFeldolgoz(index) {

    const mdt = this.#mondat.split("_");
    return mdt[index];
  }
}
