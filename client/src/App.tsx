import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout';
import AssetList from './components/assets/AssetList';
import AssetForm from './components/assets/AssetForm';
import AssetDetails from './components/assets/AssetDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RepairForm from './components/repairs/RepairForm';
import RepairHistory from './components/repairs/RepairHistory';
import UserList from './components/users/UserList';
import UserForm from './components/users/UserForm';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={AssetList} />
            <Route path="/assets/new" component={AssetForm} />
            <Route path="/assets/:id" component={AssetDetails} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/repairs/new" component={RepairForm} />
            <Route path="/repairs/:id" component={RepairHistory} />
            <Route path="/users" component={UserList} />
            <Route path="/users/new" component={UserForm} />
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;