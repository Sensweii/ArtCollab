import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listLogos } from '../actions/logoActions';
import LogoTable from '../components/LogoTable';


function LogoListScreen () {

  const contextLogos = document.getElementById('context-logos');
  const contextLogosText = contextLogos ? contextLogos.textContent : null;
  const contextLogosJSON = JSON.parse(contextLogosText);

  const logoList = useSelector(state => state.logoList);
  const { logos, loading, error } = logoList;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listLogos());
      return () => {
      };
  }, []);

  return(
    <div>
      { 
        error ? <div>{ error }</div>
        : <LogoTable
          logoList={ logos }
          contextLogoList={ contextLogosJSON }
          loading={ loading }/>
      }
    </div>
  );
}

export default LogoListScreen;
