'use client';
import { useEffect } from 'react';

export default function AdminDashboard() {
  useEffect(() => {
    // Redirecionar para o servidor admin original
    window.location.href = 'http://localhost:3001/dashboard';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'system-ui'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2>Redirecionando para o Dashboard Admin...</h2>
        <p>
          Se não foi redirecionado automaticamente, <a href="http://localhost:3001/dashboard">clique aqui</a>
        </p>
      </div>
    </div>
  );
}
