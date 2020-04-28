import { View } from "./view.js";
import { Model } from "./model.js";

export class Controller {
  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Checks Number Of Pieces
  // ------------------------------------------------------------------------------
  static Game_CountNumberOfConnectedPiece(
    num,
    whoToCheckFor,
    checkingHumansPieces
  ) {
    //
    // Goes through each of the scenarios (see "checks" array) and increments model.connectedPieces
    model.data_ResetConnectedPieces();
    console.log(`TURN ------------------ ${model.playerTurn}`);
    const checks = [
      model.data_CountPiecesInColumn(whoToCheckFor),
      model.data_CountPiecesInRow(whoToCheckFor),
      model.data_CountPiecesInIncreaseUpward(whoToCheckFor),
      // model.data_CountPiecesInIncreaseDownward(whoToCheckFor),
      // model.data_CountPiecesInDecreaseUpward(whoToCheckFor),
      // model.data_CountPiecesInDecreaseDownward(whoToCheckFor),
    ];
    //
    for (let check in checks) {
      checks[check];
      // if (model.connectedPieces <= num) {
      //   console.log(model.connectedPieces);
      // } else {
      //   break;
      // }
    }
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Determines Who's Turn and what render and do
  // ------------------------------------------------------------------------------
  Game_Turn() {
    //
    // Make the columns buttons
    // so user can interact with them and make the columns clickable
    if (model.playerTurn == "human") {
      view.interface_TurnInProgress("button", model.board);
      document.getElementById("paragraph-players-turn").innerHTML =
        "<u>Your</u> turn." +
        "</br>" +
        "Drop a piece by clicking one of the columns";
      //
      let columns = document.getElementsByClassName("column");
      for (let column of columns) {
        if (column.firstChild.className != "controlled-by-none") {
          column.disabled = true;
          column.style.cursor = "not-allowed";
        } else {
          column.addEventListener("click", function () {
            let columnNumber = parseInt(column.getAttribute("data-col-number"));
            model.data_AddPieceToBoard(columnNumber);
            Controller.Game_CountNumberOfConnectedPiece(4, "human", false);
            view.interface_Remove();
            controller.Game_ChangeTurn();
            // view.interface_Remove();
            // console.log(model.connectedPieces);
            // if (model.connectedPieces == 4) {
            //   Controller.Game_End();
            // } else {
            //   controller.Game_ChangeTurn();
            // }
          });
        }
      }
      //
      // Make the columns divs so user cannot interact with the columns
    } else {
      view.interface_TurnInProgress("div", model.board);
      document.getElementById("paragraph-players-turn").innerHTML =
        "Computer's turn." + "</br>" + "hmm...";
      //
      // if first turn select random column
      // if past computer's first turn looks to see if it needs to do a defensive move otherwise it does offensive move
      // Checks if any scenario comes up
      // if it gets through each scenario and nothing needs done it calls computerOffesiveMove()
      if (model.turnNumber == 2) {
        model.data_ComputerChoseFirstTurn();
        setTimeout(function () {
          model.data_ResetConnectedPieces();
          view.interface_Remove();
          controller.Game_ChangeTurn();
        }, 2500);
      } else {
        //
        const computerDefensiveMove = () => {
          Controller.Game_CountNumberOfConnectedPiece(2, "human", true);
        };
        //
        model.data_ResetConnectedPieces();
        computerDefensiveMove();
        view.interface_Remove();
        controller.Game_ChangeTurn();
      }
    }
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Change Who's Turn It Is
  // ------------------------------------------------------------------------------
  Game_ChangeTurn() {
    model.turnNumber += 1;
    model.data_ResetConnectedPieces();
    if (model.playerTurn == "human") {
      model.playerTurn = "computer";
      controller.Game_Turn();
    } else {
      model.playerTurn = "human";
      controller.Game_Turn();
    }
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Ends The Game
  // ------------------------------------------------------------------------------
  static Game_End() {
    console.log(model.playerTurn + " wins");
    //
    //
    // new view for end game
    //
  }
}

let view = new View();
let model = new Model();
let controller = new Controller(view, model);
model.playerTurn = "human";
model.turnNumber += 1;
controller.Game_Turn();
