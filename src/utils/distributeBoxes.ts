import { Box, Field, Position } from "../features/field/types";

export function distributeBoxes(numBoxes: number, fieldSize = 5): Field {
  const field: Field = {};
  let currentLevel = 0;
  let currentBoxId = 1;
  const positions: Position[] = [];

  for (let x = 0; x < fieldSize; x++) {
    for (let y = 0; y < fieldSize; y++) {
      positions.push({ x, y, level: currentLevel });
    }
  }

  function addBoxToField(x: number, y: number, level: number) {
    const positionKey = `${x}-${y}-${level}`;
    const box: Box = { id: currentBoxId, below: [], x, y, level };

    if (level > 0) {
      const belowKey = `${x}-${y}-${level - 1}`;
      box.below = field[belowKey].map((b) => b.id);
    }

    if (!field[positionKey]) {
      field[positionKey] = [];
    }

    field[positionKey].push(box);
    currentBoxId++;
  }

  while (currentBoxId <= numBoxes) {
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    let placed = false;

    for (const pos of positions) {
      const positionKey = `${pos.x}-${pos.y}-${pos.level}`;
      if (!field[positionKey] || field[positionKey].length === 0) {
        addBoxToField(pos.x, pos.y, pos.level);
        placed = true;
        break;
      }
    }

    if (!placed) {
      currentLevel++;
      for (let x = 0; x < fieldSize; x++) {
        for (let y = 0; y < fieldSize; y++) {
          positions.push({ x, y, level: currentLevel });
        }
      }
    }
  }

  return field;
}
