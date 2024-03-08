const box = document.getElementById("color-box");
const color_name = document.getElementById("color-name");

function get_random_color() {
    const colors = [
        "#336699", // Deep Sky Blue
        "#4682B4", // Steel Blue
        "#5F9EA0", // Cadet Blue
        "#87CEEB", // Sky Blue
        "#6495ED", // Cornflower Blue
        "#00CED1", // Dark Turquoise
        "#20B2AA", // Light Sea Green
        "#008080", // Teal
        "#008B8B", // Dark Cyan
        "#2E8B57", // Sea Green
        "#3CB371", // Medium Sea Green
        "#8FBC8F", // Dark Sea Green
        "#2F4F4F", // Dark Slate Gray
        "#778899", // Light Slate Gray
      ];

  const color_index = Math.floor(Math.random() * colors.length);

  const color = colors[color_index];

  return color;
}

function change_color(color) {
  box.style.backgroundColor = color;
  color_name.innerHTML = color;
}

function update_dom() {
  box_color = get_random_color();
  body_color = get_random_color();
  change_color(box_color);
  document.body.style.background = body_color;
}

setInterval(() => {
    update_dom()
}, 2000);
