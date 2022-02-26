import './App.css';
import React from 'react';


function App() {

  const artiikkeli = {
    "urli": "asd.asd",
    "titteli": "Lorem Ipsumia",
    "kuvaus": "Lorem Ipsum is simply dummy text",
    "url": "https://c.files.bbci.co.uk/EF37/production/_108993216_ok-hand.jpg",
    "linkki": "Tästä et nyt vielä pääse minnekkään"
  };
  var artiklesit = [artiikkeli, artiikkeli, artiikkeli, artiikkeli];
  var klikattavat = ["Etusivu", "Ulkomaat", "Kotimaa", "Viihde"]
  var sivujutut = [
    {
      "otsikko": "Jari näki puussa oravan!",
      "kuvaus": "Orava oli muuten puussa."
    },
    {
      "otsikko": "Jorma kräkkäs Jannen salasanan",
      "kuvaus": "Katso kuvat kun Jorma tyhjentää jannen btc lompakon"
    },
    {
      "otsikko": "model text, and a search for 'lorem ipsum",
      "kuvaus": "sometimes by accident, sometimes on purpose (injected humour and the like)."
    }

  ]
  var mapatut = artiklesit.map((artikkeli) =>
    <Artikkeli artikkeli={artikkeli} />
  );
  var mapklikatut = klikattavat.map((klikattava) =>
    <a className='linkit'>{klikattava}</a>
  );
  var sivuelementit = sivujutut.map((klikattavat) =>
    <ul>
      <Sivupalkki palkin_sisältö={klikattavat} />
    </ul>
  );
  return (
    <div className='etusivu'>
      <div className='Headeri'>
        {mapklikatut}
      </div>
      <div className='Feed'>
        <ul className='App-content' >
          {mapatut}
          <div className='sivu'>
            <h2>Tosi mielenkiintoset</h2>
            {sivuelementit}
          </div>
        </ul >
      </div>
    </div>
  );
}

const Sivupalkki = (props) => {
  const { palkin_sisältö } = props;
  return (
    <li>
      <h4>{palkin_sisältö.otsikko}</h4>
      {palkin_sisältö.kuvaus}
    </li>
  );
}

const Artikkeli = (props) => {
  const { artikkeli } = props;
  return (
    <li>
      <h3>{artikkeli.titteli}</h3>
      {artikkeli.kuvaus}
      <br></br>
      <a href={artikkeli.urli}>{artikkeli.linkki}</a>
    </li >
  );
};

export default App;
