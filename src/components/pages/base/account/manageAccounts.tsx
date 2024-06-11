import React, { useState, useEffect } from 'react';

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

const ManageAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = () => {
    const data = localStorage.getItem('accounts');
    if (data) {
      const loadedAccounts = JSON.parse(data);
      setAccounts(loadedAccounts);

      const adminExists = loadedAccounts.some(
        (account: Account) => account.email === adminAccount.email
      );

      if (!adminExists) {
        const updatedAccounts = [...loadedAccounts, adminAccount];
        saveAccounts(updatedAccounts);
      }
    } else {
      saveAccounts([adminAccount]);
    }
  };

  const saveAccounts = (updatedAccounts: Account[]) => {
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    setAccounts(updatedAccounts);
  };

  const addAccount = (newAccount: Account) => {
    const existingAccount = accounts.find(
      (account) => account.username === newAccount.username
    );

    if (!newAccount.email.includes('@gmail.com')) {
      return { success: false, message: 'El correo debe ser @gmail.com' };
    }

    if (newAccount.username.length <= 3) {
      return { success: false, message: 'El nombre de usuario debe tener más de 3 caracteres' };
    }

    if (!existingAccount) {
      const updatedAccounts = [...accounts, newAccount];
      saveAccounts(updatedAccounts);
      return { success: true, message: 'Usuario registrado con éxito' };
    } else {
      return { success: false, message: 'El usuario ya existe' };
    }
  };

  const handleLogin = (email: string, password: string) => {
    const existingAccount = accounts.find(
      (account) => account.email === email && account.password === password && !account.disabled
    );
    if (existingAccount) {
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('userLogged', existingAccount.username);
      return true;
    } else {
      localStorage.setItem('isLogged', 'false');
      return false;
    }
  };

  return { accounts, addAccount, handleLogin };
};

export default ManageAccounts;
