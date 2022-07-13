import React from 'react';
import { Button } from '../../../../components/Button/index.js';
import { Circle } from '../Circle/index.js';
import { Link } from "react-router-dom";

import * as S from './styles.js'

const BodyContent = ({pageQuantity=0,pdfLink=''}) => {
  const stepQuantity = new Array(pageQuantity).fill(1);
  console.log({pdfLink})
  return (
    <S.WrapperContent>
      <S.WrapperCounterStep>
        {stepQuantity.map((_,index)=> <Circle key={index} number={index+1}/>)}
      </S.WrapperCounterStep>
      {/* <S.PdfIframe data={pdfLink} type="application/pdf">
          <p>Alternative text to pdf</p>

      </S.PdfIframe> */}
      <Link to='/document'>see document</Link>

      <S.ButtonWrapper>
        <Button >accept</Button>
        <Button cancelButton>cancel</Button>
      </S.ButtonWrapper>

    </S.WrapperContent>
  );
}

export {BodyContent};
