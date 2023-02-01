export function edit(num: number, flag: number): string {
    let str: string = "";
    if (flag === 0) {
      if (num <= 1) {
        str = `${num} порция`
      }
      if (num > 1 && num <= 4) {
        str = `${num} порции`
      }
      if (num > 4) {
        str = `${num} порций`
      }
    } else {
      if (num <= 1) {
        str = 'мышь в подарок'
      }
      if (num > 1 && num <= 4) {
        str = `${num} мыши в подарок`
      }
      if (num > 4) {
        str = `${num} мышей в подарок`
      }
    }
    return str;
  }
  
export function addEdit(contain: string): string {
    return `Печалька, ${contain} закончился` 
  }