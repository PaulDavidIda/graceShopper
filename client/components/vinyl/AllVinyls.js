import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchVinyls, selectVinyls } from '../../features/vinyl/vinylSlice';
import { useDispatch } from 'react-redux';

/**
 * COMPONENT
 */
const AllVinyls = () => {

    const dispatch = useDispatch();
    // const vinyls = useSelector(selectVinyls);
    const vinyls = useSelector(state => state.AllVinyls)
   
    // useEffect(()=> async () => {
    //   dispatch(await fetchVinyls());
    // }, []);

    useEffect (()=> {
        dispatch(fetchVinyls());
    },[])
 
// console.log(fetchVinyls(), "vinyls")
  return (
    <div>
      <div>All Albums, {vinyls}
        <ul>
         {/* {vinyls.map((album)=> {
        return <div key={album.id}>{album.name}</div>
      })} */}
      </ul>
      </div>    
    
    </div>
  );
};

export default AllVinyls;
