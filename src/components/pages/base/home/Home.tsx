import React, { useEffect } from 'react';
import '../../../../styles/colors/index.css';
import '../../../../styles/typography/index.css';
import '../../../../styles/widgets/index.css';
import Square from '../../compound/home/Square';
import Header from '../header/Header';
import Dates from '../../compound/home/Dates';

interface Account {
  username: string;
  email: string;
  password: string;
  disabled: boolean;
}

const adminAccount: Account = {
  username: 'admin',
  email: 'admin@gmail.com',
  password: 'password',
  disabled: false,
};

const loadAdminAccount = () => {
  const accountsData = localStorage.getItem('accounts');
  let accounts: Account[] = [];

  if (accountsData) {
    accounts = JSON.parse(accountsData);
  }

  const adminExists = accounts.some((account: Account) => account.email === adminAccount.email);

  if (!adminExists) {
    accounts.push(adminAccount);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
};

function Home() {
  useEffect(() => {
    const isUserLoggedSet = localStorage.getItem('isUserLoggedSet');
    const isAdminAccountSet = localStorage.getItem('isAdminAccountSet');

    if (!isUserLoggedSet) {
      localStorage.setItem('userLogged', 'none');
      localStorage.setItem('isUserLoggedSet', 'true');
    }

    if (!isAdminAccountSet) {
      loadAdminAccount();
      localStorage.setItem('isAdminAccountSet', 'true');
    }
  }, []);

  const homeClassName = 'page-background';

  return (
    <div className={homeClassName}>
      <Header />
      <Dates />
      <Square />
    </div>
  );
}

export default Home;
