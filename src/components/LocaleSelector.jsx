import React, {useState} from 'react'
import { locales } from '../../locales'
import { nanoid } from 'nanoid'
import Time from './Time';

function LocaleSelector() {
  const [localeSelected, setLocaleSelected] = useState(navigator.language);

  function handleClick(e){
    setLocaleSelected(e.target.textContent);
  }

  return (
    <section>
      <Time locale={localeSelected} />
      <div>
        <h2>Select a locale:</h2>
        <div className='locale-btn-wrapper'>
          {locales.map(locale => <button className={localeSelected === locale ? 'btn-active' : 'btn-inactive'} key={nanoid()} onClick={handleClick}>{locale}</button>)}
        </div>
      </div>
    </section>
  )
}

export default LocaleSelector