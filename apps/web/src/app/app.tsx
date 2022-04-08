import * as  React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { StyledInput } from '../components/input/Input';
import { Select } from '../components/select/Select';
import { FaPlus, FaCheck } from "react-icons/fa";
import IconButton from '../components/iconButton';
import { Text } from '../components/common';
import { RadioButton, RadioButtonLabel, Item } from '../components/radioButton/RadioButton';
import ModalManager from '../components/modal/ModalManager';
import Modal from '../components/modal/Modal';
import StyledTable from '../components/table/Table';
import Layout from '../Layout/Layout';
import { api } from '../http/axiosInstance';
import AccountList from '../pages/AccountList';
import AccountActivities from '../pages/AccountActivities';
import Home from '../pages/Home';


export function App() {



  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/accounts">
          <AccountList />
        </Route>
        <Route path="/accounts/:id">
          <AccountActivities />
        </Route>
      </Switch>
    </div>



  );
}

export default App;
