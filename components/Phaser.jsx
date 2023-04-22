
// This 

// https://github.com/proyecto26/ion-phaser/issues/41

// plus 

// https://stackoverflow.com/questions/68226699/next-js-react-phaser-referenceerror-navigator-is-not-defined

import { useRef } from 'react';
import { useGame } from '../hooks/useGame';
import gameConfig from "../game";



function PhaserGame() {
  const parentEl = useRef()
  useGame(gameConfig, parentEl)

  return (
    <div className="Phaser__Container" ref={parentEl} >
    </div>
  )
}

export default PhaserGame