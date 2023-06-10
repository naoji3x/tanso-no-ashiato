export const round = (value: number) =>
  value < 10 ? Math.round(Number(value)) : Math.round(Number(value) / 10) * 10

// kgをtに変換する
export const kg2ton = (value: number) => Math.round(value / 10) / 100
