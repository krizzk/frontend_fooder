// app/manager/dashboard/page.tsx
import React from 'react';
import Head from 'next/head';

const DashboardPage: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div style={{ position: 'relative', zIndex: 10, padding: '16px' }}>
        <header style={{ backgroundColor: '#333', opacity: 0.75, padding: '16px', textAlign: 'center' }}>
          <h1>Welcome to My Website</h1>
        </header>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: '24px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Introduction</h2>
            <p style={{ marginBottom: '16px' }}>
              Welcome to my website! Here you'll find all sorts of information about me and my work. Feel free to explore and learn more.
            </p>
            <p>
              I am passionate about web development and design. I love creating beautiful and functional websites that make a difference.
            </p>
          </section>
        </main>
        <footer style={{ backgroundColor: '#333', opacity: 0.75, padding: '16px', textAlign: 'center' }}>
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
