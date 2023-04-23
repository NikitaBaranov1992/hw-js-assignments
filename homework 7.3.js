class sendMessageButton {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.type = "button";
    this.color = "green";
  }
  onClick() {
    console.log(
      `this.props: ${this.width}, ${this.height}, ${this.type}, ${this.color}`
    );
  }
}

let newWidth = 10;
let newHeight = 5;

let newButton = new sendMessageButton(newWidth, newHeight);

newButton.onClick();

function testButton() {
  if (
    ((newButton.width = newWidth),
    (newButton.Height = newHeight),
    (newButton.type = "button"),
    (newButton.color = "green"))
  ) {
    console.log("Соответствует");
  } else {
    console.log("Не соответствует");
  }
}

testButton();
