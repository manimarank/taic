// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back to Home
      </a>
    </div>
  );
}
