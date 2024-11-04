export default function Page() {
  typeof window === 'undefined' ? console.log('Server') : console.log('Client');

  return <p>Dashboard Page</p>;
}
