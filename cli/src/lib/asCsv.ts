export function asCsv(data: any[]){
    const array = [Object.keys(data[0])].concat(data)

    return array.map(it => {
      return Object.values(it).toString()
    }).join('\n')
}