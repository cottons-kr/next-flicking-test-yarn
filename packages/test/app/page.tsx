'use client'

import Flicking from '@egjs/react-flicking'

import s from './style.module.css'

export default function Page() {
  return <>
    <Flicking
      circular
      inputType={[
        'mouse',
      ]}
    >
      <div className={s.panel}>Panel 1</div>
      <div className={s.panel}>Panel 2</div>
      <div className={s.panel}>Panel 3</div>
    </Flicking>
  </>
}
