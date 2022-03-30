import './App.css';
import React  from 'react';
import ClassCounter from './componets/useState/ClassCounter';
import HookCounter from './componets/useState/HookCounter';
import HookCounterFour from './componets/useState/HookCounterFour';
import HookCounterTree from './componets/useState/HookCounterTree';
import HookCounterTwo from './componets/useState/HookCounterTwo';
import {ClassCounter as ClassCounterUseEffect } from './componets/useEffect/ClassCounter';
import HookCounterOne from './componets/useEffect/HookCounterOne';
import ClassMouse from './componets/useEffect/ClassMouse';
import HookMouse from './componets/useEffect/HookMouse';
import MouseContaner from './componets/useEffect/MouseContaner';
import IntervaClassCounter from './componets/useEffect/IntervaClassCounter';
import IntervalHookCounter from './componets/useEffect/IntervalHookCounter';
import DataFetching from './componets/useEffect/DataFetching';
import ComponentC from './componets/useContext/ComponentC';
import CounterOne from './componets/useReducer/CounterOne';
import CounterTwo from './componets/useReducer/CounterTwo';
import CounterTree from './componets/useReducer/CounterTree';
import UseReducerWithUseContext from './componets/useReducer/withUseContext/UseReducerWithUseContext';
import DataFeachingOne from './componets/useReducer/DataFeachingOne';
import DataFeachingTwo from './componets/useReducer/DataFeachingTwo';
import ParentComponent from './componets/useCallBack/ParentComponent';
import Counter from './componets/useMemo/Counter';
import Focusinput from './componets/useRef/Focusinput';
import ClassTimer from './componets/useRef/ClassTimer';
import HookTimer from './componets/useRef/HookTimer';
import DoctTitleOne from './componets/customeHook/DoctTitleOne';
import DoctTitleTwo from './componets/customeHook/DocTitleTwo';
import {default as CustomeHookCounterOne} from './componets/customeHook/CounterOne';
import {default as CustomeHookCounterTwo} from './componets/customeHook/CounterTwo';
import UserForm from './componets/customeHook/UserForm';

export const UserContext= React.createContext();
export const ChannelContext= React.createContext();


function App() {
  return (
    <div className="App">
      {/* there is exmaple of useState */}
      {/* <ClassCounter /> */}
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterTree />
      <HookCounterFour /> */}
{/* use effect  */}
      {/* <ClassCounterUseEffect /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContaner /> */}
      {/* <IntervaClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
    {/* use Context */}
      {/* <UserContext.Provider value={'Vishwas'}>   
      <ChannelContext.Provider value={'Yaash Technology'}>   
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider> */}
    {/* use Reducer */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterTree /> */}
        {/* <UseReducerWithUseContext /> */}
        {/* <DataFeachingOne /> */}
        {/* <DataFeachingTwo />         */}
        {/* UseCallback  */}
        {/* <ParentComponent /> */}
        {/* use memo */}
        {/* <Counter /> */}
        {/* useref */}
        {/* <Focusinput /> */}
        {/* <ClassTimer />
        <HookTimer /> */}

        {/* Use Custome Hookes  */}
        {/* <DoctTitleOne />
        <DoctTitleTwo /> */}

        {/* <CustomeHookCounterOne />
        <CustomeHookCounterTwo /> */}

        <UserForm />
    </div>
  );
}

export default App;
