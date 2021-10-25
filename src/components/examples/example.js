
import React from "react";
import MoleculeStructure from "../MoleculeStructure/MoleculeStructure";
import { SMILES_LIST } from "../../utils/smiles";

class ExampleList extends React.Component {
  render() {
    return (
      <div id="component-example-list" className="container">
        <div
          id="structure-list"
          className="columns is-desktop"
          style={{ margin: "12px", overflowX: "scroll" }}
        >
          {SMILES_LIST.map((smiles) => (
            <div className="column" key={smiles}>
              <MoleculeStructure
                id={smiles}
                structure={smiles}
                height={200}
                width={200}
                svgMode
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ExampleList;
