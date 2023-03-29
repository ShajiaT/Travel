import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_ButtonTextTypeRoundedSt.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    clickHere?: ReactNode;
  };
}


export const Button_ButtonTextTypeRoundedSt: FC<Props> = memo(function Button_ButtonTextTypeRoundedSt(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.clickHere != null ? props.text?.clickHere : <div className={classes.clickHere}>Click Here</div>}
    </button>
  );
});
