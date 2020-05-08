function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function turnToChinese(jobs) {
  switch (jobs) {
    case 'engineer':
      return '工程師'
    case 'designer':
      return '設計師'
    case 'entrepreneur':
      return '創業家'
  }
}

function generateTrashTalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']


  //選擇職業

  if (!options.occupation) {
    return '還再混阿! 選個職業吧?';
  }

  //隨機選句子
  let trashTalk = `身為一個${turnToChinese(options.occupation)}，${sample(task[options.occupation])}${sample(phrase)}吧！`
  


  //回傳句子
  return trashTalk

}



module.exports = generateTrashTalk
