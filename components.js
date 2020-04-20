//
// User Experience and Interface Goal:
//
// Try to keep essence of neo-minimalist visual design
// while still creating making actions and direction for user clear
//
//

// ------------------------------------------------------------------------------
// Section
// ------------------------------------------------------------------------------

export class Component_Section {
  constructor(section) {
    this.section = section;
  }

  render(section_location, section_id, section_class) {
    let section = document.createElement("div");
    section.setAttribute("id", section_id);
    section.setAttribute("class", section_class);
    document.getElementById(section_location).appendChild(section);
  }
}

// ------------------------------------------------------------------------------
// Button
// ------------------------------------------------------------------------------

export class Component_Button {
  constructor(button) {
    this.button = button;
  }

  render(button_location, button_id, button_class, button_text) {
    let button = document.createElement("button");
    button.setAttribute("id", button_id);
    button.setAttribute("class", button_class);
    button.innerHTML = button_text;
    document.getElementById(button_location).appendChild(button);
  }
}

// ------------------------------------------------------------------------------
// Cell
// ------------------------------------------------------------------------------

export class Component_Cell {
  constructor(cell) {
    this.cell = cell;
  }

  render(cell_location, cell_id, cell_class, column_number, row_number) {
    let cell = document.createElement("div");
    cell.setAttribute("id", cell_id);
    cell.setAttribute("class", cell_class);
    cell.setAttribute("data-col-number", column_number);
    cell.setAttribute("data-row-number", row_number);
    document.getElementById(cell_location).appendChild(cell);
  }
}

// ------------------------------------------------------------------------------
// Column
// ------------------------------------------------------------------------------

export class Component_Column {
  constructor(column) {
    this.column = column;
  }

  render(column_location, column_id, column_class, column_number, column_type) {
    let column = document.createElement(column_type);
    column.setAttribute("id", column_id);
    column.setAttribute("class", column_class);
    column.setAttribute("data-col-number", column_number);
    document.getElementById(column_location).appendChild(column);
  }
}

// ------------------------------------------------------------------------------
// Board
// ------------------------------------------------------------------------------

export class Component_Board {
  constructor(board) {
    this.board = board;
  }

  render(board_location, board_id) {
    let board = document.createElement("div");
    board.setAttribute("id", board_id);
    document.getElementById(board_location).appendChild(board);
  }
}

// ------------------------------------------------------------------------------
// Header
// ------------------------------------------------------------------------------

export class Component_Header {
  constructor(header) {
    this.header = header;
  }

  render(header_location, header_id, header_class, header_type, header_text) {
    let header = document.createElement(header_type);
    header.setAttribute("id", header_id);
    header.setAttribute("class", header_class);
    header.innerHTML = header_text;
    document.getElementById(header_location).appendChild(header);
  }
}

// ------------------------------------------------------------------------------
// Paragraph
// ------------------------------------------------------------------------------

export class Component_Paragraph {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }

  render(paragraph_location, paragraph_id, paragraph_class, paragraph_text) {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", paragraph_id);
    paragraph.setAttribute("class", paragraph_class);
    paragraph.innerHTML = paragraph_text;
    document.getElementById(paragraph_location).appendChild(paragraph);
  }
}
