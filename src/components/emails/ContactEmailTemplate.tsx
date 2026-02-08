import * as React from 'react';

interface EmailProps {
  name: string;
  email: string;
  service: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailProps>> = ({
  name, email, service, message
}) => (
  <div style={{ 
    fontFamily: "'Inter', sans-serif", 
    backgroundColor: '#F8FAFC', 
    padding: '40px 20px',
    color: '#0A192F' 
  }}>
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      backgroundColor: '#ffffff', 
      borderRadius: '8px', 
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    }}>
      {/* Header Bar */}
      <div style={{ backgroundColor: '#0A192F', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#C5A059', margin: 0, fontSize: '20px', letterSpacing: '2px', fontWeight: 'bold' }}>
          MAIFADI FINANCIAL SOLUTIONS
        </h1>
        <p style={{ color: '#ffffff', opacity: 0.6, fontSize: '10px', marginTop: '10px', letterSpacing: '1px' }}>
          WEB INQUIRY PORTAL
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '20px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
          New Business Lead: <span style={{ color: '#C5A059' }}>{service}</span>
        </h2>
        
        <table style={{ width: '100%', marginBottom: '30px' }}>
          <tr>
            <td style={{ padding: '8px 0', color: '#64748B', fontSize: '13px', width: '120px' }}>Client Name</td>
            <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '14px' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#64748B', fontSize: '13px' }}>Email Address</td>
            <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '14px' }}>{email}</td>
          </tr>
        </table>

        <div style={{ 
          backgroundColor: '#F1F5F9', 
          padding: '20px', 
          borderRadius: '6px', 
          fontSize: '14px', 
          lineHeight: '1.6' 
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', fontSize: '12px', color: '#64748B' }}>MESSAGE CONTENT:</p>
          {message}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F8FAFC', fontSize: '11px', color: '#94A3B8' }}>
        This inquiry was sent via the Maifadi Financial Solutions website.
        <br />
        © {new Date().getFullYear()} Maifadi Financial Solutions
      </div>
    </div>
  </div>
);