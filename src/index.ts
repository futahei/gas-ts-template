export function main() {
  console.log('Hello, world!')
}

declare let global: any
global.main = main
