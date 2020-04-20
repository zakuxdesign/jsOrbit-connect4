import { View } from "./view.js";
import { Model } from "./model.js";

export class Controller {
  Game_Turn() {
    if (model.playerTurn == "human") {
      //
      // Make the columns buttons
      // so user can interact with them
      console.log(
        model.playerTurn + "'s turn -----------------------------------"
      );
      console.log(model.turnNumber);
      view.interface_InProgress("button", model.board);
      document.getElementById("paragraph-players-turn").innerHTML =
        "<u>Your</u> turn." +
        "</br>" +
        "Drop a piece by clicking one of the columns";
      //
      // Make the columns clickable
      let columns = document.getElementsByClassName("column");
      for (let column of columns) {
        if (column.firstChild.className != "controlled-by-none") {
          column.disabled = true;
          column.style.cursor = "not-allowed";
        } else {
          column.addEventListener("click", function () {
            let columnNumber = parseInt(column.getAttribute("data-col-number"));
            model.data_AddPieceToBoard(columnNumber);
            Controller.Game_CountNumberOfConnectedPiece();
            view.interface_Remove();
            if (model.connectedPieces == 4) {
              Controller.Game_End();
            } else {
              controller.Game_ChangeTurn();
            }
          });
        }
      }
    } else {
      //
      // Make the columns divs
      // so user cannot interact with the columns
      console.log(
        model.playerTurn + "'s turn -----------------------------------"
      );
      console.log(model.turnNumber);
      view.interface_InProgress("div", model.board);
      document.getElementById("paragraph-players-turn").innerHTML =
        "Computer's turn." + "</br>" + "hmm...";
      //
      // Computer decided where to put piece

      //
      // if it's first turn
      // selects random column
      if (model.turnNumber == 2) {
        model.data_ComputerChoseFirstTurn();
        //
        // remove the UI
        // if the connectPieces == 4 then end the game
        // otherwise keep playing
        setTimeout(function () {
          view.interface_Remove();
          if (model.connectedPieces == 4) {
            Controller.Game_End();
          } else {
            controller.Game_ChangeTurn();
          }
        }, 2500);
      }
      //
      // if it's past the first for the computer
      // then it looks to see if it needs to do a defensive move
      // otherwise it does offensive move
      else {
        //
        const checks = [
          model.data_CountPiecesInColumn("human"),
          model.data_CountPiecesInRow("human"),
          model.data_CountPiecesInIncreaseUpward("human"),
          model.data_CountPiecesInIncreaseDownward("human"),
          model.data_CountPiecesInDecreaseUpward("human"),
          model.data_CountPiecesInDecreaseDownward("human"),
        ];

        const computerOffensiveMove = () => {};

        //
        // Checks if any scenario comes up
        // with at least > 2
        // if it gets through each scenario and nothing needs done
        // it calls computerOffesiveMove()
        const computerDefensiveMove = () => {
          for (let check in checks) {
            model.data_ResetConnectedPieces;
            console.log(checks[check]);
          }
          setTimeout(function () {
            view.interface_Remove();
            if (model.connectedPieces == 4) {
              Controller.Game_End();
            } else {
              controller.Game_ChangeTurn();
            }
          }, 2500);
        };
        model.data_ResetConnectedPieces;
        computerDefensiveMove();
      }
    }
  }

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

  static Game_End() {
    console.log(model.playerTurn + " wins");
    //
    //
    // new view for end game
    //
  }

  static Game_CountNumberOfConnectedPiece() {
    model.data_ResetConnectedPieces();
    model.data_CountPiecesInColumn(model.playerTurn);
    if (model.connectedPieces < 4) {
      model.data_ResetConnectedPieces();
      model.data_CountPiecesInRow(model.playerTurn);
    }
    if (model.connectedPieces < 4) {
      model.data_ResetConnectedPieces();
      model.data_CountPiecesInIncreaseUpward(model.playerTurn);
    }
    if (model.connectedPieces < 4) {
      model.data_ResetConnectedPieces();
      model.data_CountPiecesInIncreaseDownward(model.playerTurn);
    }
    if (model.connectedPieces < 4) {
      model.data_ResetConnectedPieces();
      model.data_CountPiecesInDecreaseUpward(model.playerTurn);
    }
    if (model.connectedPieces < 4) {
      model.data_ResetConnectedPieces();
      model.data_CountPiecesInDecreaseDownward(model.playerTurn);
    }
    if (model.data_CountPieces < 4) {
      model.data_ResetConnectedPieces();
    }
  }
}

let view = new View();
let model = new Model();
let controller = new Controller(view, model);
model.playerTurn = "human";
model.turnNumber += 1;
controller.Game_Turn();
