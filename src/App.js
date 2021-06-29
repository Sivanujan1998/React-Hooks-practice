import logo from './logo.svg';
import  React from 'react'
import './App.css';
import ClassCounter from './HOOCKSUsestate/ClassCounter';
import Hoockscounter from './HOOCKSUsestate/Hoockscounter';
import Hoockscountertwo from './HOOCKSUsestate/Hoockscountertwo';
import Hoockscounterthree from './HOOCKSUsestate/Hoockscounterthree';
import HoockCounterfour from './HOOCKSUsestate/HoockCounterfour';
import Classcounterone from './Useeffecthoocks/Classcounterone';
import HoockUEcounterone from './Useeffecthoocks/HoockUEcounterone';
import Classmouse from './Useeffecthoocks/Classmouse';
import Hooksmouse from './Useeffecthoocks/Hooksmouse';
import MouseContainer from './Useeffecthoocks/MouseContainer';
import IntervalClassCounter from './Useeffecthoocks/IntervalClassCounter';
import HoockIntervalCounter from './Useeffecthoocks/HoockIntervalCounter';
import Datafetching from './Useeffectfetchdata/Datafetching';
import ComponentC from './HookUsecontext/notusehooks/ComponentC';
import CounterOne from './UseReducerHook/CounterOne';
import Countertwo from './UseReducerHook/Countertwo';
import Counterthree from './UseReducerHook/Counterthree';
import Fetchingdata from './HOOCKSUsestate/Fetchingdata';
import Datafetchingtwo from './UseReducerHook/Datafetchingtwo';
import Parentcomponent from './UseCallbackhook/Parentcomponent';
import Counter from './UseMemohook/Counter';
import FocusInput from './UseRefhooks/FocusInput';
import Hooktimer from './UseRefhooks/Hooktimer';
import Doctitleone from './CustomHooks/Doctitleone';
import Doctitletwo from './CustomHooks/Doctitletwo';
import CounterOnee  from './CustomHooks/Counteronee';
import Countertwoo from './CustomHooks/Countertwoo';
import Userform from './CustomHooks/Userform';

export const UserContext=React.createContext() //for Usercontext hooks
export const Channelcontext=React.createContext() //for Usercontext hooks


function App() {
  return (
    <div className="App">

 <Userform/>
    
   {/*
      
<CounterOnee/>
<Countertwoo/>

    <Doctitletwo/>
    <Doctitleone/>

   <Hooktimer/>

 <FocusInput/>

<Counter/>

<Parentcomponent/>

<Datafetchingtwo/>

<Fetchingdata/>

 <Counterthree/>
      

   <Countertwo/>
<CounterOne/>

 <Channelcontext.Provider value={"Software.eng(Hons)"}>
   <UserContext.Provider value={"Sivanujan"}>
     <ComponentC/>
     </UserContext.Provider>
 </Channelcontext.Provider>
   
 <Datafetching/>

      <IntervalClassCounter/>
    <HoockIntervalCounter/>

    <MouseContainer/>
   <Hooksmouse/>
   <Classmouse/>
    <HoockUEcounterone/>
    <Classcounterone/>
   <HoockCounterfour/>
   <Hoockscounterthree/> 
   <Hoockscountertwo/>
   <Hoockscounter/>
   <ClassCounter/>*/}
    </div>
  );
}

export default App;






/*
// USeContext hooks & Use

import logo from './logo.svg';
import  React ,{useReducer}from 'react'
import './App.css';
import ComponentA from './hooksUserContextwithUserUserReducer/ComponentA';
import ComponentB from './hooksUserContextwithUserUserReducer/ComponentB';
import ComponentC from './hooksUserContextwithUserUserReducer/ComponentC';

export const CounterContextforglobal=React.createContext()

const initialstate=0
const reducer= (state,action)=>{
  switch(action){
    case "increment":
      return state+1
      case "decrement":
      return state-1
      case "reset":
      return initialstate
      default:
        return state
  }
}


function App() {
  const [count,dispatch]=useReducer(reducer, initialstate)
  return (
    <div className="App">
      <CounterContextforglobal.Provider 
      value={{count:count,countchanger:dispatch}}>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </CounterContextforglobal.Provider>
    </div>
  );
}

export default App;
*/