
export default function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container text-center text-muted-foreground">
        <p className="font-bold text-foreground mb-4">P.S. A Personal Note</p>
        <p className="max-w-3xl mx-auto text-base mb-6">
          I created this guide because I was tired of hearing friends and family say, “just take a painkiller.” I believe we deserve better than just masking the pain. We deserve to understand our bodies and have simple, natural ways to feel better. This guide is everything I wish I had in college and my early career. I hope it brings you as much comfort as it has brought me.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Period Peace. All rights reserved. | This is not medical advice.
        </p>
      </div>
    </footer>
  );
}
