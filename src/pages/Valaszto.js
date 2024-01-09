import MondatokModel from "../model/MondatokModel.js";
import ValasztoView from "../view/ValasztoView.js";
import "../Style.css";
export default function Valaszto() {
    let index = 2;
  const mondatok = new MondatokModel(index);
  return (
    <article>
      <div>
        {mondatok.sugo()}
        <h3>
          {mondatok.mondatFeldolgoz(0)}
          <ValasztoView lista={mondatok.getvalaszok()} />

          {mondatok.mondatFeldolgoz(1)}
          {"**("}
          {mondatok.getAlap()}
          {")**"}
        </h3>
      </div>
      <div>
        <button  className="w3-button w3-black nincs">Button Button</button>
      </div>
    </article>
  );
}
