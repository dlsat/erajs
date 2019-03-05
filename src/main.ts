
import './corejs/erajscore'
import * as gameflow from './gameflow'
import * as chara from './character'
console.log(chara)
window.addEventListener("load", async () => { await gameflow.main() })
//document.addEventListener("DOMContentLoaded", () => { gameflow.main() })

