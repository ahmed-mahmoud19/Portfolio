import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-1">
          &lt; Built with <Heart className="w-4 h-4 text-primary inline animate-pulse-neon" /> by Ahmed Mahmoud Madany /&gt;
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
