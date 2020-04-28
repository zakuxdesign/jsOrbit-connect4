export class Model {
  constructor(playerTurn) {
    this.board = [
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
      ["none", "none", "none", "none", "none", "none"],
    ];
    this.playerTurn = playerTurn;
    this.turnNumber = 0;
    this.lastComputerPiece = { column: 0, row: 0 };
    this.lastPieceDropped = { column: 0, row: 0 };
    this.connectedPieces = 0;
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Make Next Piece That's Player's Piece
  //
  // loops through the selected column
  // finds the next piece that is 'none' in reverse
  // splices it out and replaces with the current player
  // ------------------------------------------------------------------------------
  data_AddPieceToBoard(columnNumber) {
    let row = 5;
    while (row != -1) {
      if (this.board[columnNumber][row] == "none") {
        this.board[columnNumber].splice(row, 1, this.playerTurn);
        this.lastPieceDropped.column = columnNumber;
        this.lastPieceDropped.row = row;
        break;
      }
      row--;
    }
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In the column of last piece
  // ------------------------------------------------------------------------------
  data_CountPiecesInColumn(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    for (let piece of this.board[this.lastPieceDropped.column]) {
      if (piece == whoToCheckFor) {
        this.connectedPieces += 1;
      }
    }
    console.log(
      `Checking column relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In the row of last piece
  // ------------------------------------------------------------------------------
  data_CountPiecesInRow(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    for (let column in this.board) {
      for (let row in this.board[column]) {
        if (row == this.lastPieceDropped.row) {
          if (this.board[column][row] == whoToCheckFor) {
            this.connectedPieces += 1;
          }
        }
      }
    }
    console.log(
      `Checking row relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In incline direction going upwards
  // ------------------------------------------------------------------------------
  data_CountPiecesInIncreaseUpward(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    if (
      this.board[this.lastPieceDropped.column + 1] != undefined &&
      this.board[this.lastPieceDropped.row - 1] != undefined &&
      this.board[this.lastPieceDropped.column + 1][
        this.lastPieceDropped.row - 1
      ] == whoToCheckFor
    ) {
      this.connectedPieces += 1;
      //
      // is the next piece == this.playerTurn ?
      if (
        this.board[this.lastPieceDropped.column + 2] != undefined &&
        this.board[this.lastPieceDropped.row - 2] != undefined &&
        this.board[this.lastPieceDropped.column + 2][
          this.lastPieceDropped.row - 2
        ] == whoToCheckFor
      ) {
        this.connectedPieces += 1;
        //
        // is the next piece == this.playerTurn ?
        if (
          this.board[this.lastPieceDropped.column + 3] != undefined &&
          this.board[this.lastPieceDropped.row - 3] != undefined &&
          this.board[this.lastPieceDropped.column + 3][
            this.lastPieceDropped.row - 3
          ] == whoToCheckFor
        ) {
          this.connectedPieces += 1;
        }
      }
    }
    console.log(
      `Checking increase upward relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In incline direction going downwards
  // ------------------------------------------------------------------------------
  data_CountPiecesInIncreaseDownward(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    if (
      this.board[this.lastPieceDropped.column + 1] != undefined &&
      this.board[this.lastPieceDropped.row + 1] != undefined &&
      this.board[this.lastPieceDropped.column + 1][
        this.lastPieceDropped.row + 1
      ] == whoToCheckFor
    ) {
      this.connectedPieces += 1;
      //
      // is the next piece == this.playerTurn ?
      if (
        this.board[this.lastPieceDropped.column + 2] != undefined &&
        this.board[this.lastPieceDropped.row + 2] != undefined &&
        this.board[this.lastPieceDropped.column + 2][
          this.lastPieceDropped.row + 2
        ] == whoToCheckFor
      ) {
        this.connectedPieces += 1;
        //
        // is the next piece == this.playerTurn ?
        if (
          this.board[this.lastPieceDropped.column + 3] != undefined &&
          this.board[this.lastPieceDropped.row + 3] != undefined &&
          this.board[this.lastPieceDropped.column + 3][
            this.lastPieceDropped.row + 3
          ] == whoToCheckFor
        ) {
          this.connectedPieces += 1;
        }
      }
    }
    console.log(
      `Checking increase downward relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In decline direction going upwards
  // ------------------------------------------------------------------------------
  data_CountPiecesInDecreaseUpward(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    if (
      this.board[this.lastPieceDropped.column - 1] != undefined &&
      this.board[this.lastPieceDropped.row + 1] != undefined &&
      this.board[this.lastPieceDropped.column - 1][
        this.lastPieceDropped.row + 1
      ] == whoToCheckFor
    ) {
      this.connectedPieces += 1;
      if (
        this.board[this.lastPieceDropped.column - 2] != undefined &&
        this.board[this.lastPieceDropped.row + 2] != undefined &&
        this.board[this.lastPieceDropped.column - 2][
          this.lastPieceDropped.row + 2
        ] == whoToCheckFor
      ) {
        this.connectedPieces += 1;
        if (
          this.board[this.lastPieceDropped.column - 3] != undefined &&
          this.board[this.lastPieceDropped.row + 3] != undefined &&
          this.board[this.lastPieceDropped.column - 3][
            this.lastPieceDropped.row + 3
          ] == whoToCheckFor
        ) {
          this.connectedPieces += 1;
        }
      }
    }
    console.log(
      `Checking decrease upward relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Count Pieces
  // In decline direction going downwards
  // ------------------------------------------------------------------------------
  data_CountPiecesInDecreaseDownward(whoToCheckFor) {
    this.connectedPieces = 0;
    //
    if (
      this.board[this.lastPieceDropped.column - 1] != undefined &&
      this.board[this.lastPieceDropped.row - 1] != undefined &&
      this.board[this.lastPieceDropped.column - 1][
        this.lastPieceDropped.row - 1
      ] == whoToCheckFor
    ) {
      this.connectedPieces += 1;
      if (
        this.board[this.lastPieceDropped.column - 2] != undefined &&
        this.board[this.lastPieceDropped.row - 2] != undefined &&
        this.board[this.lastPieceDropped.column - 2][
          this.lastPieceDropped.row - 2
        ] == whoToCheckFor
      ) {
        this.connectedPieces += 1;
        if (
          this.board[this.lastPieceDropped.column - 3] != undefined &&
          this.board[this.lastPieceDropped.row - 3] != undefined &&
          this.board[this.lastPieceDropped.column - 3][
            this.lastPieceDropped.row - 3
          ] == whoToCheckFor
        ) {
          this.connectedPieces += 1;
        }
      }
    }
    console.log(
      `Checking decrease downward relative to last dropped: ${this.connectedPieces}`
    );
  }

  //
  //
  //
  //
  //
  //
  // ------------------------------------------------------------------------------
  // Randomly selects column on first turn
  // if same column as human's first piece
  // then it goes to next row
  // ------------------------------------------------------------------------------
  data_ComputerChoseFirstTurn() {
    const selectRandomColumn = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    //
    let randomColumnNumber = selectRandomColumn(6);
    if (this.board[randomColumnNumber][5] == "human") {
      this.board[randomColumnNumber][4] = "computer";
      this.lastComputerPiece.column = randomColumnNumber;
      this.lastComputerPiece.row = 4;
    } else {
      this.board[randomColumnNumber][5] = "computer";
      this.lastComputerPiece.column = randomColumnNumber;
      this.lastComputerPiece.row = 5;
    }
  }

  data_ChangePlayersTurn(playerTurn) {
    this.playerTurn = playerTurn;
  }

  data_ResetConnectedPieces() {
    this.connectedPieces = 0;
  }
}
