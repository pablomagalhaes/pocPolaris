import React, { useCallback, useEffect, useState } from 'react';
import {api} from '../../services/api';
import * as S from './styles';
import { BodyContent } from './components/BodyContent';

function Home() {
  const [language,setLanguage] = useState('pt_br');
  const [countryInfo,setCountryInfo] = useState({});
  const [stepPosition,setStepPosition] = useState(0);

  useEffect(()=>{
    console.log('called this func')
    async function fetchData(){
      const {data} = await api.get(`/${language}`);
      console.log({data:data})
      setCountryInfo(data)
    }
    fetchData()

  },[language])

  // useEffect(()=>{
  //   window.addEventListener("message", message => {
  //     console.log({message})
  //     if(message?.data==='us' || message?.data==='pt_br'){
  //       setLanguage(message.data)
  //     }
  //   });

  // },[])

  const sendDataToReactNativeApp = async () => {
    window?.ReactNativeWebView?.postMessage(`Data from WebView`);
  };
  console.count('Re-render')
  return(
    <S.Container>
        <S.OptionsSelect name="languages" value={language} id="lang" onChange={({target})=> setLanguage(target?.value)}>
          <option value="us">US</option>
          <option value="pt_br">PT-BR</option>
        </S.OptionsSelect>

       <BodyContent
          pageQuantity={countryInfo?.steps?.length}
          pdfLink={countryInfo?.steps?.[0]?.url_pdf}
        />

        {
          window?.ReactNativeWebView && (
            <div style={{marginTop:'8rem',background:'deeppink',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <h3>this div only show in webview inside RN</h3>
              <button onClick={sendDataToReactNativeApp}>send data to RN</button>
            </div>
          )
        }

    </S.Container>
  )
}

export { Home};