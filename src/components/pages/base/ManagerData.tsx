import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import '../../../styles/layout/index.css';

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

const ManagerData: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [adminEmail, setAdminEmail] = useState(adminAccount.email);
  const [adminPassword, setAdminPassword] = useState(adminAccount.password);
  const [isEditingAdmin, setIsEditingAdmin] = useState(false);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = () => {
    const data = localStorage.getItem('accounts');
    if (data) {
      const loadedAccounts = JSON.parse(data);
      const updatedAccounts = loadedAccounts.some((account: Account) => account.email === adminAccount.email)
        ? loadedAccounts
        : [...loadedAccounts, adminAccount];
      saveAccounts(updatedAccounts);
    } else {
      saveAccounts([adminAccount]);
    }
  };

  const saveAccounts = (updatedAccounts: Account[]) => {
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    setAccounts(updatedAccounts);
  };

  const handleDisableAccount = (username: string) => {
    const updatedAccounts = accounts.map((account) =>
      account.username === username ? { ...account, disabled: true } : account
    );
    saveAccounts(updatedAccounts);
  };

  const handleEnableAccount = (username: string) => {
    const updatedAccounts = accounts.map((account) =>
      account.username === username ? { ...account, disabled: false } : account
    );
    saveAccounts(updatedAccounts);
  };

  const handleDeleteAllAccounts = () => {
    const remainingAccounts = accounts.filter(
      (account) => account.email === adminAccount.email
    );
    saveAccounts(remainingAccounts);
  };

  const handleEditAdminAccount = () => {
    setIsEditingAdmin(true);
  };

  const handleSaveAdminAccount = () => {
    const updatedAccounts = accounts.map((account) =>
      account.email === adminAccount.email ? { ...account, email: adminEmail, password: adminPassword } : account
    );
    saveAccounts(updatedAccounts);
    setIsEditingAdmin(false);
  };

  return (
    <div className='body-color min-color'>
      <Header />
      <div>
        <h1 className='title-manager-data ml-32 mt-1'>Gestión de Usuarios</h1>
        <table>
          <thead>
            <tr className='flex'>
              <th className='text-manager-data ml-2'>{`<`}Nombre de usuario{`>`}</th>
              <th className='text-manager-data ml-6'>{`<`}Correo{`>`}</th>
              <th className='text-manager-data ml-12'>{`<`}Acciones{`>`}</th>
            </tr>
          </thead>
          <tbody>
            {accounts
              .filter(account => account.email !== adminAccount.email)
              .map(account => (
                <tr className='flex' key={account.username} style={{ color: account.disabled ? 'blue' : 'black' }}>
                  <div className='div-container-1 ml-2 mr-4'>
                    <td className='text-data ml-2'>{account.username}</td>
                  </div>
                  <div className='div-container-1 mr-4'>
                    <td className='text-data'>{account.email}</td>
                  </div>
                  <td className='text-data mt-05'>
                    <button 
                      className='mr-2'
                      onClick={() => handleDisableAccount(account.username)} 
                      disabled={account.disabled}
                    >
                      Deshabilitar
                    </button>
                    <button 
                      onClick={() => handleEnableAccount(account.username)} 
                      disabled={!account.disabled}
                    >
                      Habilitar
                    </button>
                  </td>
                </tr>
              ))}
            <tr className='flex'>
              <div className='div-container-1 ml-2 mr-4'>
                <td className='text-data ml-2'>{adminAccount.username}</td>
              </div>
              <div className='div-container-1 mr-4'>
                <td className='text-data ml-15'>
                  {isEditingAdmin ? (
                    <input 
                      type="email" 
                      value={adminEmail} 
                      onChange={(e) => setAdminEmail(e.target.value)} 
                    />
                  ) : (
                    adminAccount.email
                  )}
                </td>
              </div>
              <td className='text-data'>
                {isEditingAdmin ? (
                  <>
                    <input 
                      type="password" 
                      value={adminPassword} 
                      onChange={(e) => setAdminPassword(e.target.value)} 
                    />
                    <button className='ml-2 mt-05' onClick={handleSaveAdminAccount}>Guardar</button>
                  </>
                ) : (
                  <button className='mt-05' onClick={handleEditAdminAccount}>Editar Admin</button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button className='text-data ml-2 mt-1' onClick={handleDeleteAllAccounts}>Eliminar Todos los Usuarios</button>
      </div>
    </div>
  );
};

export default ManagerData;
