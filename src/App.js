import help from './img/help.png';
import reload from './img/reload.png';
import './App.scss';

function App() {
  return (
    
    <div>
      <header>
        <div class="logo">
          <div class="logoSymbol"></div>
          <h1>Damas</h1>
        </div>
      </header>

      <div class="modal startScreen off">
        <div class="content">
          <div class="logo">
            <div class="logoSymbol"></div>
            <h1>Damas</h1>
          </div>
          <p>O objetivo é capturar ou imobilizar as peças do adversário. O jogador que conseguir capturar todas as peças do inimigo ganha a partida.</p>
          <button class="startButton">Jogar</button>
        </div>
      </div>

      <div class="modal help off">
        <a href="#" class="closeOverlay"></a>
        <div class="helpContent">
          <img src="assets/help-inverse.png" alt="ícone: interrogação" />
          <ul>
            <li>A peça movimenta-se em diagonal, sobre as casas escuras, para a frente, e uma casa de cada vez.</li>
            <li>A peça pode capturar a peça do adversário movendo-se para frente e permitindo também capturar a peça do adversário movendo-se para trás.</li>
            <li>A peça que atingir a oitava casa adversária, parando ali, será promovida a "dama", peça de movimentos mais amplos que a simples peça. Assinala-se a dama sobrepondo, à pedra promovida, outra da mesma cor.</li>
          </ul>
        </div>
      </div>

      <div class="board">
        <div class="boardContent">
          <div class="row">
            <div class="square" id="a1">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="a2"></div>
            <div class="square" id="a3">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="a4"></div>
            <div class="square" id="a5">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="a6"></div>
            <div class="square" id="a7">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="a8"></div>
          </div>
          <div class="row">
            <div class="square" id="b1"></div>
            <div class="square" id="b2">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="b3"></div>
            <div class="square" id="b4">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="b5"></div>
            <div class="square" id="b6">
              <div class="piece dark"></div>
            </div>
            <div class="square" id="b7"></div>
            <div class="square" id="b8">
              <div class="piece dark"></div>
            </div>
          </div>
          <div class="row">
            <div class="square" id="c1"></div>
            <div class="square" id="c2"></div>
            <div class="square" id="c3"></div>
            <div class="square" id="c4"></div>
            <div class="square" id="c5"></div>
            <div class="square" id="c6"></div>
            <div class="square" id="c7"></div>
            <div class="square" id="c8"></div>
          </div>
          <div class="row">
            <div class="square" id="d1"></div>
            <div class="square" id="d2"></div>
            <div class="square" id="d3"></div>
            <div class="square" id="d4"></div>
            <div class="square" id="d5"></div>
            <div class="square" id="d6"></div>
            <div class="square" id="d7"></div>
            <div class="square" id="d8"></div>
          </div>
          <div class="row">
            <div class="square" id="e1"></div>
            <div class="square" id="e2"></div>
            <div class="square" id="e3"></div>
            <div class="square" id="e4"></div>
            <div class="square" id="e5"></div>
            <div class="square" id="e6"></div>
            <div class="square" id="e7"></div>
            <div class="square" id="e8"></div>
          </div>
          <div class="row">
            <div class="square" id="f1"></div>
            <div class="square" id="f2"></div>
            <div class="square" id="f3"></div>
            <div class="square" id="f4"></div>
            <div class="square" id="f5"></div>
            <div class="square" id="f6"></div>
            <div class="square" id="f7"></div>
            <div class="square" id="f8"></div>
          </div>
          <div class="row">
            <div class="square" id="g1">
              <div class="piece"></div>
            </div>
            <div class="square" id="g2"></div>
            <div class="square" id="g3">
              <div class="piece"></div>
            </div>
            <div class="square" id="g4"></div>
            <div class="square" id="g5">
              <div class="piece"></div>
            </div>
            <div class="square" id="g6"></div>
            <div class="square" id="g7">
              <div class="piece"></div>
            </div>
            <div class="square" id="g8"></div>
          </div>
          <div class="row">
            <div class="square" id="h1"></div>
            <div class="square" id="h2">
              <div class="piece"></div>
            </div>
            <div class="square" id="h3"></div>
            <div class="square" id="h4">
              <div class="piece"></div>
            </div>
            <div class="square" id="h5"></div>
            <div class="square" id="h6">
              <div class="piece"></div>
            </div>
            <div class="square" id="h7"></div>
            <div class="square" id="h8">
              <div class="piece"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="score">
        <span class="your">6</span>/<span class="their">1</span>
      </div>

      <a href="#" class="btnReload"><img src={reload} alt="recarregar"/></a>
      <a href="#" class="btnHelp"><img src={help} alt="ajuda"/></a>
    </div>

  );
}

export default App;
