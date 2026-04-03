import '../index.css';
import NextLayoutShell from '../Components/NextLayoutShell';

export const metadata = {
  title: 'KarFamSoft Agency',
  description: 'KarFamSoft crafts scalable, user-focused digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextLayoutShell>{children}</NextLayoutShell>
      </body>
    </html>
  );
}
