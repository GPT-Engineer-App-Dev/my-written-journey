import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t bg-background p-4 md:p-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </div>
  </footer>
);