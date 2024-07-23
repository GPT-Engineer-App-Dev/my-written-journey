import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => (
  <div className="relative w-full max-w-sm">
    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search blog posts..."
      className="pl-8"
    />
  </div>
);