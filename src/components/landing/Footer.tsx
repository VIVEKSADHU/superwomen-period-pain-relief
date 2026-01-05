export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container text-center text-sm text-muted-foreground">
        <p>Private download • No spam • One-time purchase</p>
        <p className="mt-2">© {new Date().getFullYear()} Period Peace. All rights reserved.</p>
      </div>
    </footer>
  );
}
