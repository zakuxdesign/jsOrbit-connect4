import {
  Component_Section,
  Component_Button,
  Component_Cell,
  Component_Column,
  Component_Board,
  Component_Header,
  Component_Paragraph,
} from "./components.js";

export class View {
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Game Start Screen
  // ------------------------------------------------------------------------------
  interface_Start() {
    section.render("body", "section-start", "section");
    header.render("section-start", "start-header", "", "h1", "Connect 4");
    paragraph.render(
      "section-start",
      "start-paragraph",
      "",
      "Welcome to a virtual spin on this classic game."
    );
    button.render("section-start", "button-start", "", "Start Connecting");
  }

  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Game In Progress Screen
  //
  // renders the board according to the model.board array
  // ------------------------------------------------------------------------------
  interface_InProgress(column_type, boardData) {
    section.render("body", "section-in-progress", "section");
    header.render("section-in-progress", "start-header", "", "h1", "Connect 4");
    paragraph.render("section-in-progress", "paragraph-players-turn", "", "");
    section.render("section-in-progress", "section-player-turn", "section");
    board.render("section-in-progress", "board");
    //
    const renderCell = (columnData, cellData) => {
      if (cellData == "none") {
        cell.render(
          "col-" + columnData,
          "row-" + cellData,
          "controlled-by-none",
          columnData,
          cellData
        );
      } else if (cellData == "human") {
        cell.render(
          "col-" + columnData,
          "row-" + cellData,
          "controlled-by-human",
          columnData,
          cellData
        );
      } else {
        cell.render(
          "col-" + columnData,
          "row-" + cellData,
          "controlled-by-computer",
          columnData,
          cellData
        );
      }
    };
    //
    for (let columnData in boardData) {
      column.render(
        "board",
        "col-" + columnData,
        "column",
        columnData,
        column_type
      );
      //
      for (let cellData in boardData[columnData]) {
        renderCell(columnData, boardData[columnData][cellData]);
      }
    }
  }

  interface_End() {}

  interface_Remove() {
    document.getElementById("section-in-progress").remove();
  }
}

let section = new Component_Section();
let button = new Component_Button();
let cell = new Component_Cell();
let column = new Component_Column();
let board = new Component_Board();
let header = new Component_Header();
let paragraph = new Component_Paragraph();
