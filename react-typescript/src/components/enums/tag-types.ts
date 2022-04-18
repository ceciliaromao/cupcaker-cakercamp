export enum Tags {
  PS4 = 'PS4',
  PS5 = 'PS5',
  XboxSeries = 'Xbox Series',
  XboxOne = 'Xbox One',
  PC = 'PC',
  Switch = 'Switch',
}

const tagType = {
  [Tags.PS4]: { name: 'PS4', color: '#1565c0' },
  [Tags.PS5]: { name: 'PS5', color: '#1565c0' },
  [Tags.XboxSeries]: { name: 'Xbox Series', color: '#529836' },
  [Tags.XboxOne]: { name: 'Xbox One', color: '#529836' },
  [Tags.PC]: { name: 'PC', color: '#BDBBBB' },
  [Tags.Switch]: { name: 'Switch', color: '#c62828' },
}

export const setTag = (type: Tags): { name: string; color: string } => {
  return tagType[type]
}
